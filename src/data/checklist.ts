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
        label: 'Define a clear intention for the installation',
        detail: 'What specific dimension of belonging do you want to evoke? (e.g. mutual recognition, shared vulnerability, place-attachment)',
      },
      {
        label: 'Build a symbolic universe',
        detail: 'Balance the particular/personal with the universal/collective to create a common ground all participants can relate to regardless of background.',
      },
      {
        label: 'Frame the experience explicitly as non-competitive and non-evaluative',
        detail: 'Safety is a precondition for belonging.',
      },
      {
        label: 'Signal at entry that everyone here belongs',
        detail: 'Counter belonging uncertainty before it arises (Walton & Cohen).',
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
        detail: 'Entry / threshold → core experience → integration/socialisation (separation–initiation–return).',
      },
      {
        label: 'Include repetition and structure',
        detail: 'A recognisable, dependable rhythm that participants can settle into.',
      },
      {
        label: 'Create a liminal space',
        detail: 'Where ordinary rules feel suspended — alter time and spatial perception to open participants to transformation.',
      },
      {
        label: 'Build in layering over time',
        detail: 'The experience should deepen or shift as participants move through it, not stay flat.',
      },
      {
        label: 'End with a socialisation moment',
        detail: 'Group sharing, conversation, or collective processing after the core experience, as traditional rituals do.',
      },
    ],
  },
  {
    id: 'relational',
    title: 'Social & relational dynamics',
    intro: 'Belonging is built in small acts between people.',
    items: [
      {
        label: 'Design a moment of structured reciprocal disclosure',
        detail: 'A prompt that invites a small personal share (feeling, memory, sensation), not a performance.',
      },
      {
        label: 'Ensure the format allows active listening',
        detail: 'One person speaks, the other receives, then roles reverse (contemplative dyad structure).',
      },
      {
        label: 'Normalise vulnerability through group sharing',
        detail: 'This reduces the sense that one\'s struggles are unique (Fagioli et al., 2023).',
      },
      {
        label: 'Create conditions for co-regulation',
        detail: 'Shared breathing, synchronised movement, or collective attention all trigger physiological bonding.',
      },
      {
        label: 'Design a path to re-encounter for strangers',
        detail: 'How will they remember or find each other after? One-off contact is less effective without a trace.',
      },
      {
        label: 'Deepen existing ties if they know each other',
        detail: 'Use the installation to deepen existing ties, not just create new ones.',
      },
    ],
  },
  {
    id: 'cognitive',
    title: 'Cognitive & emotional layer',
    intro: 'Warmth first, then openness.',
    items: [
      {
        label: 'Include reframing prompts',
        detail: 'Moments that communicate "what you feel is shared, not just yours" to reduce belonging uncertainty.',
      },
      {
        label: 'Trigger positive affect early',
        detail: 'Even small warm moments prime the system to perceive others as safe.',
      },
      {
        label: 'Allow autonomy and choice within the structure',
        detail: 'Coerced participation undermines felt belonging; opt-in beats opt-out.',
      },
      {
        label: 'Avoid information overload',
        detail: 'Let silences, pauses, and empty space do relational work.',
      },
    ],
  },
  {
    id: 'sensory',
    title: 'Embodied & sensory design',
    intro: 'Belonging is felt in the body and attached to places.',
    items: [
      {
        label: 'Stimulate multiple senses simultaneously',
        detail: 'Sound, scent, texture, temperature, light — each is an independent anchor for felt belonging.',
      },
      {
        label: 'Use warmth (literal and metaphorical)',
        detail: 'Warm lighting, warm materials, warm tones; physiological warmth is cognitively linked to social warmth.',
      },
      {
        label: 'Design the floor and body posture intentionally',
        detail: 'Removing shoes, sitting on the ground, or lying down shift participants from "visitor" to "inhabitant" mode.',
      },
      {
        label: 'Use soundscape as a primary belonging cue',
        detail: 'Familiar rhythms, breath sounds, or human voices (even distant) signal presence and safety.',
      },
      {
        label: 'Consider scent as a sensory route',
        detail: 'Scent is the most direct sensory route to memory and place-attachment.',
      },
      {
        label: 'Create symbolic objects to touch or carry',
        detail: 'Imbue objects with shared meaning to extend belonging beyond the space.',
      },
    ],
  },
  {
    id: 'interaction',
    title: 'Immersion & interactivity',
    intro: 'A feedback loop between bodies and artwork.',
    items: [
      {
        label: 'Use biofeedback or responsive technology',
        detail: 'If available (breath, heartbeat), create a feedback loop between participant and installation.',
      },
      {
        label: 'Balance guidance and openness',
        detail: 'Give enough structure to feel safe, enough freedom to feel personal.',
      },
      {
        label: 'Include performative elements',
        detail: 'Gestures, postures, collective movements or chanting that make belonging visible and enacted, not just felt.',
      },
      {
        label: 'Curate the onboarding ritual carefully',
        detail: 'Removing shoes, wearing a sensor, a short settling questionnaire — the preparation process itself begins the sense of shared experience.',
      },
    ],
  },
  {
    id: 'space',
    title: 'Environment & space',
    intro: 'The room is a collaborator.',
    items: [
      {
        label: 'Choose or design an intentional space',
        detail: 'Unconventional spaces better support ritual and immersive quality.',
      },
      {
        label: 'Attend to ambient variables as belonging cues',
        detail: 'Lighting, air circulation, temperature, and noise levels are cues, not just aesthetics.',
      },
      {
        label: 'Consider pre-existing place-attachment potential',
        detail: 'Sites with history, texture, or cultural resonance extend the belonging effect.',
      },
      {
        label: 'Design the spatial flow intentionally',
        detail: 'Movement through the space should mirror an inner journey (progression, not random wandering).',
      },
    ],
  },
  {
    id: 'evaluation',
    title: 'Evaluation & feedback',
    intro: 'Was the connection genuine or performed?',
    items: [
      {
        label: 'Use a brief pre-entry reflection',
        detail: 'A short question or prompt about current state turns attention inward before the experience begins.',
      },
      {
        label: 'Design a post-experience sharing moment',
        detail: 'Collect narratives without over-biasing responses — balance subjective and objective.',
      },
      {
        label: 'Track genuine vs performed connection',
        detail: 'The distinction matters most for felt belonging.',
      },
    ],
  },
];
