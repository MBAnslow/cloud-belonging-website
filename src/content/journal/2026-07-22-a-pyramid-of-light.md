---
title: 'A pyramid of light'
date: 2026-07-22
stage: Making
summary: 'The printed parts became joints for a wooden frame. We wrapped it in the same green mesh as our very first cloud and covered it in LED pixels.'
coverVideo: journal/early-lightning-pyramid-digital-twin
coverAlt: 'Early lightning from the digital twin.'
clips:
  - name: journal/battery-works-success
    caption: 'The battery works.'
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
tags: [structure, light, 3D printing, fabrication]
---

## Building the pyramid

We attached wooden rods to the printed joints by drilling holes into them and fastening them with screws. We finally had the structure of the pyramid: light enough to hang but strong enough to support the rest of the structure.

![Wooden dowels and 3D-printed joints laid out on the workshop floor between strips of red and white tape](../../assets/photos/build-dowels.jpg)

<figure>
  <video src="../../video/journal/alpha-creating-pyramid-making-timelapse.mp4" poster="../../video/journal/alpha-creating-pyramid-making-timelapse.jpg" controls playsinline preload="metadata" style="width: 100%"></video>
  <figcaption>Building the pyramid, sped up.</figcaption>
</figure>

## LED mapping

Strings of addressable LED pixels were woven into the mesh and ocassionally zip-tied to make sure they were taut and pointing straight outwards rather than sagging. The pixels were spaced out in rough rows, starting from the top and looping around the pyramid before walls before filling the base of the pyramid.

I initially tried first placing the LEDS in the software with constraint on their distance and size and then placing each pixel onto the mesh in the same place by hand. However, the measurements did not quite correspond, so afterwards I did it the other way around: I laid the LEDs on the frame, then adjusted the software mapping to match that physical layout.

Each pixel can take its own colour, which is what makes gradients, travelling light and lightning possible. A pyramid places those pixels at different depths inside the cloud, so light can seem to move *through* it rather than across a flat panel. Motion across pixels also imply events happening when combined with sound that don't need to be literal reconstructions of events.

<div class="shots">
  <figure>
    <img src="../../images/journal/led-mapping-laying.png" alt="A close view of the LED map, placing a point among LEDs 344, 343, 220 and 221." />
    <figcaption>Laying an LED on the pyramid. </figcaption>
  </figure>
  <figure>
    <img src="../../images/journal/led-mapping-bottom.jpg" alt="The underside of the pyramid in the LED mapping software, with every LED numbered." />
    <figcaption>The base of the pyramid. </figcaption>
  </figure>
  <figure>
    <img src="../../images/journal/led-mapping-top.jpg" alt="The top of the pyramid in the LED mapping software, with placed LEDs shown as points." />
    <figcaption>The top of the pyramid.</figcaption>
  </figure>
</div>

## Early exploration of effects

<div class="shots">
  <figure>
    <video src="../../video/journal/early-lightning-pyramid-digital-twin.mp4" poster="../../video/journal/early-lightning-pyramid-digital-twin.jpg" controls playsinline preload="metadata" style="width: 100%"></video>
    <figcaption>Early lightning from the digital twin.</figcaption>
  </figure>
  <figure>
    <video src="../../video/journal/zephir-animates-blow-effect-trial-pyramid-led.mp4" poster="../../video/journal/zephir-animates-blow-effect-trial-pyramid-led.jpg" controls playsinline preload="metadata" style="width: 100%"></video>
    <figcaption>Zéphir tries a blowing effect.</figcaption>
  </figure>
</div>

## Power injection

Without injecting power periodically along the line, 5 V string lights suffer voltage drop: setting all pixels to full white causes the furthest LEDs along the strand to fade into amber and yellow. Injecting power every 100 pixels keeps the voltage steady and colours true across the whole cloud.

![White LEDs on the workbench without power injection, shifting from bright white to yellow along the strand](../../assets/photos/led-power-drop-yellowing.jpg)
