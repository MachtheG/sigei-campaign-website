/* Fails if any stat / claim references a missing source or has none. */
import { sources } from "../data/sources";
import { stats } from "../data/record/stats";
import { timeline } from "../data/record/timeline";
import { bills } from "../data/record/bills";
import { commitments } from "../data/second-term/commitments";
import { news } from "../data/news";
import { journey } from "../data/about";
import { partyPrograms } from "../data/party";
import { ELECTION, KEY_DATES } from "../data/election";

type Item = { where: string; ids: readonly string[]; optional?: boolean };
const items: Item[] = [
  ...stats.map((s) => ({ where: `stat:${s.id}`, ids: s.sourceIds })),
  ...timeline.map((e) => ({ where: `timeline:${e.slug}`, ids: e.sourceIds })),
  ...bills.map((b) => ({ where: `bill:${b.id}`, ids: b.sourceIds })),
  ...commitments.map((c) => ({ where: `commitment:${c.id}`, ids: c.sourceIds })),
  ...news.map((n) => ({ where: `news:${n.id}`, ids: [n.sourceId] })),
  ...journey.map((j) => ({ where: `about:${j.id}`, ids: j.sourceIds })),
  // Party programmes are visible [[TO CONFIRM]] placeholders until sourced.
  ...partyPrograms.map((p) => ({ where: `party:${p.id}`, ids: p.sourceIds, optional: true })),
  { where: "election", ids: ELECTION.sourceIds },
  ...KEY_DATES.map((k) => ({ where: `keydate:${k.id}`, ids: k.sourceIds })),
];

let errors = 0;
for (const it of items) {
  if (it.ids.length === 0 && !it.optional) {
    console.error(`✗ ${it.where}: no source`);
    errors++;
  }
  for (const id of it.ids) {
    if (!sources[id]) {
      console.error(`✗ ${it.where}: unknown source "${id}"`);
      errors++;
    }
  }
}
for (const s of Object.values(sources)) {
  if (!s.title || !s.outlet) {
    console.error(`✗ source ${s.id}: missing title/outlet`);
    errors++;
  }
}

const unverified = Object.values(sources).filter((s) => !s.verified);
console.log(`Checked ${items.length} cited items against ${Object.keys(sources).length} sources.`);
if (unverified.length)
  console.warn(
    `⚠ ${unverified.length} sources not fully verified: ${unverified.map((s) => s.id).join(", ")}`,
  );
if (errors) {
  console.error(`\n${errors} problem(s).`);
  process.exit(1);
}
console.log("✓ sources OK");
