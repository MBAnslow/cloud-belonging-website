---
title: 'Cooler electronics for the beta'
date: 2026-09-03
stage: Making
summary: 'A 20 A buck converter and an ESP32 WLED controller, so the cloud no longer needs a fan to stay cool.'
cover: ../../assets/journal/post-alpha/better-buck-converter-different-controller.jpg
coverAlt: 'A new controller, a battery and a larger buck converter laid out on a desk.'
tags: [electronics, after the alpha]
---

In the alpha, the first buck converter overheated and broke, and the second one only stayed cool with a small fan attached to it.

For the beta we updated two parts:

- **A new controller:** a GLEDOPTO ESP32 WLED controller (GL-C-616WL). It runs [WLED](https://kno.wled.ge/), the same software the [pattern tool](/cloud-belonging-website/process/2026-06-23-cloud-bottom-leds/) streams frames to, and takes 5 to 24 V with up to 15 A in total. It connects over Wi-Fi or Ethernet and is fused, in a fireproof case.
- **A larger buck converter:** a HOMELYLIFE 12/24 V to 5 V, 20 A step-down converter (100 W). It sits in an aluminium shell potted in epoxy, which spreads the heat, and it shuts itself down if it does overheat.

With the extra headroom, the converter no longer runs hot, so the cloud no longer needs a fan to stay cool. It also meant we could run the LEDs at a higher amperage, so the lightning could flash much brighter.
