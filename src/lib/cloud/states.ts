export type Vec3 = [number, number, number];

/** Colours are display-space hex; the renderer linearises lighting colours itself. */
export type CloudState = {
  skyTop: string;
  skyHorizon: string;
  sunDir: Vec3;
  sunColor: string;
  sunIntensity: number;
  ambientTop: string;
  ambientBottom: string;
  ambientIntensity: number;
  glowColor: string;
  glow: number;
  /** 0–1: how much the inner glow follows a slow breathing rhythm. */
  pulse: number;
  density: number;
  stars: number;
  /** Visibility of the sun or moon disc and its halo. */
  disc: number;
  discColor: string;
  /** Flash frequency inside the cloud; 0 disables flashes, higher is more frequent. */
  storm: number;
  /** Each flash picks one of these colours. */
  flashColors: string[];
  /** 0 = plain lightning, 1 = flashes reveal strange, image-like forms inside the cloud. */
  flashPattern: number;
  exposure: number;
};

const base: CloudState = {
  skyTop: '#9a9dea',
  skyHorizon: '#f8f7f4',
  sunDir: [0.4, 0.75, 0.4],
  sunColor: '#fff4e2',
  sunIntensity: 3,
  ambientTop: '#b9c2f2',
  ambientBottom: '#716b99',
  ambientIntensity: 0.9,
  glowColor: '#c9b8ff',
  glow: 0,
  pulse: 0,
  density: 1,
  stars: 0,
  disc: 0,
  discColor: '#fff1d6',
  storm: 0,
  flashColors: ['#e6ebff'],
  flashPattern: 0,
  exposure: 1.1,
};

export const cloudStates = {
  paper: {
    ...base,
    skyTop: '#e3e6fb',
    skyHorizon: '#f8f7f4',
    sunDir: [0.35, 0.85, 0.5],
    sunIntensity: 2.6,
    ambientTop: '#d6dcfa',
    ambientBottom: '#9a9dea',
    ambientIntensity: 1,
  },
  dawn: {
    ...base,
    skyTop: '#9a9dea',
    skyHorizon: '#fcdcaa',
    sunDir: [0.9, 0.12, 0.2],
    sunColor: '#ffc27a',
    sunIntensity: 3.6,
    ambientTop: '#dca7d3',
    ambientBottom: '#716b99',
    ambientIntensity: 0.7,
    disc: 0.6,
    discColor: '#ffd9a0',
  },
  day: {
    ...base,
    skyTop: '#7f98e6',
    skyHorizon: '#e6eafb',
    sunDir: [0.3, 0.9, 0.45],
    sunColor: '#fff6e8',
    sunIntensity: 3.2,
    ambientTop: '#b3c0f4',
    ambientBottom: '#6f75b0',
    ambientIntensity: 1,
    exposure: 1.2,
  },
  golden: {
    ...base,
    skyTop: '#877cbe',
    skyHorizon: '#f8a98c',
    sunDir: [-0.85, 0.1, -0.45],
    sunColor: '#ffa866',
    sunIntensity: 4.2,
    ambientTop: '#9a9dea',
    ambientBottom: '#5f65a3',
    ambientIntensity: 0.6,
    disc: 0.7,
    discColor: '#ffc48a',
  },
  /** The sun sets and the first lightning begins. */
  dusk: {
    ...base,
    skyTop: '#4a4f8e',
    skyHorizon: '#f8a98c',
    sunDir: [-0.6, -0.05, -0.8],
    sunColor: '#ff8f6a',
    sunIntensity: 3,
    ambientTop: '#877cbe',
    ambientBottom: '#3a3f7a',
    ambientIntensity: 0.45,
    disc: 0.5,
    discColor: '#ffab80',
    storm: 0.45,
    flashColors: ['#e6ebff', '#f3e9ff'],
  },
  /** Light intensifies instead of fading; strange image-like forms flash through the cloud. */
  twilight: {
    ...base,
    skyTop: '#28366f',
    skyHorizon: '#dca7d3',
    sunDir: [0.5, -0.25, 0.5],
    sunColor: '#f8a98c',
    sunIntensity: 2.4,
    ambientTop: '#6f75b0',
    ambientBottom: '#877cbe',
    ambientIntensity: 0.35,
    glowColor: '#f9c77c',
    glow: 0.45,
    stars: 0.5,
    storm: 1.6,
    flashColors: ['#dca7d3', '#f9c77c', '#9a9dea', '#f8a98c', '#ffffff'],
    flashPattern: 1,
    exposure: 1.1,
  },
  storm: {
    ...base,
    skyTop: '#161a36',
    skyHorizon: '#3a3f6e',
    sunDir: [0.2, 0.9, -0.3],
    sunColor: '#a8b0e0',
    sunIntensity: 0.25,
    ambientTop: '#3a4280',
    ambientBottom: '#1b2250',
    ambientIntensity: 0.3,
    density: 1.5,
    stars: 0.15,
    storm: 1,
    exposure: 1.3,
  },
  moon: {
    ...base,
    skyTop: '#111739',
    skyHorizon: '#344589',
    sunDir: [-0.35, 0.75, -0.55],
    sunColor: '#c9d4ff',
    sunIntensity: 1.1,
    ambientTop: '#344c9e',
    ambientBottom: '#1b2250',
    ambientIntensity: 0.35,
    stars: 1,
    disc: 0.8,
    discColor: '#dfe6ff',
    exposure: 1.4,
  },
  /** The cloud's light swells and settles with the participant's respiration. */
  breath: {
    ...base,
    skyTop: '#1b2250',
    skyHorizon: '#877cbe',
    sunDir: [-0.3, 0.6, -0.7],
    sunColor: '#b9c2ff',
    sunIntensity: 0.7,
    ambientTop: '#344c9e',
    ambientBottom: '#28366f',
    ambientIntensity: 0.4,
    glowColor: '#d9c6ff',
    glow: 2.4,
    pulse: 1,
    stars: 0.6,
    exposure: 1.3,
  },
  sunrise: {
    ...base,
    skyTop: '#f8a98c',
    skyHorizon: '#fae7c6',
    sunDir: [0.75, 0.05, 0.6],
    sunColor: '#ffc67c',
    sunIntensity: 4,
    ambientTop: '#fcdcaa',
    ambientBottom: '#877cbe',
    ambientIntensity: 0.75,
    disc: 0.9,
    discColor: '#fff0c8',
  },
  reflection: {
    ...base,
    skyTop: '#f3e9e4',
    skyHorizon: '#fae7c6',
    sunDir: [0.4, 0.8, 0.5],
    sunColor: '#fff0dc',
    sunIntensity: 2.8,
    ambientTop: '#eadcf0',
    ambientBottom: '#9a9dea',
    ambientIntensity: 1,
  },
} satisfies Record<string, CloudState>;

export type CloudStateName = keyof typeof cloudStates;
