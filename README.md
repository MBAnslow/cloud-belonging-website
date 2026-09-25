# Cloudfulness — website

Documentation site for a research-creation project on belonging: the concept, the process journal, and the construction of a breathing cloud installation. Built with [Astro](https://astro.build) as a static site.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Process journal entries | `src/content/journal/*.md` |
| Photos (optimised at build time) | `src/assets/photos/` |
| Videos + poster frames | `public/video/` |
| Site title, team, contact email, nav | `src/data/site.ts` |
| Phases of the experience | `src/data/phases.ts` |
| Belonging checklist | `src/data/checklist.ts` |
| References | `src/data/references.ts` |
| Breath sensor recordings | `src/data/breath-tests.json` |

## Adding a journal entry

Create a Markdown file in `src/content/journal/`, named `YYYY-MM-DD-short-title.md`:

```markdown
---
title: 'The first night with visitors'
date: 2026-10-01
stage: Sharing            # Proposal | Exploration | Making | Sharing
summary: 'One or two sentences shown on cards and in link previews.'
cover: ../../assets/photos/my-photo.jpg   # optional
coverAlt: 'Describe the photo for screen readers.'
video: my-clip            # optional, refers to public/video/my-clip.mp4 + .jpg
tags: [installation, visitors]
draft: false              # true = only visible in `npm run dev`
---

Write the entry in Markdown. Images can be embedded with
![Alt text](../../assets/photos/another-photo.jpg)
```

## Adding media

Photos from an iPhone (HEIC) need converting first. This also strips location metadata:

```bash
sips -s format jpeg -Z 2000 IMG_1234.HEIC --out /tmp/tmp.jpg
ffmpeg -i /tmp/tmp.jpg -map_metadata -1 -q:v 3 src/assets/photos/descriptive-name.jpg
```

Short, muted, web-friendly video clips plus a poster frame:

```bash
ffmpeg -ss 0 -t 12 -i IMG_1234.MOV -an \
  -vf "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))',fps=30,format=yuv420p" \
  -c:v libx264 -preset slow -crf 28 -movflags +faststart -map_metadata -1 public/video/my-clip.mp4
ffmpeg -ss 0.5 -i public/video/my-clip.mp4 -frames:v 1 -q:v 4 public/video/my-clip.jpg
```
