---
title: 'The alpha: lying under a cloud'
date: 2026-07-30
stage: Making
summary: 'A body of fibre pinned with bamboo skewers, a pyramid of LED pixels inside, and a corner of the studio turned into a small sky. Over two days, people lay beneath the first full cloud.'
cover: ../../assets/photos/alpha-lying-under.jpg
coverAlt: 'A person lies on white sheets on the floor beneath a large glowing cloud of white fibre, in a dark room with a blue backdrop.'
video: alpha-dusk
tags: [alpha, fibre, light, TouchDesigner, testing]
---

At the end of July we put everything together for the first time: the lit pyramid, a body around it, the breath belts, and a room to lie down in.

## A body of fibre

We knew from the [cloud bottom in June](../2026-06-22-light-from-within/) that loose polyester fibre, the kind used to stuff cushions, glows beautifully. On the 24th we heaped it over the lit pyramid. The individual pixels disappeared, leaving a soft, uneven glow with darker folds.

![A mound of white fibre glowing violet on top of a mesh frame strung with LED pixels](../../assets/photos/build-led-cloud.jpg)

Fibre on its own slumps and drifts, so it needed a shell. We cut a white plastic mesh with hexagonal cells and layered the fibre over it, then pinned it in place with **bamboo skewers** threaded through the mesh. Dozens of them, each holding a tuft where we wanted the cloud to billow.

![Close-up of fibre pressed against hexagonal mesh, held by bamboo skewers running through it](../../assets/photos/build-skewers-mesh.jpg)

![Holding up the fibre and mesh shell overhead to judge its shape](../../assets/photos/build-shell.jpg)

Once it hung from the ceiling, the last of the shaping happened lying down, looking up at it, pushing fibre in from below one skewer at a time.

![Lying on a pillow beneath the lit cloud, pushing a bamboo skewer up into the fibre](../../assets/photos/build-stuffing.jpg)

## Light and heat

Inside, the pixels hang on the white mesh in rows. A QuinLED ESP32 controller with an Ethernet port and fused outputs drives them, and TouchDesigner runs the show: it reads the breath belts and sends light to the cloud.

![Rows of LED pixels lit up on white mesh, laid across a workbench](../../assets/photos/build-led-grid.jpg)

Hundreds of LEDs and their wiring wrapped in polyester fibre is something to check, not assume. We went over the electronics with a thermal camera before anyone lay underneath. It read around 27 °C.

![A thermal camera reading 27.4 °C, pointed at the wiring on the floor](../../assets/photos/build-thermal.jpg)

## A corner of sky

We closed off a corner of the studio with a blue backdrop and black panels, laid white sheets on the floor, and added beanbags. A pot of tea sat warm on a small pedestal under the cloud, and glasses were poured for the people sitting beneath it.

![The cloud glowing pale pink above white sheets, with a teapot on a small pedestal below](../../assets/photos/alpha-cloud-room.jpg)

![Pouring tea beneath the cloud, lit blue, while someone watches from a beanbag](../../assets/photos/alpha-tea-ritual.jpg)

Over the afternoon and evening of the 29th and again on the 30th, people took turns lying or sitting beneath it. The cloud moved through warm amber, violet, magenta and deep blue, with lightning flickering through the fibre, while the breath signals scrolled across the TouchDesigner screen at the side of the room.

![The cloud glowing magenta, with breath waveforms on a laptop screen in the foreground](../../assets/photos/alpha-control.jpg)

![People lying on the floor beneath the cloud, lit blue](../../assets/photos/alpha-lying-blue.jpg)

![Two of the team grinning beside the cloud, lit pink](../../assets/photos/alpha-team.jpg)

It is an alpha: built in ten days in a workshop, with tape on the floor and the wiring in view. But for the first time, it was a cloud you could lie under.
