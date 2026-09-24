export type ChecklistSection = {
  id: string;
  title: string;
  intro: string;
  items: { label: string; detail: string }[];
};

export const checklist: ChecklistSection[] = [
  {
    id: 'purpose',
    title: 'Purpose & framing',
    intro: 'Belonging needs safety before anything else.',
    items: [
      {
        label: 'Name the dimension of belonging you are after',
        detail: 'Mutual recognition, shared vulnerability, attachment to a place, kinship with nature — pick one to lead.',
      },
      {
        label: 'Build a symbolic world that is both personal and universal',
        detail: 'A common ground everyone can relate to, whatever their background. A cloud is above everyone.',
      },
      {
        label: 'Make it non-competitive and non-evaluative',
        detail: 'Nobody should be able to “fail” the experience.',
      },
      {
        label: 'Signal at the door that everyone here belongs',
        detail: 'Answer belonging uncertainty before it arises (Walton & Cohen, 2011).',
      },
    ],
  },
  {
    id: 'ritual',
    title: 'Ritual structure',
    intro: 'Threshold, experience, return.',
    items: [
      {
        label: 'Design a clear sequence',
        detail: 'Entry and threshold, then the core experience, then integration and sharing.',
      },
      {
        label: 'Give it a rhythm people can settle into',
        detail: 'Repetition and a dependable structure let attention soften.',
      },
      {
        label: 'Create a liminal space',
        detail: 'Suspend ordinary rules a little: alter light, time and the sense of where you are.',
      },
      {
        label: 'Let it deepen over time',
        detail: 'Layer the experience so it shifts as people move through it rather than staying flat.',
      },
      {
        label: 'End together',
        detail: 'Close with a moment of sharing or collective processing, as traditional rituals do.',
      },
    ],
  },
  {
    id: 'relational',
    title: 'Social & relational dynamics',
    intro: 'Belonging is built in small acts between people.',
    items: [
      {
        label: 'Invite one small, reciprocal disclosure',
        detail: 'A feeling, a memory, a sensation — never a performance.',
      },
      {
        label: 'Make room for real listening',
        detail: 'One speaks, one receives, then roles reverse (contemplative dyads; Kok & Singer, 2017).',
      },
      {
        label: 'Share after the practice',
        detail: 'Group sharing normalises experience: what you felt was not only yours (Fagioli et al., 2023).',
      },
      {
        label: 'Create conditions for co-regulation',
        detail: 'Shared breathing, synchronised movement or collective attention.',
      },
      {
        label: 'Leave a path to meet again',
        detail: 'One-off contact fades. Give strangers a trace; give friends a reason to deepen their ties.',
      },
    ],
  },
  {
    id: 'cognitive',
    title: 'Cognitive & emotional layer',
    intro: 'Warmth first, then openness.',
    items: [
      {
        label: 'Reframe: what you feel is shared',
        detail: 'Small prompts that reduce the sense of not fitting in.',
      },
      {
        label: 'Offer a warm moment early',
        detail: 'Early positive affect helps people read others as safe.',
      },
      {
        label: 'Keep autonomy and choice',
        detail: 'Opt-in beats opt-out. Coerced participation undermines felt belonging.',
      },
      {
        label: 'Leave silence and empty space',
        detail: 'Pauses do relational work. Avoid information overload.',
      },
    ],
  },
  {
    id: 'sensory',
    title: 'Embodied & sensory design',
    intro: 'Belonging is felt in the body and attached to places.',
    items: [
      {
        label: 'Engage several senses at once',
        detail: 'Sound, scent, texture, temperature and light are each independent anchors.',
      },
      {
        label: 'Use warmth, literal and metaphorical',
        detail: 'Warm light, warm materials, warm tones.',
      },
      {
        label: 'Design the floor and the posture',
        detail: 'Shoes off, sitting or lying down: from visitor to inhabitant.',
      },
      {
        label: 'Let sound carry presence',
        detail: 'Breath, rhythm and distant voices signal safety and company.',
      },
      {
        label: 'Offer an object to touch or carry away',
        detail: 'Shared meaning, extended beyond the room.',
      },
    ],
  },
  {
    id: 'interaction',
    title: 'Immersion & interactivity',
    intro: 'A feedback loop between bodies and artwork.',
    items: [
      {
        label: 'Close the loop with biofeedback, gently',
        detail: 'Breath or heartbeat can make participants part of the work — without making it a test.',
      },
      {
        label: 'Balance guidance and openness',
        detail: 'Enough structure to feel safe, enough freedom to feel personal.',
      },
      {
        label: 'Make belonging visible in gesture',
        detail: 'A shared posture, a collective movement, a breath taken together.',
      },
      {
        label: 'Treat onboarding as part of the work',
        detail: 'Removing shoes, putting on a sensor, a settling question: preparation already begins the shared experience.',
      },
    ],
  },
  {
    id: 'space',
    title: 'Environment & space',
    intro: 'The room is a collaborator.',
    items: [
      {
        label: 'Choose a space that feels intentional',
        detail: 'Unconventional spaces support ritual better than generic ones.',
      },
      {
        label: 'Treat light, air, temperature and noise as belonging cues',
        detail: 'Not only as aesthetics.',
      },
      {
        label: 'Look for existing place-attachment',
        detail: 'Sites with history or texture extend the effect.',
      },
      {
        label: 'Let spatial flow mirror an inner journey',
        detail: 'Progression, not random wandering.',
      },
    ],
  },
  {
    id: 'evaluation',
    title: 'Listening afterwards',
    intro: 'Was the connection genuine or performed?',
    items: [
      {
        label: 'Begin with a short inward question',
        detail: 'A pre-entry prompt about one’s current state turns attention inward.',
      },
      {
        label: 'Collect stories without steering them',
        detail: 'Balance first-person accounts with other measures.',
      },
      {
        label: 'Ask whether connection was felt or performed',
        detail: 'The distinction matters most.',
      },
    ],
  },
];
