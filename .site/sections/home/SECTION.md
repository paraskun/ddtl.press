# Section: home

- Display name: Главная
- Content language: Russian (`lang="ru"`)
- Purpose: front door of ddtl.press for the ДДТ им. В. Дубинина; routes children and parents to
  directions (schools/clubs) and to the events calendar.
- Audience: children, parents, teachers.
- Tone: warm, plain, "мы"; see BRAND.md §2.
- Theme: default brand tokens (accent = marble). No theme.json.

## Pages

| Title | URL | Purpose | Status | Updated |
|---|---|---|---|---|
| ДДТ им. В. Дубинина — объединения и школы для ребят | `/` | Hero with cube-field illustration, directions, calendar panel, materials list (auto, hidden when empty), contacts | draft on preview | 2026-10-20 |

Files: `src/pages/index.astro`, `src/components/home/CubeRun.astro`; shell `src/layouts/Brand.astro`.

## Decision log

- 2026-10-20: Replaced the English "Interactive explainers" index with a Russian org home page.
- 2026-10-20: Hero = interactive 4×4 beech-cube field with a carved groove; the marble rolls once
  when visible and on "Запустить шарик". Concept: each cube is a direction, the marble goes through all.
- 2026-10-20: "Материалы" lists MDX pages from the content collection, excluding tag `meta`
  (so the starter `hello-world` page is not listed but stays reachable at `/hello-world/`).

## Open TODOs

- Official full name of the organization (now: "Дом детского творчества имени В. Дубинина").
- Contacts: address, phone, hours (placeholder is live on the page).
- Short "about us" text (none yet; not invented).
- Official logo (provisional groove-cube mark in use).
- Add new directions as cards when their pages exist (replace the dashed slot).
