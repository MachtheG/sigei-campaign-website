@AGENTS.md

# Sigei 2027 campaign site: ground rules

These rules bind every change to this repo, by people or agents. When a rule and a request conflict, stop and ask.

## Facts and sources

- **No invented facts, figures, quotes, testimonials or coverage.** Every claim cites an entry in `data/sources.ts` (title, outlet, date, URL).
- A source page with no publication date (profiles, trackers) carries an `accessed` date instead; it is shown as "page read …".
- Running figures (years in office, contribution counts) show **"as of [date]"**, or are computed live with the date shown.
- Unverified items are visibly marked `[[TO CONFIRM: …]]` on the page **and** listed in `PROGRESS.md` (research items) or `docs/CONTENT-NEEDED.md` (campaign-owned items).
- **Careful wording.** A stat says exactly what its source supports and states its basis (e.g. "small-scale growers the Bill is written for, per Nation, 2023"). Where outlets disagree on a figure, it is not a headline stat.
- **No causal overclaiming.** Write "X followed a statement he sought" only when the source says so; otherwise give the plain sequence with dates.
- The Tea (Amendment) Bill is **not law** until assented to. Say so wherever it appears.

## Quotes

- **No anonymous quotes.** A quote is real, sourced, consented to and attributed by name, or it is not on the site.

## Photos

- Only campaign-supplied or openly licensed images. **Never hotlink press photos. Never AI-generate images of the senator or any real person.**
- Every landscape/atmosphere image has a recorded licence (currently `data/photo-credits.json`; becomes `data/credits.ts` in the redesign), and credits are shown in the footer and on `/gallery`.
- Captions describe what the photo actually shows. A stand-in photo is never captioned as if it showed the senator or Bomet when it does not.
- Each photo appears **once per page**, where it does the most work.

## Tone

- **No attacks on named opponents.** Talk about the record, institutions and outcomes. Oversight findings are attributed to institutions (Auditor-General, Controller of Budget, Senate committees).
- Election dates and registration: link to the IEBC.

## Structure

- Every tab is its own `app/[locale]/<tab>/page.tsx`, with its own `components/<tab>/` folder and `messages/{en,sw}/<tab>.json`.
- One component per file, about 200 lines at most.
- Every old URL keeps working: a renamed or merged page gets a permanent redirect in `next.config.ts`.
- English and Kiswahili are complete on every page, not just behind the toggle.

## Definition of "phase done"

Every phase ends with all of these passing:

```
npm run lint && npm run typecheck && npm test && npm run build
npm run check:i18n && npm run check:sources
```

…plus a visual check at **375 / 768 / 1440 px** (no horizontal overflow, 44 px targets, no stray `[[TO CONFIRM]]` outside campaign-owned items). The fact-checker and design-critic agents in `.claude/agents/` are run before each checkpoint.

## Redesign

The redesign brief, audit and decisions live in `docs/REDESIGN-AUDIT.md`. Palette history and the colour lock live in `docs/COLOR-LOCK.md`. Work happens on the `redesign` branch, with a commit after every phase.
