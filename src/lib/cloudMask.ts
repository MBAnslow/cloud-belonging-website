export interface CloudTexture {
  grainScale: number;
  grainAmount: number;
  fringeOpacity: number;
  spillGrainScale: number;
  spillGrainAmount: number;
  fadeStart: number;
  fadeEnd: number;
  spillFadeStart: number;
  spillFadeEnd: number;
  scale: number;
  haloOpacity: number;
  haloSize: number;
  haloBlur: number;
}

export const defaultTexture: CloudTexture = {
  grainScale: 0.29,
  grainAmount: 0.99,
  fringeOpacity: 0.57,
  spillGrainScale: 0.23,
  spillGrainAmount: 1.08,
  fadeStart: 80,
  fadeEnd: 104,
  spillFadeStart: 85,
  spillFadeEnd: 115,
  scale: 1.06,
  haloOpacity: 0.42,
  haloSize: 11,
  haloBlur: 46,
};

export const fadeVars = (t: CloudTexture) =>
  `--fade-start:${t.fadeStart}%;--fade-end:${t.fadeEnd}%;--spill-fade-start:${t.spillFadeStart}%;--spill-fade-end:${t.spillFadeEnd}%;--cloud-scale:${t.scale};--halo-opacity:${t.haloOpacity};--halo-size:${t.haloSize}%;--halo-blur:${t.haloBlur}px`;

type Ellipse = [number, number, number, number];

const grainMatrix = (amount: number, slope: number, offset: number) => {
  const s = -slope * amount;
  const o = 1 + (offset - 1) * amount;
  return `0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 ${s.toFixed(3)} ${o.toFixed(3)}`;
};

export function cloudMasks(seed: number, keep: Ellipse[] = [], t: CloudTexture = defaultTexture) {
  let rng = seed * 9301 + 49297;
  const rand = () => {
    rng = (rng * 9301 + 49297) % 233280;
    return rng / 233280;
  };
  const lobes = 11;
  const blobs: number[][] = [[50, 50, 32, 30]];
  for (let i = 0; i < lobes; i++) {
    const angle = ((i + rand() * 0.6) / lobes) * Math.PI * 2;
    const reach = 0.62 + rand() * 0.22;
    const size = 9 + rand() * 11;
    blobs.push([50 + Math.cos(angle) * 34 * reach, 50 + Math.sin(angle) * 32 * reach, size * (0.9 + rand() * 0.4), size]);
  }
  const inset = 0.92;
  const shape = (k: number) =>
    blobs
      .map(([cx, cy, rx, ry]) => `<ellipse cx='${50 + (cx - 50) * inset}' cy='${50 + (cy - 50) * inset}' rx='${rx * k * inset}' ry='${ry * k * inset}'/>`)
      .join('');

  const mask = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
<filter id='soft' x='-30%' y='-30%' width='160%' height='160%'><feGaussianBlur stdDeviation='2'/></filter>
<filter id='core' x='-20%' y='-20%' width='140%' height='140%'>
<feTurbulence type='fractalNoise' baseFrequency='0.045' numOctaves='3' seed='${seed}'/>
<feDisplacementMap in='SourceGraphic' scale='16'/>
<feGaussianBlur stdDeviation='1'/>
</filter>
<filter id='bleed' x='-20%' y='-20%' width='140%' height='140%'>
<feTurbulence type='fractalNoise' baseFrequency='0.035' numOctaves='3' seed='${seed + 5}'/>
<feDisplacementMap in='SourceGraphic' scale='30'/>
<feGaussianBlur stdDeviation='2'/>
</filter>
<filter id='fringe' x='-20%' y='-20%' width='140%' height='140%'>
<feTurbulence type='fractalNoise' baseFrequency='0.16' numOctaves='5' seed='${seed + 9}'/>
<feDisplacementMap in='SourceGraphic' scale='14' result='d'/>
<feGaussianBlur in='d' stdDeviation='0.8' result='b'/>
<feTurbulence type='fractalNoise' baseFrequency='${t.grainScale}' numOctaves='2' seed='${seed + 3}'/>
<feColorMatrix type='matrix' values='${grainMatrix(t.grainAmount, 1.4, 1.5)}' result='g'/>
<feComposite in='b' in2='g' operator='in'/>
</filter>
<g fill='white'>
<g filter='url(#fringe)' opacity='${t.fringeOpacity}'>${shape(1.04)}</g>
<g filter='url(#bleed)' opacity='0.7'>${shape(0.96)}</g>
<g filter='url(#core)'>${shape(0.84)}</g>
${keep.map(([cx, cy, rx, ry]) => `<ellipse cx='${cx}' cy='${cy}' rx='${rx}' ry='${ry}' filter='url(#soft)'/>`).join('')}
</g>
</svg>`;

  const spill = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
<filter id='s' x='-30%' y='-30%' width='160%' height='160%'>
<feTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='4' seed='${seed + 13}'/>
<feDisplacementMap in='SourceGraphic' scale='34' result='d'/>
<feGaussianBlur in='d' stdDeviation='1.6' result='b'/>
<feTurbulence type='fractalNoise' baseFrequency='${t.spillGrainScale}' numOctaves='3' seed='${seed + 4}'/>
<feColorMatrix type='matrix' values='${grainMatrix(t.spillGrainAmount, 1.6, 1.7)}' result='g'/>
<feComposite in='b' in2='g' operator='in'/>
</filter>
<g fill='white' filter='url(#s)'>
<g opacity='0.55'>${shape(1)}</g>
</g>
</svg>`;

  // The same lobes and edge distortion as the photo's outline, without grain, for a soft grey halo.
  const halo = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
<filter id='h' x='-20%' y='-20%' width='140%' height='140%'>
<feTurbulence type='fractalNoise' baseFrequency='0.035' numOctaves='3' seed='${seed + 5}'/>
<feDisplacementMap in='SourceGraphic' scale='30'/>
<feGaussianBlur stdDeviation='2.5'/>
</filter>
<g fill='white' filter='url(#h)'>${shape(1)}</g>
</svg>`;

  const toUrl = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\n/g, ''))}")`;
  return { mask: toUrl(mask), spill: toUrl(spill), halo: toUrl(halo) };
}
