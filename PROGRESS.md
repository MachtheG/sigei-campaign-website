# PROGRESS

## Phase status

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

## Open placeholders (`[[TO CONFIRM: …]]`)

- Parliament profile page not retrievable in research: education/career dates, 16 Aug 2022 start (campaign brief only).
- 2025 committee re-election: exact date (Eastleigh Voice).
- Tea Bill: 600,000+ growers / 69 KTDA factories, re-check against Nation/The Star text; Nation article date.
- Total number of bills sponsored; official counts of statements, inspections, committee sittings.
- Mzalendo contribution count (220 at research time).
- BOMWASCO figures differ between outlets, so none used as headline stats.
- Links/dates for GBV, county salary arrears, Law Courts arson (Aug 2025), political violence (Apr 2026).
- KNBS census: link directly to KNBS Vol. I (figure 875,689 confirmed via secondary report).
- IEBC voter-verification deep link; polls closing time; High Court (Malindi) ruling on election year noted by IEBC coverage.
- Contacts, campaign committee name, UDA logo/hex, social handles, UDA programmes, constituency work, 2022 pledges.

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
