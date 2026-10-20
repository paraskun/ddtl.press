# Brandbook — ДДТ им. В. Дубинина (ddtl.press)

Status: **v0.1, initial draft** (2026-10-20). Derived from the two existing pages,
`/cuboro/` and `/cuboro/calendar/`, which were built before this brandbook. Nothing here is a
redesign: it records what those pages already share and settles where they disagree.
Tokens live in `src/styles/brand.css`; the branded shell is `src/layouts/Brand.astro`.

## 1. Idea

The organization is a children's creativity center. The visual language comes from its first
school, Cuboro: **beech-wood cubes, a carved groove, and one blue marble**.
- Wood = the material, warmth, hands-on making.
- The groove = a path through things; it connects directions (sections) of the house.
- The marble = the single point of attention on a screen. One per view, never decoration spam.
- The 48px square grid (the calendar header's "5×5 cm cube" grid) is the background texture.

## 2. Voice

- Russian, plain, warm, addressed to children and parents together. Speak as "мы".
- Say what happens: "Открыть календарь", "Запустить шарик", not "Подробнее" / "Перейти".
- No invented facts. Unknown content gets a neutral dashed placeholder (`.b-soon`), never lorem ipsum.
- Sentence case. Avoid ALL-CAPS labels (the older pages use a few; don't add more).

## 3. Logo / mark

- Until an official logo is supplied (TODO), the mark is the **groove cube**: a rounded beech
  square, a quarter-arc groove in `--b-wood-shade`, a marble dot in `--b-marble`
  (see the SVG in `Brand.astro`; the calendar page uses the same motif at 44px).
- Wordmark: "ДДТ им. В. Дубинина" in Unbounded 700. Full name in running text:
  "Дом детского творчества им. В. Дубинина" (TODO: confirm the official full name).
- Section marks (e.g. Cuboro) may reuse the cube motif; the org mark is never recolored.

## 4. Typography

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display: h1, h2, wordmark, big numbers | **Unbounded** | 500, 700 | h1 700, tight tracking (-0.02…-0.025em); h2 500 |
| Body, UI, h3 | **Golos Text** | 400, 500, 600, 700 | Cyrillic-first grotesk |

- Loaded from Google Fonts (`display=swap`, Cyrillic subsets served automatically).
- Scale: h1 `clamp(38px, 5.6vw, 72px)` (hero) / up to 104px on a section landing; h2
  `clamp(26px, 4vw, 38px)`; h3 19px/600; body 17px/1.55; small 14px; micro 13px.
- Line length ≤ ~60ch for body copy.
- Decision: `/cuboro/` uses Manrope for body, `/cuboro/calendar/` uses Golos Text. **Golos Text
  wins** (designed for Russian). Moving `/cuboro/` to Golos is logged in PROPOSALS.md.

## 5. Color

Light theme is primary; dark theme is supported (as on the calendar page).

| Token | Light | Dark | Use |
|---|---|---|---|
| `--b-bg` | #f6f1e8 | #17130f | page ("beech paper") |
| `--b-paper` | #fffaf2 | #211b16 | cards, buttons |
| `--b-sunk` | #efe6d7 | #2a231c | inset: tabs, chips |
| `--b-ink` | #2a2118 | #efe6d8 | text, primary buttons, dark cards |
| `--b-muted` | #6f6253 | #b3a593 | secondary text |
| `--b-line` | #e4d8c6 | #3a3028 | borders, hairlines |
| `--b-wood` | #c98b4b | #d6a56b | **decoration only** (2.6:1, never text) |
| `--b-wood-soft` | #f1e3cd | #2e251b | tinted panels |
| `--b-wood-deep` | #8f5a2b | #e0b27c | wood as text/icon (5.1:1) |
| `--b-wood-shade` | #9a6232 | #7a5230 | grooves, cube edges (always darker than wood) |
| `--b-marble` | #2f5fd8 | #86a8ff | focus ring, links, the marble |
| `--b-gloss` | #ffffff | #ffffff | marble highlight |

Measured contrast (light): ink/bg 14.0, muted/bg 5.3, wood-deep/bg 5.1, marble/bg 5.0,
paper/ink 15.2. Dark: all text tokens ≥ 7:1 on bg.

Note: `--b-wood-deep` was #9a6232 on `/cuboro/`; it is 4.48:1 as text, so text uses #8f5a2b
and the original value moved to `--b-wood-shade` for shapes.

The calendar's event-type colors (competition blue #2a5d8f, education green #3c7848, medals)
are **section tokens of Cuboro**, not global.

## 6. Shape, space, grid

- Radii: 8px small controls · 18px cards · 28px stages/hero panels · pill (999px) for
  buttons, nav items, chips.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 72, 96 (`--b-s1`…`--b-s9`).
- Content width 1160px, side gutter 16px (respect safe-area insets). Sections are separated by
  72px; footer sits 96px below content.
- Background grid module: 48px.
- Breakpoints: 860px (hero stacks), 640px, 520px (compact nav).

## 7. Components

- **Header** (sticky, translucent bg + blur, hairline bottom): mark + wordmark left; pill nav
  right; current page = ink pill.
- **Footer**: hairline top, muted 14px, org name left, section links right.
- **Buttons** `.b-btn`: pill, 1px line border, paper fill. `.b-btn--primary`: ink fill.
  On a dark card, the button inverts (paper fill).
- **Direction card**: ink background, display-face title, one primary action + one text link.
- **Panel**: `--b-wood-soft` fill, 18px radius, text + one primary action.
- **Placeholder** `.b-soon`: 1.5px dashed line border, muted text. For "coming soon" slots and
  missing content.
- **Stage**: 28px radius frame for an interactive piece (3D model, cube field).
- Focus: 2px marble outline, 3px offset, on everything focusable.

## 8. Motion

- One orchestrated moment per page (e.g. the marble rolls once when the hero is on screen).
- Motion that answers an action is fine (button → marble rolls again).
- Always honor `prefers-reduced-motion` (marble jumps to the end; no auto-rotation).

## 9. LOCKED vs THEMEABLE

**LOCKED** (only the `_global` owner changes these, via PROPOSALS.md):

| Element | Where |
|---|---|
| Mark, wordmark and usage | `Brand.astro`, §3 |
| Header, footer, main navigation structure | `Brand.astro` |
| Font families and type scale | `brand.css`, §4 |
| Neutral and material palette (`--b-*` tokens) | `brand.css`, §5 |
| Spacing scale, radii, content width, breakpoints | `brand.css`, §6 |
| Base components: `.b-btn`, `.b-soon`, focus ring | `brand.css`, §7 |
| Accessibility rules: AA contrast, reduced motion, `lang="ru"` | everywhere |

**THEMEABLE** (a section may set in `.site/sections/<slug>/theme.json`):

| Key | Allowed values |
|---|---|
| `accent`, `accentContrast` | any pair with ≥ 4.5:1 between them and accent ≥ 3:1 on `--b-bg` |
| `heroStyle` | `type` · `illustration` · `interactive` (3D/canvas stage) |
| `density` | `comfortable` · `compact` |
| `imagery` | free text: direction for photos/illustrations |
| `tone` | free text: nuance of voice within §2 |
| section components | built from base components and tokens |

Mechanism: `Brand.astro` puts `data-section="<slug>"` on `<body>`; a section's theme sets
`--accent` / `--accent-contrast` under `[data-section="<slug>"]`.

## 10. Legacy pages

`/cuboro/` and `/cuboro/calendar/` are standalone HTML in `public/` with their own inline
tokens. They predate this brandbook and are left as they are. Migration (shared header with
the org mark and nav back to "/", Golos Text on `/cuboro/`) is tracked in PROPOSALS.md.
