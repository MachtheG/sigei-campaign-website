export type Locale = "en" | "sw";

/** Every piece of content in /data carries both languages. */
export type L = { en: string; sw: string };

export const PILLARS = [
  "tea",
  "oversight",
  "justice",
  "education",
  "water",
  "devolution",
] as const;

export type PillarId = (typeof PILLARS)[number];

export function pick(field: L, locale: string): string {
  return locale === "sw" ? field.sw : field.en;
}

/** Marker rendered visibly wherever a fact still needs confirming. */
export const confirm = (what: string) => `[[TO CONFIRM: ${what}]]`;
