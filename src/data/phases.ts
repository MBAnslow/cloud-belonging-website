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
    id: 'before',
    numeral: '0',
    title: 'Before',
    cloud: 'paper',
    sky: ['#e3e6fb', '#f8f7f4'],
    dark: false,
    text: 'Shoes off. A breathing belt. A short moment to imagine a place where you feel safe — a garden, a kitchen, a shoreline.',
    notes: ['Onboarding is part of the work', 'Place people in the space they bring with them'],
  },
  {
    id: 'dusk',
    numeral: 'I',
    title: 'Dusk',
    cloud: 'dusk',
    sky: ['#5f65a3', '#f8a98c'],
    dark: true,
    text: 'The room dims like a cinema. Only ambient light; the cloud above is still dark. People lie down beneath it.',
    notes: ['Sunset as threshold', 'No light inside the cloud yet'],
  },
  {
    id: 'storm',
    numeral: 'II',
    title: 'Storm',
    cloud: 'storm',
    sky: ['#161a36', '#3a3f6e'],
    dark: true,
    text: 'Lightning inside the cloud, thunder in the room. A palate cleanser that pulls everyone out of the day they walked in with — nature as vastness, the darker side of awe.',
    notes: ['Distractor & priming towards primal experience', 'Feeling exposed to the elements'],
  },
  {
    id: 'moon',
    numeral: 'III',
    title: 'Moonlight',
    cloud: 'moon',
    sky: ['#111739', '#344589'],
    dark: true,
    text: 'The storm settles into a cool, quiet light. A time of simply breathing, without any augmentation.',
    notes: ['Night-time meditation', 'Nothing to do yet'],
  },
  {
    id: 'breath',
    numeral: 'IV',
    title: 'Shared breath',
    cloud: 'breath',
    sky: ['#1b2250', '#877cbe'],
    dark: true,
    text: 'Now the cloud listens. Each breath modulates its light. When breaths fall into step, time moves forward and dawn begins to gather. Held long enough, the system gently takes the breath back — your influence fades into the sky.',
    notes: ['Synchrony progresses time', 'Playing a role, not taking control'],
  },
  {
    id: 'sunrise',
    numeral: 'V',
    title: 'Sunrise',
    cloud: 'sunrise',
    sky: ['#f8a98c', '#fae7c6'],
    dark: false,
    text: 'Daylight. Nothing more is asked. Passive observation of something that was made together and is already passing.',
    notes: ['Impermanence', 'Gratitude for things that pass'],
  },
  {
    id: 'reflection',
    numeral: '~',
    title: 'Reflection',
    cloud: 'reflection',
    sky: ['#f3e9e4', '#fae7c6'],
    dark: false,
    text: 'A cup of tea — which also contains a cloud. A sharing circle where each person speaks once and is listened to without reply.',
    notes: ['Integration & socialisation', 'Sharing normalises experience'],
  },
];
