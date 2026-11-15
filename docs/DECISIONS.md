# Decisions

- **Project folder**: the site lives in `sigei-campaign-website/` inside the Desktop workspace folder.
- **Next.js 16**: the `middleware` convention is now `proxy.ts`; next-intl's middleware is exported from there. React's built-in `<ViewTransition>` is used for page transitions (no extra config).
- **shadcn/ui**: primitives (button, tooltip) are written by hand in the shadcn style (Radix + cva + `cn`) rather than through the interactive CLI, so the repo builds reproducibly.
- **Six commitment pillars**: the brief lists seven draft pillars but asks for 5–6. Devolution, county workers and youth opportunity are merged into one pillar.
- **Oversight chart** is derived only from the sourced timeline (documented actions per year) until official Hansard counts are supplied.
- **Constituency map** is a stylised abstract map. No boundary data is bundled; if geoBoundaries / IEBC open data is adopted later, record its licence here.
- **"Promise vs Delivered"** shows only delivered items and `[[TO CONFIRM]]` placeholders for 2022 pledges, because no 2022 pledge has been sourced.
- **Election date**: 10 Aug 2027, 06:00 EAT, from IEBC's notice (reported 14 Sep 2026). A High Court (Malindi) ruling about the election year is reported; IEBC says the date stands. Re-check before launch.
- **Fonts**: Bricolage Grotesque (display) + Inter (body) via `next/font`.
- **Photos**: the client asked for real images only. Used: the Senator's official Parliament portrait and openly licensed Wikimedia Commons photographs (honestly captioned, credited). Press/news and social-media photos are not used because others hold the copyright. Placeholders remain only as a fallback for an empty slot.
- **Palette (client brief)**: white main, gold/yellow accent `#F5B800`, green `#0B6B3A` tertiary; no dark mode.
