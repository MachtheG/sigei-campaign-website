import { yearsSince } from "../../lib/format";
import type { L, PillarId } from "../types";

export type Stat = {
  id: string;
  /** Numeric value; `computed` overrides it at render time. */
  value: number;
  computed?: "yearsInOffice";
  decimals?: number;
  suffix?: string;
  label: L;
  note: L;
  pillars: PillarId[];
  photoId: string;
  sourceIds: string[];
  /** Show a visible [[TO CONFIRM]] flag next to the number. */
  confirm?: string;
  /** ISO date a running count was read. Computed stats show today's date instead. */
  asOf?: string;
  /** Neutral context (not a claim about his performance). */
  context?: boolean;
};

/** 13th Parliament swearing-in began 8 Sep 2022 (source: star-swearing-in-2022). */
export const SENATOR_SINCE = "2022-09-08";

export const stats: Stat[] = [
  {
    id: "years-in-office",
    value: 4,
    computed: "yearsInOffice",
    decimals: 1,
    label: { en: "Years serving Bomet in the Senate", sw: "Miaka ya kuhudumia Bomet Senetini" },
    note: {
      en: "Elected on the UDA ticket in August 2022; the 13th Parliament was sworn in from 8 September 2022.",
      sw: "Alichaguliwa kupitia tiketi ya UDA Agosti 2022; Bunge la 13 liliapishwa kuanzia 8 Septemba 2022.",
    },
    pillars: ["devolution", "justice"],
    photoId: "portrait-formal",
    sourceIds: ["mzalendo-profile", "star-swearing-in-2022"],
  },
  {
    id: "chair-terms",
    value: 2,
    suffix: "×",
    label: {
      en: "Times elected chair of the Senate Justice Committee",
      sw: "Mara alizochaguliwa mwenyekiti wa Kamati ya Haki ya Seneti",
    },
    note: {
      en: "Elected 21 October 2022; re-elected 25 February 2025.",
      sw: "Alichaguliwa 21 Oktoba 2022; akachaguliwa tena 25 Februari 2025.",
    },
    pillars: ["justice"],
    photoId: "senate-committee",
    sourceIds: ["standard-chair-2022", "eastleigh-chair-2025"],
  },
  {
    id: "bills-sponsored",
    value: 2,
    label: {
      en: "Senate bills he has sponsored this Parliament, counted by Mzalendo",
      sw: "Miswada ya Seneti aliyodhamini katika Bunge hili, kwa hesabu ya Mzalendo",
    },
    note: {
      en: "One, the Tea (Amendment) Bill, passed the Senate on 8 October 2024 and is before the National Assembly. Not yet law.",
      sw: "Mmoja, Mswada wa Marekebisho ya Chai, uliidhinishwa na Seneti 8 Oktoba 2024 na uko Bunge la Kitaifa. Bado si sheria.",
    },
    pillars: ["tea"],
    photoId: "senate-bill",
    sourceIds: ["mzalendo-performance", "parliament-tea-bill"],
    asOf: "2026-11-17",
  },
  {
    id: "growers",
    value: 600000,
    suffix: "+",
    label: {
      en: "Small-scale tea growers the Tea Bill is written for",
      sw: "Wakulima wadogo wa chai ambao Mswada wa Chai unawalenga",
    },
    note: {
      en: "Basis: small-scale growers supplying 69 KTDA-managed factories, per Nation (2023). A national figure, not Bomet alone.",
      sw: "Msingi: wakulima wadogo wanaosambaza viwanda 69 vinavyosimamiwa na KTDA, kwa mujibu wa Nation (2023). Ni idadi ya kitaifa, si ya Bomet pekee.",
    },
    pillars: ["tea"],
    photoId: "farmers-tea",
    sourceIds: ["nation-tea-bill", "parliament-tea-bill"],
  },
  {
    id: "votes-2022",
    value: 237192,
    label: {
      en: "Votes that elected him Senator for Bomet in 2022",
      sw: "Kura zilizomchagua kuwa Seneta wa Bomet mwaka 2022",
    },
    note: {
      en: "From a county register of 376,985 voters (IEBC, 2022).",
      sw: "Kati ya wapiga kura 376,985 waliosajiliwa katika kaunti (IEBC, 2022).",
    },
    pillars: ["devolution"],
    photoId: "events-rally",
    sourceIds: ["mzalendo-performance", "iebc-voters-2022"],
  },
  {
    id: "contributions",
    value: 220,
    label: {
      en: "Contributions recorded in the Senate this term",
      sw: "Michango iliyorekodiwa Senetini muhula huu",
    },
    note: {
      en: "Counted by Mzalendo from Hansard; the count keeps rising.",
      sw: "Imehesabiwa na Mzalendo kutoka Hansard; idadi inaendelea kuongezeka.",
    },
    pillars: ["oversight", "justice"],
    photoId: "senate-floor",
    sourceIds: ["mzalendo-performance"],
    asOf: "2026-11-17",
  },
  {
    id: "bar-years",
    value: 13,
    label: {
      en: "Years practising law before entering the Senate",
      sw: "Miaka ya kutekeleza sheria kabla ya kuingia Senetini",
    },
    note: {
      en: "Associate advocate from 2009; managing partner of SMS Advocates LLP since 2013. LLM, University of Nairobi (2012–2014).",
      sw: "Wakili msaidizi tangu 2009; mshirika mkuu wa SMS Advocates LLP tangu 2013. LLM, Chuo Kikuu cha Nairobi (2012–2014).",
    },
    pillars: ["justice"],
    photoId: "kaplong-hills",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "population",
    value: 875689,
    label: {
      en: "People of Bomet County (2019 Census)",
      sw: "Wakazi wa Kaunti ya Bomet (Sensa ya 2019)",
    },
    note: {
      en: "Context: the residents he represents in the Senate.",
      sw: "Muktadha: wakazi anaowawakilisha Senetini.",
    },
    pillars: ["devolution"],
    photoId: "community-elders",
    sourceIds: ["knbs-census-2019"],
    context: true,
  },
  {
    id: "registered-voters",
    value: 376985,
    label: {
      en: "Registered voters in Bomet County (2022 register)",
      sw: "Wapiga kura waliosajiliwa Kaunti ya Bomet (daftari la 2022)",
    },
    note: {
      en: "Across five constituencies. The 2027 register will differ.",
      sw: "Katika maeneo bunge matano. Daftari la 2027 litakuwa tofauti.",
    },
    pillars: ["devolution"],
    photoId: "community-women",
    sourceIds: ["iebc-voters-2022"],
    context: true,
  },
  {
    id: "wards",
    value: 25,
    label: {
      en: "Wards across Bomet's 5 constituencies",
      sw: "Wadi 25 katika maeneo bunge 5 ya Bomet",
    },
    note: {
      en: "Sotik, Chepalungu, Bomet East, Bomet Central and Konoin.",
      sw: "Sotik, Chepalungu, Bomet Mashariki, Bomet Kati na Konoin.",
    },
    pillars: ["devolution"],
    photoId: "community-women",
    sourceIds: ["bomet-county-about"],
    context: true,
  },
];

/** Display value: years in office is computed from the swearing-in date at render time. */
export function statValue(s: Stat): number {
  if (s.computed === "yearsInOffice") return Math.floor(yearsSince(SENATOR_SINCE) * 10) / 10;
  return s.value;
}
