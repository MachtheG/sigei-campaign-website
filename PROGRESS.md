# PROGRESS

## Redesign (branch `redesign`): combining Reference A (dignity, story) and Reference B (proof, conversion)

- [x] **Phase 1: audit & content fixes** (2026-11-17). See `docs/REDESIGN-AUDIT.md`. Waiting at **Checkpoint 1**.
- [x] **Phase 2: design exploration** (2026-11-18): 8 artboards at https://claude.ai/artifact/RM3EFBbq36HyFsoT6FFP7t. Waiting at **Checkpoint 2**.
- [ ] Phase 3: design system
- [ ] Phase 4: home page
- [ ] Phase 5: inner pages + redirects
- [ ] Phase 6: polish → Checkpoint 3
- [ ] Phase 7: ship (PR + preview)

### Phase 1 checks

lint ✓ · typecheck ✓ · 16 unit tests ✓ · build ✓ · check:i18n ✓ (12 files in sync) · check:sources ✓ (26 sources, 1 not fully verified: KNBS) · 375/768/1440 px: no horizontal overflow on /en, /sw, /en/kazi-iendelee, /en/record, /en/news, /en/gallery, /en/about; the only visible `[[TO CONFIRM]]` markers are campaign-owned (Authorised-by, letter signature, press statements). `/en/second-term`, `/sw/second-term` and `/second-term` return 308 → `/kazi-iendelee`.

### Research items still open (not campaign-owned)

- **KNBS 2019 census (875,689):** now linked to KNBS Volume I, but knbs.or.ke could not be opened from our tools (TLS/proxy). A person must read the Bomet row. Shown as "Not yet verified" until then.
- **Nation Tea Bill article:** year 2023 established from context; the exact day was not visible (nation.africa blocks our fetcher). Figures confirmed against the article text.
- **Education News ECDE article:** year 2026 only (site blocks our fetcher). The KNA version of the same story carries 20 Aug 2026; re-check that this is the publication date, not the page's display date.
- **Mzalendo counts** (2 bills, 220 contributions, 237,192 votes) read 17 Nov 2026: re-read and update `accessed`/`asOf` before launch. Mzalendo's ranking box (52 motions/questions/statements) and its tabs (45 statements, 9 motions, 1 question) do not reconcile, so none of these is used as a stat.
- IEBC voter-verification deep link; gazetted polls-closing time; High Court (Malindi) ruling on the election year (IEBC says 10 Aug 2027 stands).
- BOMWASCO figures differ between outlets, so none is used as a headline stat (unchanged).

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
- Letter from the Senator: `messages/sw/second-term.json` → `letter.*` (draft)
- Story chapters: `messages/sw/second-term.json` → `chapters.*` (subtitles, bodies, stat labels)
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
