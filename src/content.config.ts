import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(),
    when: z.string(),
    order: z.number(),
    stack: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    internal: z.boolean().default(false),
  }),
});

export const collections = { work };
