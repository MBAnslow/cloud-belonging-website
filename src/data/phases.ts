import type { CloudStateName } from '../lib/cloud/states';

export type Phase = {
  id: string;
  numeral: string;
  title: string;
  /** Lighting of the 3D cloud during this phase. */
  cloud: CloudStateName;
  /** Fallback sky gradient when WebGL is unavailable. */
  sky: [string, string];
  /** Whether the card text sits on a dark sky. */
  dark: boolean;
  text: string;
  notes: string[];
};

export const phases: Phase[] = [
  {
    id: 'dusk',
    numeral: 'I',
    title: 'Dusk',
    cloud: 'dusk',
    sky: ['#4a4f8e', '#f8a98c'],
    dark: true,
    text: 'The sun sets behind the cloud. As the light drains from the sky, the first flickers of lightning begin inside it.',
    notes: ['Sunset as a threshold', 'Lightning begins'],
  },
  {
    id: 'twilight',
    numeral: 'II',
    title: 'Magical twilight',
    cloud: 'twilight',
    sky: ['#28366f', '#dca7d3'],
    dark: true,
    text: 'Instead of fading, the light intensifies. Strange, image-like forms flash through the cloud like lightning. The evening turns into a story, and this is where you bond with the cloud.',
    notes: ['A narrative turn', 'Rising intensity', 'Bonding with the cloud'],
  },
  {
    id: 'breath',
    numeral: 'III',
    title: 'Breath synchrony',
    cloud: 'breath',
    sky: ['#1b2250', '#877cbe'],
    dark: true,
    text: 'Now the cloud breathes with you. A sensor follows the rise and fall of your respiration, and the cloud’s light swells and settles with each breath.',
    notes: ['Driven by your respiration', 'Breathing with, not controlling'],
  },
];
