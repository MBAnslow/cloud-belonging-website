---
title: 'A belt that listens to breathing'
date: 2026-06-12
stage: Making
summary: 'Building a wearable breath sensor from a stretch band and a tiny microcontroller — and testing which band width actually hears a breath.'
cover: ../../assets/photos/belt-sketch.jpg
coverAlt: 'A pencil sketch of a vest seen from the front and back, with a breathing sensor band drawn in magenta around the waist.'
gallery:
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/trying-rubber-conductive-arduino-breadboard.jpg
    alt: 'Conductive rubber on a breadboard.'
    caption: 'Conductive rubber on a breadboard.'
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/belt-connection-prototype.jpg
    alt: 'The first connection.'
    caption: 'The first connection.'
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/belt-device.jpg
    alt: 'The belt and its device.'
    caption: 'The belt and its device.'
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/breathing-belt-battery-connected.jpg
    alt: 'Running on battery.'
    caption: 'Running on battery.'
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/cloud-jacket-belt.jpg
    alt: 'The belt, sewn into a jacket.'
    caption: 'The belt, sewn into a jacket.'
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/cloud-jacket-pocket-device.jpg
    alt: 'The device in its pocket.'
    caption: 'The device in its pocket.'
  - src: ../../assets/journal/2026-06-12-a-belt-that-listens/inside-cloud-jacket-device-red-glow.jpg
    alt: 'Inside the pocket.'
    caption: 'Inside the pocket.'
tags: [hardware, breath, ESP32, TouchDesigner]
---

To let the cloud listen, each participant needs a way to share their breath that is **cheap, comfortable and robust**. Research-grade respiration belts cost hundreds of euros each. We built our own.

## The belt

Zéphir designed a vest-like wearable with a stretch sensor band around the torso. Its reading changes as the chest and belly expand. A small **ESP32-C3** board reads the sensor and runs on a 3.7 V battery with a charging module and a push button, so participants aren't tethered by cables.

![Wiring diagram: a TP4057 charging module, a 3.7 V battery, a push button and an ESP32-C3 Super Mini](../../assets/photos/belt-wiring.jpg)

The firmware went through a few simple stages: printing one analogue value over serial, reading two sensors at once, then sending the breath value over Wi-Fi as **OSC** messages (`/breath/breath0`). A TouchDesigner patch receives them, smooths the signal, and works out when an in-breath or out-breath begins, using a lagged trail and a threshold window.

## Which band hears a breath?

We recorded raw readings while breathing with bands of different widths (two 5 cm bands, one 10 cm, one 20 cm) under 1 cm and 4 cm of pre-stretch. The results are on the [installation page](../../installation/#breath). The narrow bands barely registered a breath above the noise. The **20 cm band** gave a clear, readable wave.

Next steps on our roadmap: fix the sensors into belts, get the battery-powered versions working, and test breathing while moving as well as seated.
