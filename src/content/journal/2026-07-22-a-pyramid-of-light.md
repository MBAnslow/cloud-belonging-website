---
title: 'A pyramid of light'
date: 2026-07-22
stage: Making
summary: 'The printed parts became joints for a wooden frame. We wrapped it in the same green mesh as our very first cloud and covered it in LED pixels.'
cover: ../../assets/journal/2026-07-22-a-pyramid-of-light/led-mapping-starting-inside-frame.jpg
coverAlt: 'Looking up inside the mesh-wrapped pyramid, with strings of LED pixels zip-tied in rows along each face.'
clips:
  - name: journal/alpha-creating-pyramid-making-timelapse
    caption: 'Building the pyramid, sped up.'
  - name: journal/battery-works-success
    caption: 'The battery works.'
    portrait: true
  - name: journal/early-lightning-pyramid-digital-twin
    caption: 'Early lightning from the digital twin.'
    portrait: true
  - name: journal/zephir-animates-blow-effect-trial-pyramid-led
    caption: 'Zéphir tries a blowing effect.'
    portrait: true
gallery:
  - src: ../../assets/journal/2026-07-22-a-pyramid-of-light/pyramid-frame-making.jpg
    alt: 'The frame comes together.'
    caption: 'The frame comes together.'
  - src: ../../assets/journal/2026-07-22-a-pyramid-of-light/pyramid-mwith-mesh-from-above.jpg
    alt: 'Mesh over the frame.'
    caption: 'Mesh over the frame.'
  - src: ../../assets/journal/2026-07-22-a-pyramid-of-light/alpha-puttin-in-leds.jpg
    alt: 'Putting in the LEDs.'
    caption: 'Putting in the LEDs.'
  - src: ../../assets/journal/2026-07-22-a-pyramid-of-light/led-mapping-starting-inside-frame.jpg
    alt: 'Starting the mapping.'
    caption: 'Starting the mapping.'
  - src: ../../assets/journal/2026-07-22-a-pyramid-of-light/led-power-drop-yellowing.jpg
    alt: 'White LEDs without power injection showing voltage drop and yellowing along the strand.'
    caption: 'White LEDs without power injection: voltage drop causes colour fading to yellow.'
tags: [structure, light, 3D printing, fabrication]
---

The printed parts from last week turned out to be joints. Wooden dowels slot into them, and together they make a low pyramid: light enough to hang, and easy to take apart again.

![Wooden dowels and 3D-printed joints laid out on the workshop floor between strips of red and white tape](../../assets/photos/build-dowels.jpg)

## Mesh over the frame

We kept using the same green plastic garden mesh as the first cloud. It was fine. Stretched over the dowels and tied at every edge, it is the skin of the skeleton, and it gives the lights something to hold on to.

Strings of addressable LED pixels are zip-tied across each face in rows, every bulb pointing outwards. I first tried mapping them in the software and then tying each pixel onto the mesh in the same place by hand. The measurements did not quite correspond, so afterwards I did it the other way around: I laid the LEDs on the frame, then adjusted the software mapping to match that physical layout. Each pixel can take its own colour, which is what makes gradients, travelling light and lightning possible. A pyramid places those pixels at different depths inside the cloud, so light can seem to move *through* it rather than across a flat panel.

Without injecting power periodically along the line, 5 V string lights suffer voltage drop: setting all pixels to full white causes the furthest LEDs along the strand to fade into amber and yellow. Injecting power every 100 pixels keeps the voltage steady and colours true across the whole cloud.

![White LEDs on the workbench without power injection, shifting from bright white to yellow along the strand](../../assets/photos/led-power-drop-yellowing.jpg)
