// -----------------------------------------------------------------------------
// Cloud silhouette — hand-editable data for the home-page cloud.
//
// The shape is built from a list of smooth-min'd spheres ("blobs") plus a soft,
// slightly undulating base plane that gives the underside volume without a hard
// edge.
//
// To restyle the cloud:
//   1. Tweak entries in BLOBS — each row is [x, y, z, radius] in world units.
//      The first entry seeds the shape; every row after it is smoothly blended
//      in using BLEND.
//   2. Tune BASE to raise/lower the underside and to add/remove gentle swells.
//
// Positive x is right, positive y is up, positive z is towards the camera.
// The home-page cloud fits comfortably across roughly x ∈ [-1.3, 1.3] and
// y ∈ [-0.3, 0.8]. Stay within those bounds unless you also want to adjust
// camera placement in `renderer.ts`.
//
// Every edit here is picked up on the next page reload — no shader editing
// required.
// -----------------------------------------------------------------------------

/** Smooth-min blend radius used when unioning spheres together. */
export const BLEND = 0.11;

export type Blob = readonly [x: number, y: number, z: number, r: number];

export const BLOBS: readonly Blob[] = [
  // ── Core body (oblate, slightly offset left for an asymmetric silhouette) ──
  [-0.08, -0.02, 0.0, 0.2],
  [-0.55, -0.1, 0.05, 0.5],
  [0.5, -0.1, -0.04, 0.7],

  // ── Cauliflower crown rising to a peak just left of centre ──
  [-0.12, 0.52, 0.08, 0.4],
  [-0.38, 0.4, -0.05, 0.34],
  [0.14, 0.46, 0.04, 0.34],
  [0.4, 0.3, 0.0, 0.3],
  [-0.6, 0.26, 0.02, 0.3],
  [-0.3, 0.56, 0.1, 0.22],
  [-0.08, 0.68, 0.02, 0.22],
  [-0.18, 0.74, -0.02, 0.14],

  // ── Mid-body filler so the volume reads from any angle ──
  [0.26, 0.18, 0.12, 0.3],
  [-0.3, 0.12, -0.1, 0.3],
  [-0.1, 0.0, 0.3, 0.3],
  [0.12, 0.0, -0.3, 0.28],

  // ── Tapering tail on the left (longer) and right (shorter) ──
  [-0.5, -0.14, 0.0, 0.05],
  [-0.6, -0.2, 0.04, 0.12],
  [-0.9, -0.24, 0.0, 0.12],
  [0.78, -0.14, 0.0, 0.12],
  [0.98, -0.2, 0.0, 0.16],
  [1.14, -0.24, 0.0, 0.1],

  // ── Gentle bumps along the base so the underside reads organic ──
  [-0.32, -0.26, 0.04, 0.3],
  [0.08, -0.26, -0.08, 0.5],
  [0.42, -2, 0.08, 0.2],
];

/** Base plane that softly clips the underside of the cloud. */
export const BASE = {
  /** Height of the base plane (lower = cloud sits lower / taller). */
  y: -0.5,
  /** Smooth-min radius used where the base meets the body. */
  smoothness: 0.1,
  /** Low-frequency sine waves that give the underside gentle swells. */
  waves: [
    { amp: 0.07, kx: 2.0, kz: 0.0, phase: 0.4 },
    { amp: 0.05, kx: 4.0, kz: 1.4, phase: 0.1 },
    { amp: 0.012, kx: 3.0, kz: -3.0, phase: 0.0 },
  ] as const,
};

const num = (v: number) => (Number.isInteger(v) ? `${v}.0` : v.toString());

/** Compose the GLSL `float shape(vec3 p)` function from the data above. */
export function buildShapeGLSL(): string {
  if (BLOBS.length === 0) throw new Error('shape.ts: BLOBS must contain at least one blob');
  const [seed, ...rest] = BLOBS;
  const seedLine = `float d = blob(p, vec3(${num(seed[0])}, ${num(seed[1])}, ${num(seed[2])}), ${num(seed[3])});`;
  const unions = rest
    .map(([x, y, z, r]) => `  d = smin(d, blob(p, vec3(${num(x)}, ${num(y)}, ${num(z)}), ${num(r)}), ${num(BLEND)});`)
    .join('\n');
  const waveTerms = BASE.waves
    .map((w) => `    + ${num(w.amp)} * sin(p.x * ${num(w.kx)} + p.z * ${num(w.kz)} + ${num(w.phase)})`)
    .join('\n');
  return `
float shape(vec3 p) {
  ${seedLine}
${unions}
  float base = -(p.y + ${num(-BASE.y)}
${waveTerms});
  return -smin(-d, -base, ${num(BASE.smoothness)});
}`;
}
