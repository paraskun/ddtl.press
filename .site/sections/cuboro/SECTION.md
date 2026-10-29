# Section: cuboro

- Display name: Школа конструирования Куборо
- Content language: Russian
- Purpose: landing page of the Cuboro school (3D marble-run model) and its events calendar.
- Tone: friendly, hands-on.

## Pages

| Title | URL | Purpose | Status | Updated |
|---|---|---|---|---|
| Школа Куборо | `/cuboro/` | Landing with interactive 3D model, what we do, sub-pages | live | before 2026-10-20 |
| Календарь Куборо | `/cuboro/calendar/` | Competitions and events, participants, teams, results archive, team rating (data from CSV) | live | 2026-10-29 |

Both are standalone HTML in `public/cuboro/` with inline styles (predate BRAND.md).
Section-only tokens worth keeping: competition blue #2a5d8f, education green #3c7848, medal colors.

## Data source

Google Sheet «Соревнования Куборо», two sheets published as CSV (URLs in the page's CONFIG):
`Мероприятия` (gid 0) and `Участники` (gid 1584697008). The page reads columns by header name.
- `Участники` H «Состав команды», I «Детей в записи»: formulas; a row with a permanent team and no child = whole team.
- `Участники` K–V «Рейтинг: …»: formula mirror of the unpublished sheet «Постоянные команды»
  (team, group, members, Sep–May points). The Rating tab and team compositions are built from it.

## Decision log

- 2026-10-20: Registered as a section during site bootstrap; pages untouched.
- 2026-10-20: Calendar got event level badges/filter, team grouping, Teams tab, hover team lists.
- 2026-10-29: Added Rating tab (overall + per age group, per month or year total). Data mirrored into the published «Участники» sheet instead of publishing a third sheet.

## Open TODOs

- See PROPOSALS.md: link back to home, align body font.
