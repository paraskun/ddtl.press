# Section: home

- Display name: Главная
- Content language: Russian (`lang="ru"`)
- Purpose: front door of ddtl.press, laid out as the **methodical portfolio** of
  МБУДО «Дом детского творчества им. В. Дубинина» (decided by the owner 2026-10-30).
  Shows the institution's methodical work: programs, materials, teachers, projects, results.
- Audience: teachers and methodologists, administration and inspectors, parents.
- Tone: warm, plain, "мы"; see BRAND.md §2.
- Theme: default brand tokens (accent = marble). No theme.json.

## Pages

| Title | URL | Purpose | Status | Updated |
|---|---|---|---|---|
| Методическое портфолио — МБУДО ДДТ им. В. Дубинина | `/` | Portfolio mock-up: hero + sticky contents rail and 10 numbered parts (01 Общие сведения, 02 Методическая тема, 03 Образовательные программы, 04 Методические разработки, 05 Педагоги и опыт, 06 Проекты и практики, 07 Мероприятия и конкурсы, 08 Достижения, 09 Публикации и выступления, 10 Контакты). Unknown facts are placeholders. | live | 2026-10-30 |

Files: `src/pages/index.astro`, `src/components/home/CubeRun.astro`; shell `src/layouts/Brand.astro`.

## Decision log

- 2026-10-20: Replaced the English "Interactive explainers" index with a Russian org home page.
- 2026-10-20: Hero = interactive 4×4 beech-cube field with a carved groove; the marble rolls once
  when visible and on "Запустить шарик". Concept: each cube is a direction, the marble goes through all.
- 2026-10-20: "Материалы" lists MDX pages from the content collection, excluding tag `meta`
  (so the starter `hello-world` page is not listed but stays reachable at `/hello-world/`).

- 2026-10-30: Home page reworked into the methodical portfolio of МБУДО ДДТ (owner's decision).
  Layout mock-up first: structure + real items only (Cuboro program/project, calendar);
  every unknown fact is a `.tbd` "уточняется" or a `.b-soon` slot. Anchors are English ids.
  Header nav still says "Главная" (LOCKED, not changed).
- 2026-10-30: Interactive MDX materials now listed under 04 «Методические разработки».

## Open TODOs

Portfolio content to collect from the owner (all shown as placeholders on the page):
- Руководитель, методическая служба (methodist names), list of program focus areas (направленности).
- Единая методическая тема, цель и задачи на 2026/2027.
- Full list of programs: name, направленность, age, duration (only Cuboro now; its age/duration unknown).
- Methodical materials (files or pages) per type.
- Teachers: name, category, program, self-education topic, experience, achievements; photos only if supplied.
- Other projects/practices; achievements of students and teachers; publications and talks.

- Official full name of the organization (now: "Дом детского творчества имени В. Дубинина").
- Contacts: address, phone, hours (placeholder is live on the page).
- Short "about us" text (none yet; not invented).
- Official logo (provisional groove-cube mark in use).
- Add new directions as cards when their pages exist (replace the dashed slot).
