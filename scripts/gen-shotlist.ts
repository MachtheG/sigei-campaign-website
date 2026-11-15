import { writeFileSync } from "node:fs";
import { photos } from "../data/photos";

const min = (r: string) => (r.startsWith("16") ? "2400×1350" : r.startsWith("4 / 5") ? "1600×2000" : r.startsWith("4 / 3") ? "2000×1500" : "2400×1600");
const rows = photos.map((p) => `| \`${p.id}\` | ${p.category}${p.hero ? " (hero)" : ""} | ${p.ratio.replace(" / ", ":")} | ${p.id === "hero-main" ? "≥ 2400 px wide" : min(p.ratio)} | ${p.slot.split(": ").slice(1).join(": ")} |`);
writeFileSync(
  "docs/SHOT-LIST.md",
  `# Shot list

Every photo slot on the site. Drop the file at \`public/images/senator/<category>/<id>.jpg\` (hero in \`hero/\`), then run \`npm run images\`.
Only campaign-supplied or licensed photos. No press/news photos, no AI-generated images.
Send originals (not WhatsApp-compressed). Landscape shots: keep the senator in the central 60% so mobile crops work.

| Slot id | Category | Ratio | Minimum size | Shot needed |
| --- | --- | --- | --- | --- |
${rows.join("\n")}

For each photo please also supply: date, location, photographer/credit, and whether it is approved for press download.
(Generated from \`data/photos.ts\` by \`npm run docs:shotlist\`.)
`,
);
