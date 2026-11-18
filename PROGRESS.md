# PROGRESS

## Redesign (branch `redesign`): combining Reference A (dignity, story) and Reference B (proof, conversion)

- [x] **Phase 1: audit & content fixes** (2026-11-17). See `docs/REDESIGN-AUDIT.md`. Waiting at **Checkpoint 1**.
- [x] **Phase 2: design exploration** (2026-11-18): 8 artboards at https://claude.ai/artifact/RM3EFBbq36HyFsoT6FFP7t. Checkpoint 2 passed 2026-11-18: hero C + A, palette approved, promise option 3.
- [x] **Phase 3: design system** (2026-11-18): tokens, Fraunces + Public Sans, TopStrip, SplitHeadline, Duotone, EntryCard, StatCard, CountdownBand, Timeline, PriorityCard, ConstituencyList, CTABand, Footer; /styleguide rebuilt. All gates pass; no overflow at 375/768/1440.
- [x] **Phase 4: home page** (2026-11-18): §3 order with the approved C + A hero (portrait faded into the landscape), promise line 3, lean 6-item header + full-screen menu (bottom bar removed), no repeated photo or figure on the page. Fixed: `Reveal` left content invisible for reduced-motion visitors (pre-existing). Constituency rows link to `/bomet/[id]` once Phase 5 adds those pages.
- [x] **Phase 5: inner pages + redirects** (2026-11-18): every inner page opens with the shared PageHero (duotone landscape or paper); `/about` → `/story` and `/second-term` → `/kazi-iendelee` (308, with or without locale; components and messages renamed with their tabs); new `/bomet` + 5 constituency pages (IEBC 2022 voters, share of county, Draft county-wide priorities, visible placeholder for local work); Get Involved gains #pledge #volunteer #host #story #share #donate; Record numbers use StatCard (old photo tiles removed, unverified sources flagged on the card). 70 pages build; no overflow at 375/768/1440 on any page.
- [x] **Phase 6: polish** (2026-11-18). Waiting at **Checkpoint 3**.
  - Fact-checker: 1 blocker (KNA date was 20 Aug, really 20 May 2026) + 12 fixes, all applied (not-law qualifiers, "bills" not "laws", 2010 project and 2024/25 removed as unsupported, Tea Bill publication shown as year only, arrears marked TO CONFIRM, share text carries source + as-of). Notes listed under research items.
  - Design-critic: 1 blocker (Share links invisible on green) + 5 fixes, all applied (brighter ember on dark grounds, 44px top strip and record/footer links, aria-haspopup on Menu, 16px stat notes). Not done: wrapping consent checkboxes in 44px rows (they pass WCAG 2.5.8 at 24px).
  - Kiswahili: no untranslated strings (only deliberate bilingual lines); Bomet eyebrow made bilingual.
  - Accessibility: Reveal and StatCounter rewritten without JS animation (content never hidden; rise-only so text keeps full contrast); orphan h4 fixed; Top strip link name fixed.
  - Share images: every page has its own 1200x630 card (`/api/og?page=`), stat cards restyled.
  - Images: Next 16 serves only listed qualities, so duotones were silently at q75; now q40 (grayscale) and Lite q50 work. `priority` replaced by fetchPriority/preload.
  - **Lighthouse mobile (lab, warm cache)**, perf/a11y/bp/seo: home 89/100/100/100 · sw 88/100/100/100 · record 88/96/100/100 · kazi 89/96/100/100 · bomet 91/100/100/100 · sotik 96/100/100/100 · story 94/100/100/100 · get-involved 90/100/100/100 · news 96/100/100/100. **Performance target 95 not met on 7 of 9 pages** (simulated LCP 2.6-3.5 s; real LCP ~0.2 s; cost is React/Next JS under 4x CPU throttling). Record/Kazi a11y 96 = contrast false positives inside `content-visibility:auto` sections.
- [x] **Phase 7: ship** (2026-11-18). At the client's instruction the redesign was fast-forwarded and pushed straight to `main` (no PR, no preview branch). Performance accepted at 88-96 for now.
  - **Still awaiting the campaign before launch** (full list in `docs/CONTENT-NEEDED.md`): "Authorised by" committee name; donation channels (counsel); office contacts and handles; privacy-notice details; party roles and programmes; constituency projects; the Senator's sign-off on the six Draft priorities and the letter; licensed Bomet photos and Parliament portrait permission; official UDA yellow; native Kiswahili review.
  - **Still needing a person to verify**: KNBS census row (875,689); the People Daily stories read via search index; Nation article day; re-read Mzalendo counts before launch.

### Phase 1 checks

lint ✓ · typecheck ✓ · 16 unit tests ✓ · build ✓ · check:i18n ✓ (12 files in sync) · check:sources ✓ (26 sources, 1 not fully verified: KNBS) · 375/768/1440 px: no horizontal overflow on /en, /sw, /en/kazi-iendelee, /en/record, /en/news, /en/gallery, /en/about; the only visible `[[TO CONFIRM]]` markers are campaign-owned (Authorised-by, letter signature, press statements). `/en/second-term`, `/sw/second-term` and `/second-term` return 308 → `/kazi-iendelee`.

### Research items still open (not campaign-owned)

- **KNBS 2019 census (875,689):** now linked to KNBS Volume I, but knbs.or.ke could not be opened from our tools (TLS/proxy). A person must read the Bomet row. Shown as "Not yet verified" until then.
- **Nation Tea Bill article:** year 2023 established from context; the exact day was not visible (nation.africa blocks our fetcher). Figures confirmed against the article text.
- **Education News ECDE article:** year 2026 only (site blocks our fetcher). The KNA version of the same story carries 20 Aug 2026; re-check that this is the publication date, not the page's display date.
- **Mzalendo counts** (2 bills, 220 contributions, 237,192 votes) read 17 Nov 2026: re-read and update `accessed`/`asOf` before launch. Mzalendo's ranking box (52 motions/questions/statements) and its tabs (45 statements, 9 motions, 1 question) do not reconcile, so none of these is used as a stat.
- IEBC voter-verification deep link; gazetted polls-closing time; High Court (Malindi) ruling on the election year (IEBC says 10 Aug 2027 stands).
- BOMWASCO figures differ between outlets, so none is used as a headline stat (unchanged).
- `record.stats.emptyPlaceholder` ("sourced statistic for this area") renders only when a Record filter area has no stat; today every area has one.
- People Daily stories (ECDE milk "5 times", stalled-projects visit on 7 Nov 2025 "following a statement he sought", Law Courts "assault on justice") were read via search index / Phase 0; peopledaily.digital returns 403 to our tools. Re-open by hand before launch.
- Tea Bill publication shown by year (2023) only: the bill number fixes the year, but no source gives the month.

## Earlier build (v1, main branch)

### Phase status

- [x] Phase 0: research, data files, sources, docs
- [x] Phase 1: scaffold
- [x] Phase 2: layout shell (header, bottom nav, menu, language toggle, countdown pill, footer, Lite mode, view transitions)
- [x] Phase 3: Home
- [x] Phase 4: My Record
- [x] Phase 5: Another Term
- [x] Phase 6: remaining tabs
- [x] Phase 7: forms & sharing
- [x] Phase 8: translation, SEO, performance
- [x] Phase 9: QA
- [ ] Phase 10: GitHub

### Open placeholders

Superseded on 2026-11-17: most items were resolved in redesign Phase 1. The open research items are listed above under "Research items still open", and campaign-owned items are in `docs/CONTENT-NEEDED.md`.

## Kiswahili lines for native-speaker review

- Slogan: "Mtoto wa Bomet. Kazi Iendelee." (also the English slogan: "Bomet's son. The work continues.", approve both)
- Letter from the Senator: `messages/sw/kazi-iendelee.json` → `letter.*` (draft)
- Story chapters: `messages/sw/kazi-iendelee.json` → `chapters.*` (subtitles, bodies, stat labels)
- Commitments (all six) in `data/second-term/commitments.ts` (`sw` fields)
- Hero/countdown copy: `messages/sw/home.json`
- Timeline summaries and details in `data/record/timeline.ts` (`sw` fields)
- Privacy notice: `messages/sw/privacy.json` (legal wording; have counsel check)
- Voter checklist and key dates: `messages/sw/elections.json`
- Terms to confirm: "Seneti/Seneta", "mgao wa mapato ya kaunti", "malimbikizo", "wadi", "eneo bunge"

## QA results (Phase 9)

- Lint, typecheck, 16 unit tests, source check, translation check, production build: all pass.
- Playwright (mobile Pixel 5 + desktop 1440): 18/18 pass: all 11 pages in EN and SW, language toggle keeps page + query, countdown renders, record filter + URL, gallery lightbox, pledge form submit, `.ics`, OG card.
- No horizontal overflow at 375 / 768 / 1440 on any page (checked in Chromium).
- Lighthouse (mobile, lab): Home 97 / 100 / 100 / 92, Another Term 99 / 100 / 100 / 92, Gallery 97 / 100 / 100 / 92, **Record 93** (performance; target was ≥ 95) / 98 / 100 / 92.
  The SEO 92 is only the canonical URL pointing at `NEXT_PUBLIC_SITE_URL` while testing on another port; it passes once the real URL is set. Record's remaining cost is DOM size + the React baseline under 4× CPU throttling; the chart is already lazy-loaded.
- Not done: Lighthouse on a real mid-range Android over 4G; real-photo image audit (no photos yet); a native-speaker pass on Kiswahili.

## Known risks

- **Election date**: IEBC reports a High Court (Malindi) ruling about the election year; IEBC says 10 Aug 2027 stands. Re-check before launch.
- Conflicting figures between outlets (BOMWASCO) are deliberately not used as headline stats.
- Social handles are from the campaign brief and unconfirmed.
- Placeholder duotone images are the only imagery until photos arrive.

## Photos (updated)

- Real images are in. The only photo of the Senator is his **official Parliament of Kenya member portrait** (627 px wide, so it is used at ≤ 580 px; supplied for client preview, permission to be confirmed with Parliament / the campaign).
- Every other slot is an **openly licensed Wikimedia Commons photograph** (CC BY / CC BY-SA / public domain) of Bomet, Kenya or Parliament, captioned for what it actually shows (not the Senator). Photographer + licence per image: `data/photo-credits.json`, shown in the lightbox and under **Gallery → Photo credits**.
- Not used: press/news photos and his Facebook/X images (copyright held by others). The campaign's own photos should replace the stand-ins slot by slot (`docs/SHOT-LIST.md`).
- Bomet County seal (public domain, Wikimedia Commons) is in the navbar and footer. The file is titled "Coat of Arms of Bomet County" on Commons; the artwork reads "County Government of Bomet". Confirm it is the preferred emblem.
- Colour scheme changed per client: white base, gold/yellow accents, green as the tertiary colour. Dark mode removed.
- `parliament-profile` source re-read and marked verified (URL corrected to the `-cbs-mp` page).
- Lighthouse after the image/colour pass (mobile, lab): Home accessibility 100, performance 88–91 (target ≥ 95 not met; hero portrait, web fonts and the React baseline dominate; first cold request also pays for on-demand AVIF encoding). Worth re-measuring on the real deployment with a CDN.
