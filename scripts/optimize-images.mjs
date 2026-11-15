// Usage: drop <id>.jpg into public/images/senator/<category>/ (or hero/), then `npm run images`.
// Writes AVIF + WebP at responsive widths and a blur placeholder into data/photos.generated.json.
import { readdir, mkdir, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const ROOT = "public/images/senator";
const OUT = join(ROOT, "_opt");
const WIDTHS = [480, 960, 1600, 2400];
const FOLDERS = ["hero", "senate", "field", "community", "farmers", "portraits", "events"];
const EXT = /\.(jpe?g|png|webp|avif|tiff?)$/i;

await mkdir(OUT, { recursive: true });
const manifest = {};

for (const folder of FOLDERS) {
  let files = [];
  try {
    files = (await readdir(join(ROOT, folder))).filter((f) => EXT.test(f));
  } catch {
    continue;
  }
  for (const file of files) {
    const id = parse(file).name;
    const img = sharp(join(ROOT, folder, file)).rotate(); // honour EXIF orientation
    const meta = await img.metadata();
    const w = meta.width ?? 0;
    if (id === "hero-main" && w < 2400)
      console.warn(`⚠ ${id}: ${w}px wide, hero should be ≥ 2400px`);
    const widths = WIDTHS.filter((x) => x <= w || x === WIDTHS[0]);
    if (!widths.includes(w) && w < WIDTHS.at(-1)) widths.push(w);
    for (const width of widths) {
      const base = img.clone().resize({ width, withoutEnlargement: true });
      await base
        .clone()
        .webp({ quality: 78 })
        .toFile(join(OUT, `${id}-${width}.webp`));
      await base
        .clone()
        .avif({ quality: 55 })
        .toFile(join(OUT, `${id}-${width}.avif`));
    }
    const best = Math.max(...widths);
    const blur = await img.clone().resize({ width: 16 }).webp({ quality: 40 }).toBuffer();
    const height = Math.round(((meta.height ?? 0) * Math.min(best, w)) / (w || 1));
    manifest[id] = {
      src: `/images/senator/_opt/${id}-${best}.webp`,
      width: Math.min(best, w),
      height,
      blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
    };
    console.log(`✓ ${id} (${folder}) → ${widths.join(", ")}px`);
  }
}

await writeFile("data/photos.generated.json", JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nWrote data/photos.generated.json (${Object.keys(manifest).length} photos).`);
