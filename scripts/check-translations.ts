/* Fails if any key exists in one locale's messages but not the other. */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "messages");
type Json = { [k: string]: Json | string | Json[] | string[] };

function flatten(o: unknown, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};
  if (Array.isArray(o)) {
    o.forEach((v, i) => Object.assign(out, flatten(v, `${prefix}[${i}]`)));
  } else if (o && typeof o === "object") {
    for (const [k, v] of Object.entries(o as Json)) Object.assign(out, flatten(v, prefix ? `${prefix}.${k}` : k));
  } else {
    out[prefix] = String(o);
  }
  return out;
}

const files = new Set([...readdirSync(join(root, "en")), ...readdirSync(join(root, "sw"))]);
let errors = 0;
for (const f of [...files].sort()) {
  const read = (l: string) => {
    try {
      return flatten(JSON.parse(readFileSync(join(root, l, f), "utf8")));
    } catch {
      console.error(`✗ ${l}/${f}: missing or invalid JSON`);
      errors++;
      return null;
    }
  };
  const en = read("en");
  const sw = read("sw");
  if (!en || !sw) continue;
  for (const k of Object.keys(en)) if (!(k in sw)) { console.error(`✗ sw/${f}: missing "${k}"`); errors++; }
  for (const k of Object.keys(sw)) if (!(k in en)) { console.error(`✗ en/${f}: missing "${k}"`); errors++; }
  for (const [k, v] of Object.entries(sw)) if (!v.trim()) { console.error(`✗ sw/${f}: empty "${k}"`); errors++; }
}
if (errors) {
  console.error(`\n${errors} translation problem(s).`);
  process.exit(1);
}
console.log(`✓ translations OK (${files.size} files, en ⇄ sw in sync)`);
