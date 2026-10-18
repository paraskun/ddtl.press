import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every page lives in src/content/pages/<slug>/index.mdx.
// Frontmatter is validated at build time: a malformed page fails the build.
const pages = defineCollection({
  loader: glob({ pattern: '*/index.mdx', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().min(3).max(90),
    description: z.string().min(10).max(200),
    tags: z.array(z.string()).default([]),
    published: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages };
