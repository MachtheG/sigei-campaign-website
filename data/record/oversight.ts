import { timeline } from "./timeline";
import { PILLARS, type PillarId } from "../types";

/**
 * Documented actions per year, derived from the sourced timeline only.
 * [[TO CONFIRM: official counts of statements sought, inspections and committee
 * sittings from Hansard / Senate records]], replace this derivation when obtained.
 */
export type OversightRow = { year: string } & Record<PillarId, number>;

export function oversightByYear(): OversightRow[] {
  const years = Array.from(new Set(timeline.map((e) => e.date.slice(0, 4)))).sort();
  return years.map((year) => {
    const row = { year } as OversightRow;
    for (const p of PILLARS) row[p] = 0;
    for (const e of timeline) if (e.date.startsWith(year)) row[e.pillar] += 1;
    return row;
  });
}
