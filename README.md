# Sen. Wakili Hillary Sigei: campaign website

A mobile-first, bilingual (English ⇄ Kiswahili) campaign site for **Sen. Wakili Hillary Kiprotich Sigei, CBS, MP**, Senator for Bomet County, for the 10 August 2027 General Election.
The site has a countdown on every page, an interactive "My Record", a scroll-told second-term story, a photo-led gallery, and sourced facts throughout.

> **Rules the codebase enforces:** no invented facts (every stat cites `data/sources.ts`; unknowns show a visible `[[TO CONFIRM: …]]`), no press/news photos, no AI-generated faces, no attacks on named opponents, all second-term commitments flagged **DRAFT** until the Senator approves them.

## Stack

Next.js 16 (App Router, Server Components) · TypeScript strict · Tailwind CSS v4 · shadcn-style primitives (Radix + cva) · Motion · next-intl (`/en`, `/sw`) · Recharts (lazy-loaded) · React Hook Form + Zod + Server Actions · sharp · Vitest · Playwright · GitHub Actions.

## Run it

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000  (redirects to /en or /sw by browser language)
```

| Command                               | What it does                                              |
| ------------------------------------- | --------------------------------------------------------- |
| `npm run lint` / `typecheck` / `test` | ESLint, `tsc`, Vitest unit tests                          |
| `npm run check:sources`               | Fails if any stat/claim references a missing source       |
| `npm run check:i18n`                  | Fails if any key exists in one language but not the other |
| `npm run build && npm run test:e2e`   | Production build + Playwright (mobile + desktop)          |
| `npm run images`                      | Optimise photos (see below)                               |
| `npm run docs:shotlist`               | Regenerate `docs/SHOT-LIST.md` from `data/photos.ts`      |

## Folder map

```
app/[locale]/…        one thin page.tsx per tab (/, record, record/[slug], second-term, gallery,
                      news, about, party, elections, get-involved, contact, privacy; hidden /styleguide)
app/api/              election.ics (add-to-calendar), og (shareable stat cards)
components/<tab>/     section components for that tab (one component per file)
components/layout/    Header, MobileNav, Footer, LanguageToggle, CountdownPill, LiteToggle
components/shared/    Countdown, StatCounter, SourceBadge, SenatorImage, Lightbox, CTABand, …
data/                 typed, bilingual content + sources.ts + photos.ts + election.ts
messages/{en,sw}/     UI copy, one JSON per tab (same keys in both languages)
lib/                  i18n, forms (schemas/adapters/actions), countdown, format
scripts/              optimize-images, check-sources, check-translations
docs/                 SHOT-LIST, CONTENT-NEEDED, DECISIONS, HANDOFF
```

## Add photos

1. Drop the original at `public/images/senator/<category>/<id>.jpg` (categories: `hero`, `senate`, `field`, `community`, `farmers`, `portraits`, `events`). The `<id>` must match a slot in `data/photos.ts` (see `docs/SHOT-LIST.md`). Hero ≥ 2400 px wide.
2. Run `npm run images`. It writes AVIF/WebP at 480/960/1600/2400 px plus blur placeholders to `public/images/senator/_opt/` and `data/photos.generated.json`.
3. In `data/photos.ts` fill that slot's `date`, `location`, `credit`, and `approvedForPress` (enables the download button in the lightbox).

Until a file exists, the slot renders an intentional placeholder (tea-green block, silhouette, shot brief). To add a _new_ slot, add an entry in `data/photos.ts` and re-run `npm run docs:shotlist`.

## Edit content and translations

- **UI copy:** `messages/en/<tab>.json` and `messages/sw/<tab>.json`; keep the keys identical (`npm run check:i18n`).
- **Facts:** `data/**` files carry `{ en, sw }` fields and `sourceIds`. Add the source to `data/sources.ts` first (title, outlet, date, URL). Run `npm run check:sources`.
- **Election date:** `data/election.ts`.
- **Commitments:** `data/second-term/commitments.ts`; they stay `status: "draft"` until approved.
- Search the repo for `TO CONFIRM` to list every open placeholder; `PROGRESS.md` tracks them.

## Forms

Pledge, volunteer and contact forms validate with Zod, require Data Protection Act consent, use a honeypot and an in-memory rate limit, and deliver through a pluggable adapter chosen by environment: **Resend** (`RESEND_API_KEY`, `RESEND_TO`, `RESEND_FROM`) → **Supabase** (`SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, table `submissions`: `kind text, locale text, payload jsonb, created_at timestamptz default now()`) → otherwise logged (masked) to the console.

## Deploy to Vercel

1. Import the GitHub repo in Vercel (framework: Next.js; no build overrides).
2. Set `NEXT_PUBLIC_SITE_URL` to the production URL, plus the Resend or Supabase variables.
3. Deploy. `/` redirects to `/en` or `/sw` by browser language; the choice is remembered in a cookie.
4. For multi-instance rate limiting, replace the in-memory limiter in `lib/forms/actions.ts` with Upstash/Vercel WAF rules.
5. Replace PWA icons (`public/icon-*.png`) with the official logo.

(This repository does not deploy anything by itself.)
