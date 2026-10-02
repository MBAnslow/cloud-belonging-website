---
title: 'Exploring an LED matrix'
date: 2026-06-22
stage: Making
summary: 'Trying out an LED matrix behind different diffuser materials, to see whether a grid of lights could make a cloud feel like it is moving.'
coverVideo: journal/diffusion-led-matrix-movie-great-cotton
coverAlt: 'Patterns from an LED matrix glowing softly through a layer of cotton.'
clips:
  - name: journal/diffuser-led-matrix-test
    caption: 'Matrix patterns through a diffuser.'
    portrait: true
  - name: journal/behind-sheet-pattern-1
    caption: 'Patterns behind a sheet.'
    portrait: true
  - name: journal/led-matrix-hanging-above
    caption: 'The matrix hung overhead.'
    portrait: true
gallery:
  - src: ../../assets/journal/2026-06-22-light-from-within/trying-led-matrix.jpg
    alt: 'A first LED matrix.'
    caption: 'A first LED matrix.'
tags: [light, LEDs, diffusion, prototyping]
---

Michael tried out an **LED matrix**: a grid of individually addressable lights. Rather than a single colour wash, a matrix can make gradients, travelling glows and flickers, and maybe even the illusion that a cloud is slowly moving.

On its own, a matrix looks like a screen. The question was what happens when you put something soft in front of it. Michael played patterns through different **diffuser materials**: a plain sheet, cotton, and fibre. Each one blurred the grid differently. Cotton worked especially well, turning the individual pixels into drifting patches of light with no hard edges.

Due to hotspots from the LEDs when the diffusion material is close to them, you need to keep the diffusion material separate, which would be one of the challenges of building the cloud. Michael tried placing the diffuser at different distances from the matrix to get a better idea of what the distance should be.

## The hardware

**The matrix:** a BTF-LIGHTING WS2812B LED matrix, 32 × 8 pixels (256 in total) on a flexible 32 × 8 cm circuit board, so the pixels sit about 1 cm apart. Each 5050 LED has its own WS2812B chip, takes 24-bit colour and spreads its light over a 120° angle. It runs on 5 V and draws 0.1 to 0.3 W per LED depending on the colour, up to about 77 W with every pixel at full white.

**The controller:** an ELEGOO ESP32 development board (ESP-WROOM-32), with a dual-core 32-bit processor at up to 240 MHz, 520 KB of RAM, 4 MB of flash, and built-in 2.4 GHz Wi-Fi and Bluetooth. It is programmed over USB and can run WLED to drive addressable LEDs, with the LEDs powered separately rather than through the board.

**The diffusers:**

- Opal white acrylic: rigid 3 mm PMMA sheets at A5 (210 × 148 mm), translucent white, made for diffusing light in signs.
- Diffusion gels: 40 × 50 cm polyester film for photo and video lighting, in three grades: Tough Silk (heavy to medium diffusion that keeps some direction to the beam), Tough Frost (0.05 mm, medium diffusion with a slight hot spot in the centre) and Light Frost (0.03 mm).
- Cloud fibre: vacuum-packed synthetic fibre sold as cloud decorations, about 35 × 25 × 15 cm each when pulled out. It is soft, very white and lets the light through.

To try out patterns more quickly, Michael then vibe-coded a small interface for designing them: see [Designing patterns for the LED matrix](/cloud-belonging-website/process/2026-06-23-cloud-bottom-leds/).
