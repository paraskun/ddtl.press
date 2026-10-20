# Working on this site

Static information site built with Astro 7 + MDX, deployed to Vercel from the `trunk` branch.

## Layout

```
src/
  content.config.ts                # page schema (frontmatter is validated at build)
  content/pages/<slug>/index.mdx   # one folder per page; page-only components may live beside it
  components/                      # shared building blocks (Simulation frame, simulations)
  layouts/                         # Base (html shell) and Page (article)
  pages/                           # routes: index list + [slug] renderer. Rarely needs changes.
  styles/global.css                # design tokens; use the CSS variables, not raw colors
```

## Adding a page

1. Create `src/content/pages/<slug>/index.mdx` (slug: lowercase, hyphenated).
2. Frontmatter must match the schema in `src/content.config.ts`:
   `title`, `description`, `tags`, `published` (YYYY-MM-DD), optional `draft`.
3. Write prose in Markdown. Wrap interactive pieces in `<Simulation caption="...">`.
4. New interactive components: prefer vanilla canvas/SVG in an `.astro` component with a
   `<script>` (see `components/BouncingBall.astro`). Respect `prefers-reduced-motion`.
5. Run `npm run verify` (type check + build). Fix every error before committing.

## Rules

- Don't add npm dependencies without the owner's approval.
- Don't edit routes, layouts or the schema as a side effect of adding a page.
- One page per commit/PR; commit message: `page: <slug>`.

## Branded (Russian) pages

The home page and future organization pages use `layouts/Brand.astro` and the tokens in
`styles/brand.css` (`--b-*`). Rules, palette and LOCKED/THEMEABLE elements: `.site/BRAND.md`.
Sections, owners and page lists: `.site/sections.json` and `.site/sections/<slug>/SECTION.md`.
