---
title: 'The final score: the sounds of the installation'
date: 2026-09-24
stage: Article
summary: 'How the installation score was implemented: drones, pads and bells tied to the day cycle, with enough direct synthesis control to respond to breath and light.'
cover: ../../assets/journal/2026-09-24-the-final-score/cloud-score.jpg
coverAlt: 'Watercolour bells, wind chimes and flowing musical staves moving through blue and pink storm clouds.'
sections:
  - title: 'How the score was built'
    description: >-
      The sound system was part of the same simulator that controlled the light. That meant we could place the audio on the same 24-hour timeline as dusk, magical twilight and breath synchrony, then tune the score while watching the cloud change. The important choice was to keep the score playable from inside the software, using synth voices, drones and triggered samples rather than a single fixed audio file. That gave us control over how the sound changed when the lights changed, and left room for the reactive parts of the installation.
    gallery:
      - src: ../../assets/software/simulator-sky-timeline.png
        alt: 'The simulator timeline showing the 24-hour cycle used by the installation.'
        caption: 'The 24-hour cycle gave the sound a shared structure with the light.'
      - src: ../../assets/software/drones.png
        alt: 'The drones panel in the Cloudfulness simulator.'
        caption: 'Drones provided the continuous background tone.'
      - src: ../../assets/software/pads.png
        alt: 'The pads panel in the Cloudfulness simulator.'
        caption: 'Pads could swell and change with the light.'
      - src: ../../assets/software/samples.png
        alt: 'The samples panel in the Cloudfulness simulator.'
        caption: 'Bells and other samples marked changes between periods.'
tags: [score, sound, drones, bells, breath]
---

The July draft had six movements: dusk, storm, moonlight, shared breath, sunrise and tea. The alpha installation became simpler: dusk, magical twilight and breath synchrony. But the sound score had to do more than accompany those stages. It had to help the audience feel the transitions, hold the room together, and leave enough space for the cloud to become reactive.

## Drones as atmosphere

The drone was the ground of the score: a consistent background presence that kept the room from feeling empty. It gave us a stable atmosphere underneath the changing light, the bell events and the breath stage.

Because it was generated in the software, rather than baked into a rendered track, we could treat it as part of the installation state. It could be balanced against the pads and samples, tuned to sit under the voice of the cloud, and shaped without breaking the timing of the rest of the system.

## Bells as wind and punctuation

Bells marked changes in period. Conceptually, we used them to capture something like wind moving through the cloud: small, bright events that could pass through the space without becoming a melody in the normal sense. These sampled sounds, along with the thunder sounds, came from Freesound and were then placed inside our own timing and control system. Thematically, the bells also made sense in terms of the underlying Buddhist inspiration for the installation.

## Lightning and thunder

The thunder was not just a sound effect dropped on top of the lightning. The software generated lightning events, then chose thunder samples that roughly matched the character of the strike. A short, quiet strike could pick a shorter and quieter thunder sound; a larger, longer strike could pick something with more weight.

![The Cloud bolts panel, where thunder tracks can be uploaded and tagged by volume and length.](/cloud-belonging-website/images/journal/cloud-bolts.png)

Each cloud bolt could have its own audio file, volume, and tags for loudness and duration: low, medium or high; short, medium or long. The simulator could then choose a sample that matched the lightning event instead of always playing the same thunder.

We also controlled the timing between light and sound. A lightning strike appears first, then the thunder follows after a delay. That delay could be tuned, so the thunder felt connected to the visual strike without happening at exactly the same moment.

Panning mattered too. The thunder could move across the stereo field according to where the strike happened, helping the sound feel spatial rather than simply centred in the room. To keep repeated strikes from sounding identical, we used pitch shifting to add small variations each time a sample played.

## Scoring the narrative

### From Dusk to the Magical Twilight

For the magical twilight, we wanted the score to feel slightly ominous. Not frightening, but building anticipation and also somehow hinting that something magical and slightly spooky is happening. Against this is the sound of thunder and the sound of "sprites", which have unusual sound effects that sync to visual effects.

We used a low drone followed by low synths swelling underneath the dusk background track to blend well with the rumble of thunder before magical twilight opens. These come in periodically, appearing and disappearing with plenty of space for the thunder to fill the room and the background drone and samples to shine through.

<div id="score-clouds-marker"></div>

The opening of the magical twilight is marked by dark bell sounds with a little phaser on them. The pads then enter in response to the bells, but at a higher register. That register is closer to where the pads sit through the rest of the piece, so the transition moves from the low thunder-like swell into the more luminous sounds that follow. Wind chimes and shimmering sounds end this period before the more melodic part of the score begins.

### Breath and Dawn to Daylight

The last part needed to bring across a sense of optimism as the dawn comes. This moves away from the mysterious magical twilight and also needs to support the breath modulation. We went with long sweeping pads with consonant chords and kept the on and off swelling of chords to give space to the other parts of the track. The long chords also allow the breath modulation effect to be more clearly heard as it changes. You can read more about that later in this post.

Finally, as dawn comes, we return to the bird song with a slightly disorienting trippy sound. The 'real' world is returning. The pads and drones gradually fix to a single very long note which gradually fades away until all that is left is silence and we return to daylight from which the installation began.

<div id="score-clouds-extra-marker"></div>

## The cloud as an instrument

We liked the idea that the cloud could become a kind of instrument, changing with breath in a way that echoed what we explored in the IFT collaboration: web-like structures that respond to touch, proximity and gesture through sound and light. We did not take that idea too far in the alpha, but it was there as a direction.

<figure>
  <video controls playsinline preload="metadata" src="/cloud-belonging-website/video/audio-breath-modulation.mp4" poster="/cloud-belonging-website/video/audio-breath-modulation.jpg"></video>
  <figcaption>Breath modulating the sound, with audio. Watch the drone, pad and sample controls move as each breath passes through the cloud.</figcaption>
</figure>

As each out-breath travels up into the cloud, the software measures how much of the cloud it lights. That single value then drives the mix. Each slider in the master panel sets where a parameter lands when the cloud is fully lit by breath, plus an offset for where it rests between breaths. The live value glides between the two.

It moves the volume, saturation, tremolo and filters of the drones, the volume, saturation, spread and filters of the pads, and the volume and filters of the samples. The soundscape swells and opens as a breath washes through the cloud, then settles as it fades. Turn the sound on to hear it.

This is why we were careful with the reactive part of the score. If the installation responds to breath, the sound cannot be a rigid soundtrack that ignores the participant. At the same time, it cannot react so much that the experience becomes a toy or a demo of a sensor.

So we kept the audio controlled inside the simulator: drones, pads, samples and synth parameters that could be shaped directly. That gave us a score with clear musical decisions, but also enough flexibility to follow what the installation was doing.
