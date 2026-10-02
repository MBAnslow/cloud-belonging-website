---
title: 'Lighting up our first prototype'
date: 2026-06-30
stage: Making
summary: 'Three lighting tests with our cotton prototype: external flashes, an LED matrix inside it, and the first mapped day cycle.'
coverVideo: journal/timeday
coverAlt: 'The prototype moving through a programmed day of light, from dawn to dusk.'
sections:
  - title: 'Lighting it from outside'
    description: 'We took the cotton prototype and hung it in my office, where I have my default Funiki lighting setup: Philips Hue lights mapped to the <a href="https://github.com/SonyCSLParis/funiki">Funiki engine</a> I developed in Godot.'
    gallery:
      - src: ../../assets/journal/2026-06-30-the-first-cloud-outside/first-cotton-play-trial.jpg
        alt: 'The cotton prototype hanging in the office.'
        caption: 'Hanging up the cloud in my office.'
  - title: 'Streaming a lightning storm through Funiki'
    description: 'For the lightning test, the Funiki engine developed by Michael Anslow was used to stream HDRI footage of a storm to the mapped Philips Hue bulbs. The interface footage and the physical cloud show the source and its lighting response together.'
    clips:
      - name: journal/first-cotton-mesh-outside-light-flash
        caption: 'The cloud responding to the lightning flash.'
      - name: journal/funiki-lightning-hdri-interface
        caption: 'HDRI lightning footage streaming through the Funiki interface to the mapped Philips Hue bulbs.'
  - description: 'From there I could apply some of the different lighting conditions I had already programmed into the Funiki system and see how each one changed the mood of the prototype. This one was an AI-generated war zone created by generating keyframes.'
    clips:
      - name: journal/outside-light-warzone-funiki-test
        caption: 'Testing the mood with another pre-programmed Funiki lighting condition.'
    gallery:
      - src: ../../assets/journal/2026-06-30-the-first-cloud-outside/outside-lights-first-mesh.jpg
        alt: 'The cotton prototype lit from outside.'
        caption: 'Lit from outside.'
  - title: 'An LED matrix inside the prototype'
    description: 'We also experimented with putting the LED matrix from before inside the cloud and streaming some of the moving noise across the cloud. I like how it looks like the cloud is subtly moving despite being static.'
    clips:
      - name: journal/led-matrix-in-prototype
        caption: 'An LED matrix inside the prototype.'
        portrait: true
  - title: 'Mapping from the inside'
    description: 'Next we mapped the LEDs from inside the cloud. For this we used fairy lights pushed through the cloud from outside, with cotton then pulled through around them. I created LED mapping software for this using an ellipsoid as an approximate shape and indicated where each LED was placed.<br><br>To test this first digital twin, I added a day-and-night cycle using moon and sun light sources moving through the scene, and streamed values to the LEDs from virtual light sensors placed on the ellipsoid.'
    galleryFirst: true
    gallery:
      - src: ../../assets/journal/2026-06-30-the-first-cloud-outside/first-mapping-test-prototype2.jpg
        alt: 'The prototype glowing from mapped LEDs inside it.'
        caption: 'Mapping from the inside.'
      - src: ../../assets/journal/2026-06-30-the-first-cloud-outside/first-mapping-test-prototype.jpg
        alt: 'The first mapped LEDs glowing through the prototype.'
        caption: 'First mapped LEDs.'
    clips:
      - name: journal/testing-time-of-day
        caption: 'Running through a day.'
      - name: journal/timeday
        caption: 'Time of day, from dawn to dusk.'
tags: [prototype, light, LEDs]
---

After pulling the cotton through the mesh, we had our first opportunity to test it under different internal and external lighting conditions.
