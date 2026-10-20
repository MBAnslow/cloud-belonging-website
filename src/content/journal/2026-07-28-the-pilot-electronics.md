---
title: 'The electronics of the pilot'
date: 2026-07-28
stage: Making
summary: 'Battery, buck converter and QuinLED controller: powering the lights, running hot, and fixing it with a fan.'
cover: ../../assets/journal/2026-07-28-the-pilot-electronics/alpha_power_led_control.jpg
coverAlt: 'The complete electronics setup for the pilot: Cityork battery, DollaTek buck converter and QuinLED Dig-Quad controller laid out on the bench.'
gallery:
  - src: ../../assets/journal/2026-07-28-the-pilot-electronics/alpha_prep_battery.jpg
    alt: 'The Cityork 12V 5600mAh rechargeable lithium-ion battery pack.'
    caption: 'Cityork 12 V 5600 mAh battery pack.'
  - src: ../../assets/journal/2026-07-28-the-pilot-electronics/alpha_prep_buck_converter.jpg
    alt: 'The DollaTek XL4016E1 DC-DC buck converter stepping 12V down to 5V, mounted to aluminium extrusion with a small cooling fan taped beside the heatsink.'
    caption: 'DollaTek XL4016E1 buck converter with small cooling fan.'
  - src: ../../assets/journal/2026-07-28-the-pilot-electronics/alpha_prep_led_controller.jpg
    alt: 'The QuinLED Dig-Quad board carrying an ESP32-ABE module, fused power distribution and four LED output channels.'
    caption: 'QuinLED Dig-Quad with QuinLED-ESP32-ABE.'
  - src: ../../assets/journal/2026-07-28-the-pilot-electronics/buck-converter-overheating-how-hot.jpg
    alt: 'A FLIR TG267 thermal camera reading showing how hot the electronics ran under load.'
    caption: 'Checking temperatures under load with a thermal camera.'
  - src: ../../assets/journal/2026-07-28-the-pilot-electronics/buck-converter-fix-fun-installed.jpg
    alt: 'The cooling fan mounted over a heatsink.'
    caption: 'Cooling fan mounted to keep temperatures safe.'
tags: [electronics, power, pilot, LEDs, QuinLED]
---

Before the pilot installation, we assembled and bench-tested the complete power and control chain for the cloud's lights.

## The power and control setup

In the main bench picture above, the full chain runs from left to right:

- **Battery:** A **Cityork 12 V 5600 mAh rechargeable lithium-ion battery** (67.2 Wh, model XZ01). Running the cloud off battery power meant zero mains cables anywhere near people lying on the floor beneath the installation.
- **Buck converter:** A **DollaTek XL4016E1 DC 4–40 V to DC 1.25–36 V 8 A step-down converter**. It takes the 12 V from the battery and steps it down to 5 V for the addressable LED pixels. In the bench photo it is mounted to a short piece of aluminium profile, with a small green-taped fan already fitted along the heatsink fins.
- **LED controller:** A **QuinLED Dig-Quad** board running [WLED](https://kno.wled.ge/) open-source firmware, paired with a **QuinLED-ESP32-ABE** brainboard module (v3r2). We borrowed this QuinLED from a team in our lab that was doing live lighting for music shows (we later replaced it after the pilot). The Dig-Quad is designed specifically for addressable LED projects: it features heavy-duty power input terminals, four individually fused positive outputs (using automotive mini-fuses) plus fused power injection ports, on-board level shifters for clean 5 V data lines, and large onboard capacitors to buffer sudden current spikes. Running WLED allowed us to stream realtime lighting frames over Wi-Fi from our custom control software. (TouchDesigner was run separately on a second laptop purely for reading the breathing belts and sending OSC triggers.)

## Running hot, and a quick cooling fix

Under the full load of hundreds of LED pixels — especially when lightning sequences pulsed across multiple faces of the pyramid — the buck converter ran noticeably warm. After having an earlier converter fail during tests, we kept close watch on this one using a FLIR thermal camera.

The temperature reached a point where we didn't want it sitting unventilated near cotton, wadding and mesh. We solved it for the pilot by mounting a small cooling fan right against the converter's heatsink fins. That dropped operating temperatures immediately and kept the hardware stable through all pilot runs.

(After the pilot, we redesigned this setup for the [beta](../2026-09-03-cooler-electronics/) using an epoxy-potted 20 A HOMELYLIFE step-down converter and a fireproof WLED controller, removing the need for a fan entirely.)
