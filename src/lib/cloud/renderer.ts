import type { CloudState, Vec3 } from './states';

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

// Raymarched volumetric cumulus: a handful of smooth-unioned spheres with a flat base,
// eroded by fBm noise. Lighting uses Beer–Lambert transmittance towards the sun, a
// "powder" term for dark edges, and a dual-lobe Henyey–Greenstein phase function
// for the silver lining when the sun is behind the cloud.
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunCol;
uniform vec3 uSkyTop;
uniform vec3 uSkyHor;
uniform vec3 uAmbTop;
uniform vec3 uAmbBot;
uniform vec3 uGlowCol;
uniform float uGlow;
uniform float uDensity;
uniform float uStars;
uniform float uDisc;
uniform vec3 uDiscCol;
uniform vec3 uFlashPos;
uniform float uFlash;
uniform vec3 uPlace;
uniform float uExposure;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash13(i), hash13(i + vec3(1.0, 0.0, 0.0)), f.x),
        mix(hash13(i + vec3(0.0, 1.0, 0.0)), hash13(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(hash13(i + vec3(0.0, 0.0, 1.0)), hash13(i + vec3(1.0, 0.0, 1.0)), f.x),
        mix(hash13(i + vec3(0.0, 1.0, 1.0)), hash13(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z);
}

float fbm4(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * noise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s / 0.9375;
}

float fbm2(vec3 p) {
  return (0.5 * noise(p) + 0.25 * noise(p * 2.03 + vec3(1.7, 9.2, 3.1))) / 0.75;
}

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float blob(vec3 p, vec3 c, float r) {
  return length(p - c) - r;
}

float shape(vec3 p) {
  float k = 0.16;
  float d = blob(p, vec3(0.0, 0.02, 0.0), 0.56);
  d = smin(d, blob(p, vec3(-0.58, -0.1, 0.05), 0.42), k);
  d = smin(d, blob(p, vec3(0.6, -0.08, -0.05), 0.45), k);
  d = smin(d, blob(p, vec3(0.24, 0.4, 0.12), 0.37), k);
  d = smin(d, blob(p, vec3(-0.3, 0.33, -0.08), 0.34), k);
  d = smin(d, blob(p, vec3(0.0, 0.64, 0.02), 0.25), k);
  d = smin(d, blob(p, vec3(0.55, 0.3, 0.1), 0.29), k);
  d = smin(d, blob(p, vec3(-0.68, 0.17, 0.0), 0.26), k);
  d = smin(d, blob(p, vec3(0.92, 0.06, 0.08), 0.25), k);
  d = smin(d, blob(p, vec3(1.08, -0.22, 0.0), 0.27), k);
  d = smin(d, blob(p, vec3(-1.02, -0.23, 0.02), 0.25), k);
  d = smin(d, blob(p, vec3(-0.12, -0.08, 0.34), 0.34), k);
  d = smin(d, blob(p, vec3(0.3, -0.12, 0.3), 0.3), k);
  return max(d, -(p.y + 0.34));
}

// Noise can push density up to 0.24 beyond the shape surface, and warp() moves it by up to ~0.19;
// the skip thresholds in main() (0.26 on the warped shape, 0.45 on the unwarped one) depend on this.
float densityFrom(float s, float n) {
  return clamp((-s + (n - 0.52) * 0.5) * 11.0, 0.0, 1.0) * uDensity;
}

vec3 warp(vec3 p, vec3 w) {
  vec3 q = p * 1.6 + w * 0.4;
  return p + vec3(noise(q) - 0.5, (noise(q + 17.3) - 0.5) * 0.6, noise(q + 31.7) - 0.5) * 0.34;
}

vec3 wind() {
  return vec3(uTime * 0.035, uTime * 0.012, uTime * 0.02);
}

float hg(float mu, float g) {
  float g2 = g * g;
  return (1.0 - g2) / (12.566 * pow(1.0 + g2 - 2.0 * g * mu, 1.5));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  vec3 ro = vec3(0.0, 0.0, 3.4);
  vec3 rd = normalize(vec3(uv, -1.7));
  vec3 L = normalize(uSunDir);
  float mu = dot(rd, L);

  float ty = clamp(gl_FragCoord.y / uRes.y, 0.0, 1.0);
  vec3 sky = mix(uSkyHor, uSkyTop, smoothstep(0.0, 1.0, ty));
  sky += uDiscCol * uDisc * (pow(max(mu, 0.0), 6.0) * 0.35 + smoothstep(0.9993, 0.9997, mu) * 0.9);

  vec2 g = gl_FragCoord.xy / uRes.y * 160.0;
  vec2 cell = floor(g);
  float r = hash13(vec3(cell, 7.0));
  float star = step(0.986, r) * smoothstep(0.4, 0.0, length(fract(g) - 0.5));
  sky += vec3(star * uStars * ty * (0.6 + 0.4 * sin(uTime * 1.7 + r * 60.0)));

  vec3 c = vec3(uPlace.xy, 0.0);
  vec3 lro = (ro - c) / uPlace.z;
  float b = dot(lro, rd);
  float cc = dot(lro, lro) - 1.6 * 1.6;
  float disc = b * b - cc;

  vec3 col = vec3(0.0);
  float T = 1.0;

  if (disc > 0.0) {
    float sq = sqrt(disc);
    float t = max(-b - sq, 0.0);
    float t1 = -b + sq;
    float stepLen = (t1 - t) / 48.0;
    t += stepLen * hash13(vec3(gl_FragCoord.xy, 3.0));
    float phase = mix(hg(mu, 0.6), hg(mu, -0.2), 0.35) * 10.0;
    vec3 w = wind();
    float lightJitter = 0.6 + 0.8 * hash13(vec3(gl_FragCoord.xy, 11.0));

    for (int i = 0; i < 72; i++) {
      if (t > t1 || T < 0.02) break;
      vec3 p = lro + rd * t;
      float coarse = shape(p);
      if (coarse > 0.45) {
        t += max(coarse - 0.4, stepLen);
        continue;
      }
      float s = shape(warp(p, w));
      float d = s > 0.26 ? 0.0 : densityFrom(s, fbm4(p * 2.6 + w));
      if (d > 0.002) {
        float ld = 0.0;
        float ls = 0.05 * lightJitter;
        vec3 lp = p;
        for (int j = 0; j < 5; j++) {
          lp += L * ls;
          float s2 = shape(warp(lp, w));
          if (s2 < 0.26) ld += densityFrom(s2, fbm2(lp * 2.6 + w)) * ls;
          ls *= 1.6;
        }
        float beer = max(exp(-ld * 7.0), exp(-ld * 1.8) * 0.18);
        float powder = 1.0 - exp(-d * 5.0);
        float light = beer * mix(1.0, powder, 0.55);
        vec3 amb = mix(uAmbBot, uAmbTop, clamp((p.y + 0.4) / 1.2, 0.0, 1.0));
        vec3 S = uSunCol * light * phase + amb * (0.35 + 0.65 * exp(-ld * 1.2));
        vec3 gp = p - vec3(0.0, -0.02, 0.0);
        S += uGlowCol * uGlow * exp(-dot(gp, gp) * 3.0);
        S += vec3(0.85, 0.88, 1.0) * uFlash * exp(-length(p - uFlashPos) * 3.2) * 7.0;
        float Ts = exp(-d * 16.0 * stepLen);
        col += T * S * (1.0 - Ts);
        T *= Ts;
      }
      t += stepLen;
    }
  }

  float alpha = 1.0 - T;
  vec3 cloud = col / max(alpha, 1e-3);
  cloud = 1.0 - exp(-cloud * uExposure);
  cloud = pow(cloud, vec3(1.0 / 2.2));
  gl_FragColor = vec4(mix(sky, cloud, alpha), 1.0);
}
`;

export type GLState = {
  skyTop: Vec3;
  skyHorizon: Vec3;
  sunDir: Vec3;
  sunColor: Vec3;
  ambientTop: Vec3;
  ambientBottom: Vec3;
  glowColor: Vec3;
  discColor: Vec3;
  glow: number;
  pulse: number;
  density: number;
  stars: number;
  disc: number;
  storm: number;
  exposure: number;
};

function hex(h: string): Vec3 {
  const n = parseInt(h.replace('#', ''), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}
const lin = (c: Vec3, k = 1): Vec3 => c.map((v) => Math.pow(v, 2.2) * k) as Vec3;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerp3 = (a: Vec3, b: Vec3, t: number): Vec3 => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function toGL(s: CloudState): GLState {
  return {
    skyTop: hex(s.skyTop),
    skyHorizon: hex(s.skyHorizon),
    sunDir: s.sunDir,
    sunColor: lin(hex(s.sunColor), s.sunIntensity),
    ambientTop: lin(hex(s.ambientTop), s.ambientIntensity),
    ambientBottom: lin(hex(s.ambientBottom), s.ambientIntensity),
    glowColor: lin(hex(s.glowColor)),
    discColor: hex(s.discColor),
    glow: s.glow,
    pulse: s.pulse,
    density: s.density,
    stars: s.stars,
    disc: s.disc,
    storm: s.storm,
    exposure: s.exposure,
  };
}

function mixGL(a: GLState, b: GLState, t: number): GLState {
  const out = {} as GLState;
  for (const k of Object.keys(a) as (keyof GLState)[]) {
    const va = a[k];
    const vb = b[k];
    (out as Record<string, unknown>)[k] = Array.isArray(va) ? lerp3(va, vb as Vec3, t) : lerp(va as number, vb as number, t);
  }
  return out;
}

export type Placement = { x: number; y: number; scale: number };

export type RendererOptions = {
  placement: () => Placement;
  animate: boolean;
  onFrame?: (state: GLState) => void;
};

export class CloudRenderer {
  private gl: WebGLRenderingContext;
  private program: WebGLProgram;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private from: GLState;
  private to: GLState;
  private current: GLState;
  private transitionStart = 0;
  private transitionDuration = 1;
  private running = false;
  private raf = 0;
  private startTime = performance.now();
  private lastFrame = 0;
  private renderScale = 0.5;
  private frameTimes: number[] = [];
  private flash = 0;
  private flashPos: Vec3 = [0, 0, 0];
  private nextFlash = 0;
  private dirty = true;

  static supported(): boolean {
    try {
      const c = document.createElement('canvas');
      return !!c.getContext('webgl');
    } catch {
      return false;
    }
  }

  constructor(
    private canvas: HTMLCanvasElement,
    initial: CloudState,
    private options: RendererOptions,
  ) {
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
    if (!gl) throw new Error('WebGL unavailable');
    this.gl = gl;
    this.program = this.compile();
    this.from = this.to = this.current = toGL(initial);
    new ResizeObserver(() => this.resize()).observe(canvas);
    this.resize();
  }

  private compile(): WebGLProgram {
    const gl = this.gl;
    const make = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? 'shader error');
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, make(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, make(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) ?? 'link error');
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    for (const name of [
      'uRes', 'uTime', 'uSunDir', 'uSunCol', 'uSkyTop', 'uSkyHor', 'uAmbTop', 'uAmbBot', 'uGlowCol', 'uGlow',
      'uDensity', 'uStars', 'uDisc', 'uDiscCol', 'uFlashPos', 'uFlash', 'uPlace', 'uExposure',
    ]) {
      this.uniforms[name] = gl.getUniformLocation(prog, name);
    }
    return prog;
  }

  private resize() {
    const rect = this.canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(Math.max(Math.min(rect.width, 1600) * this.renderScale, Math.min(rect.width, 420))));
    const h = Math.max(1, Math.round(w * (rect.height / Math.max(rect.width, 1))));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
    }
    this.dirty = true;
    if (!this.running) this.draw(performance.now());
  }

  setState(state: CloudState, duration = 2500) {
    this.from = this.current;
    this.to = toGL(state);
    this.transitionStart = performance.now();
    this.transitionDuration = Math.max(1, duration);
    this.dirty = true;
    if (!this.running) this.draw(performance.now());
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastFrame = 0;
    const loop = (now: number) => {
      if (!this.running) return;
      this.raf = requestAnimationFrame(loop);
      if (now - this.lastFrame < 1000 / 30 - 2) return;
      if (this.lastFrame) this.adapt(now - this.lastFrame);
      this.lastFrame = now;
      this.draw(now);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  /** Frame intervals well above the 30 fps target mean the GPU is struggling: render fewer pixels. */
  private adapt(interval: number) {
    this.frameTimes.push(interval);
    if (this.frameTimes.length < 30) return;
    const sorted = [...this.frameTimes].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    this.frameTimes = [];
    const prev = this.renderScale;
    if (median > 45 && this.renderScale > 0.25) this.renderScale = Math.max(0.25, this.renderScale - 0.08);
    else if (median < 36 && this.renderScale < 0.6) this.renderScale = Math.min(0.6, this.renderScale + 0.04);
    if (prev !== this.renderScale) this.resize();
  }

  private draw(now: number) {
    const k = Math.min(1, (now - this.transitionStart) / this.transitionDuration);
    const transitioning = k < 1;
    if (!transitioning && !this.dirty && !this.options.animate && this.flash <= 0.001 && this.to.storm < 0.01 && this.to.pulse < 0.01) return;
    this.current = transitioning ? mixGL(this.from, this.to, ease(k)) : this.to;
    this.dirty = false;
    const s = this.current;
    const time = this.options.animate ? (now - this.startTime) / 1000 : 12;

    // Lightning: occasional double flashes at random points inside the cloud.
    if (s.storm > 0.3 && now > this.nextFlash) {
      this.flash = 1;
      this.flashPos = [(Math.random() - 0.5) * 1.3, -0.15 + Math.random() * 0.45, (Math.random() - 0.5) * 0.5];
      this.nextFlash = now + 1800 + Math.random() * 5200 / s.storm;
    }
    const flicker = this.flash > 0.55 && this.flash < 0.7 ? 0.25 : 1;
    this.flash = Math.max(0, this.flash - 0.06);

    const breath = 0.5 - 0.5 * Math.cos(((time % 10) / 10) * Math.PI * 2);
    const glow = s.glow * (1 - s.pulse + s.pulse * (0.35 + 0.65 * breath));

    const gl = this.gl;
    const u = this.uniforms;
    const place = this.options.placement();
    gl.uniform2f(u.uRes, this.canvas.width, this.canvas.height);
    gl.uniform1f(u.uTime, time);
    gl.uniform3fv(u.uSunDir, s.sunDir);
    gl.uniform3fv(u.uSunCol, s.sunColor);
    gl.uniform3fv(u.uSkyTop, s.skyTop);
    gl.uniform3fv(u.uSkyHor, s.skyHorizon);
    gl.uniform3fv(u.uAmbTop, s.ambientTop);
    gl.uniform3fv(u.uAmbBot, s.ambientBottom);
    gl.uniform3fv(u.uGlowCol, s.glowColor);
    gl.uniform1f(u.uGlow, glow);
    gl.uniform1f(u.uDensity, s.density);
    gl.uniform1f(u.uStars, s.stars);
    gl.uniform1f(u.uDisc, s.disc);
    gl.uniform3fv(u.uDiscCol, s.discColor);
    gl.uniform3fv(u.uFlashPos, this.flashPos);
    gl.uniform1f(u.uFlash, this.flash * s.storm * flicker);
    gl.uniform3f(u.uPlace, place.x, place.y, place.scale);
    gl.uniform1f(u.uExposure, s.exposure);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    this.options.onFrame?.(s);
  }
}
