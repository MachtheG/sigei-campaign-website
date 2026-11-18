# Colour lock

The current tokens, recorded before the redesign changes anything. The refined palette is proposed at Checkpoint 2 and recorded here once approved.

## 1. Live today (`app/globals.css`, commit 4cf358b)

"White base, gold/yellow accents, green tertiary" (client request). Light only; dark mode removed.

| Token         | Hex       | Role                                                     |
| ------------- | --------- | -------------------------------------------------------- |
| `--bg`        | `#ffffff` | Page ground                                              |
| `--surface`   | `#fbf6e6` | Cards, credit panel                                      |
| `--fg`        | `#14181a` | Body text                                                |
| `--muted`     | `#4b555b` | Secondary text                                           |
| `--line`      | `#e9e3cf` | Rules, borders                                           |
| `--brand`     | `#0b6b3a` | Tea green: headings, primary buttons, numbers            |
| `--brand-2`   | `#0f8247` | Hover green                                              |
| `--on-brand`  | `#ffffff` | Text on green                                            |
| `--link`      | `#0b6b3a` | Links                                                    |
| `--accent`    | `#f5b800` | UDA-yellow stand-in: focus ring, Draft badges, selection |
| `--on-accent` | `#14181a` | Text on yellow                                           |
| `--deep`      | `#0b6b3a` | (alias of brand)                                         |
| `--clay`      | `#f5b800` | (alias of accent)                                        |
| `--sky`       | `#fff3c4` | Pale yellow chip ground                                  |

Placeholder gradients: `.ph-green` `#11553f → #0b3d2e → #07281e`; a green, a yellow (`#ffd54a → #f5b800 → #c28f00`) and a bronze (`#b9791a → #8a5a12 → #523308`) variant. OG card ground: `#0b3d2e`.

**Leftover:** `app/[locale]/layout.tsx` still sets a dark `theme-color` of `#0a1511`. It comes from the earlier palette (below) and no longer matches any surface.

## 2. Previous palette (commit 184088a), where `#0a1511` comes from

| Token                         | Light                             | Dark                      |
| ----------------------------- | --------------------------------- | ------------------------- |
| `--bg`                        | `#faf7f0`                         | **`#0a1511`**             |
| `--surface`                   | `#f3ebdd`                         | `#12211b`                 |
| `--fg`                        | `#111a16`                         | `#f3f1ea`                 |
| `--muted`                     | `#44514b`                         | `#b6c2bb`                 |
| `--line`                      | `#d9d3c2`                         | `#25382f`                 |
| `--brand`                     | `#0b3d2e`                         | —                         |
| `--brand-2`                   | `#11553f`                         | —                         |
| `--accent`                    | `#ffc20e`                         | —                         |
| `--deep` / `--clay` / `--sky` | `#16233f` / `#a63a28` / `#dfe8f5` | `#0f1a30` / — / `#16233f` |

## 3. Fonts today

Display **Bricolage Grotesque** (`--font-bricolage`), body **Inter** (`--font-inter`), both via `next/font/google`.

## 4. Constraints for the Phase 2 proposal

- Keep the **deep-green identity**: the `#0a1511 / #0b3d2e / #0b6b3a` family.
- **Second ink** for the duotone: warm (tea-dusk amber or clay) and distinct from UDA yellow.
- **UDA yellow** stays a small accent only. The official hex is still to be supplied: `#f5b800` / `#ffc20e` are stand-ins.
- Body text ≥ 4.5:1 and large text ≥ 3:1 on every ground (WCAG 2.2 AA), checked in both duotone inks.
- Portraits of the senator stay full colour; only landscape and atmosphere images get the duotone.

## 5. Phase 2 proposal (awaiting approval at Checkpoint 2)

Canvas: https://claude.ai/artifact/RM3EFBbq36HyFsoT6FFP7t

| Token      | Hex       | Role                                                                                              |
| ---------- | --------- | ------------------------------------------------------------------------------------------------- |
| ink        | `#0b1a14` | Deep green-black: dark grounds, body text on paper (the `#0a1511` family)                         |
| ink-deep   | `#07110d` | Top strip, footer                                                                                 |
| forest     | `#123d2c` | Promise band, primary buttons, figures                                                            |
| paper      | `#f3efe6` | Page ground (warm off-white)                                                                      |
| ember      | `#c47a3d` | Second duotone ink (tea-dusk amber); eyebrows on dark. Alternatives `#b5653a`, `#d29a52` (Tweaks) |
| ember-text | `#8a4f22` | Ember for small text on paper (passes 4.5:1)                                                      |
| UDA yellow | `#f5b800` | Donate and Draft badges only (official hex still to come)                                         |

Duotone: grayscale image, multiplied over ember, then lightened with ink, so shadows go to ink and highlights to ember. The portrait stays full colour.
Type: **Fraunces** (editorial display, split headlines) + **Public Sans** (body), both through `next/font`.
