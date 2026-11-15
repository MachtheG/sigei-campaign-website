# Decisions

- **Project folder**: the site lives in `sigei-campaign-website/` inside the Desktop workspace folder.
- **Next.js 16**: the `middleware` convention is now `proxy.ts`; next-intl's middleware is exported from there. React's built-in `<ViewTransition>` is used for page transitions (no extra config).
- **shadcn/ui**: primitives (button, tooltip) are written by hand in the shadcn style (Radix + cva + `cn`) rather than through the interactive CLI, so the repo builds reproducibly.
- **Six commitment pillars**: the brief lists seven draft pillars but asks for 5–6. Devolution, county workers and youth opportunity are merged into one pillar.
- **Oversight chart** is derived only from the sourced timeline (documented actions per year) until official Hansard counts are supplied.
- **Constituency map** is a stylised abstract map. No boundary data is bundled; if geoBoundaries / IEBC open data is adopted later, record its licence here.
- **"Promise vs Delivered"** shows only delivered items and `[[TO CONFIRM]]` placeholders for 2022 pledges, because no 2022 pledge has been sourced.
- **Election date**: 10 Aug 2027, 06:00 EAT, from IEBC's notice (reported 14 Sep 2026). A High Court (Malindi) ruling about the election year is reported; IEBC says the date stands. Re-check before launch.
- **Palette**: tea green `#0B3D2E`, accent `#FFC20E` (placeholder for the official UDA yellow), warm paper `#FAF7F0`, ink `#111A16`. Dark mode follows the OS setting.
- **Fonts**: Bricolage Grotesque (display) + Inter (body) via `next/font`.
- **Press/news photos are never used.** Placeholders are duotone tea-green blocks with a silhouette and the slot label.
