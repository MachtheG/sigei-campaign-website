import type { L } from "./types";

/**
 * UDA programmes relevant to Bomet. None are asserted until sourced:
 * [[TO CONFIRM: each programme, with an official UDA / government source]].
 */
export const partyPrograms: { id: string; title: L; sourceIds: string[] }[] = [
  { id: "p1", title: { en: "Programme 1", sw: "Mpango 1" }, sourceIds: [] },
  { id: "p2", title: { en: "Programme 2", sw: "Mpango 2" }, sourceIds: [] },
  { id: "p3", title: { en: "Programme 3", sw: "Mpango 3" }, sourceIds: [] },
];

export const partyRoleSourceIds = ["parliament-profile", "mzalendo-profile"];
