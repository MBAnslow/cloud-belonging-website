---
title: 'Giving the digital twin bumps'
date: 2026-08-18
stage: Making
summary: 'Adding bumps to the digital twin, so light sweeps across the cloud according to its shape instead of lighting each flat pyramid plane all at once.'
video: bump-mapping
clips:
  - name: journal/bump-front
    caption: 'Light sweeping across the bumps.'
    portrait: true
  - name: journal/bump-rotating-sun
    caption: 'A sun rotating around the digital twin, shading the real cloud.'
    portrait: true
  - name: journal/bump-mapping-led-sensors
    caption: 'In the interface: a light orbits the digital twin while each LED samples it with its own sensor hemisphere.'
tags: [light, digital twin, after the pilot]
---

The pyramid planes all have the same normal, so the light illuminates each plane all at once, evenly. That isn’t like the nice fluffy bumpy clouds we are used to. So, in the digital twin, we added “bumps” as Gaussians, aggregated together to roughly correspond to the bumps on the physical cloud.

So, when light sweeps over the model, rather than washing across it all at once on the flat pyramid planes, it lights it up according to the geometry of the model.

Further to just perturbing the light sensor normals, adding translucent bumps allowed for occlusion, so that some light sensors were shaded when the light source moved. Controlling the translucency of the bumps and the pyramid as well allowed some light to bleed through to the bumps and the pyramid in a more cloud-like way.

This required a lot of work by hand: placing the Gaussians on the model, sweeping the light across it from different angles, and checking that the lights on the physical cloud seemed to behave properly. It’s not perfect, but it gave a reasonable approximate effect.

The actual details of where the physical LEDs are, how close they were to the outer layer, and thereby how much they could illuminate it, add complexity that we didn’t try to model.
