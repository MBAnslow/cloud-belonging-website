---
title: 'Bump mapping a cloud without fibre'
date: 2026-08-18
stage: Exploration
summary: 'After the alpha, we stripped the cloud back to its nylon diffuser and moved light across it to see how much depth the skin alone could hold.'
video: bump-mapping
clips:
  - name: journal/bump-front
    caption: 'Light raking across the folds of the diffuser.'
    portrait: true
  - name: journal/bump-rotating-sun
    caption: 'A sun rotating around the digital twin, shading the real cloud.'
    portrait: true
tags: [light, diffuser, bump mapping, after the alpha]
---

The [alpha](../2026-07-30-the-alpha-cloud/) looked flat up close. So we took the fibre off and tested the nylon diffuser on its own.

Bump mapping is a graphics trick: shade a surface as if light were raking across bumps, and it reads as having depth. In the digital twin, each LED gets a slightly tilted normal, so the light sweeps over the cloud rather than washing it evenly. Even on bare nylon, the shape came alive.
