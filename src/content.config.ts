import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ base: './src/content/journal', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      stage: z.enum(['Proposal', 'Concept formation', 'Making', 'Sharing']),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverVideo: z.string().optional(),
      video: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      clips: z
        .array(z.object({ name: z.string(), caption: z.string().optional(), portrait: z.boolean().default(false), sound: z.boolean().default(false) }))
        .default([]),
      sections: z
        .array(
          z.object({
            title: z.string().optional(),
            description: z.string(),
            galleryFirst: z.boolean().default(false),
            gallery: z
              .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
              .default([]),
            clips: z
              .array(z.object({ name: z.string(), caption: z.string().optional(), portrait: z.boolean().default(false), sound: z.boolean().default(false) }))
              .default([]),
          }),
        )
        .default([]),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { journal };
