// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Fully static output. Vercel detects Astro and deploys `dist/` with zero config.
export default defineConfig({
  output: 'static',
  integrations: [mdx()],
});
