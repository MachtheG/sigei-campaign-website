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
  /** Neutral context (not a claim about his performance). */
  context?: boolean;
};

export const SENATOR_SINCE = "2022-08-16";

export const stats: Stat[] = [
  {
    id: "years-in-office",
    value: 4,
    computed: "yearsInOffice",
    decimals: 1,
    label: { en: "Years serving Bomet in the Senate", sw: "Miaka ya kuhudumia Bomet Senetini" },
    note: { en: "Senator for Bomet since 16 August 2022, elected on the UDA ticket.", sw: "Seneta wa Bomet tangu 16 Agosti 2022, alichaguliwa kupitia tiketi ya UDA." },
    pillars: ["devolution", "justice"],
    photoId: "portrait-formal",
    sourceIds: ["parliament-profile", "mzalendo-profile"],
  },
  {
    id: "chair-terms",
    value: 2,
    suffix: "×",
    label: { en: "Times elected chair of the Senate Justice Committee", sw: "Mara alizochaguliwa mwenyekiti wa Kamati ya Haki ya Seneti" },
    note: { en: "Elected October 2022 and re-elected in 2025.", sw: "Alichaguliwa Oktoba 2022 na kuchaguliwa tena 2025." },
    pillars: ["justice"],
    photoId: "senate-committee",
    sourceIds: ["standard-chair-2022", "eastleigh-chair-2025"],
    confirm: "exact 2025 re-election date",
  },
  {
    id: "bills-sponsored",
    value: 1,
    label: { en: "Bill passed by the Senate, the Tea (Amendment) Bill", sw: "Mswada ulioidhinishwa na Seneti: Mswada wa Marekebisho ya Chai" },
    note: { en: "Passed 8 October 2024; now before the National Assembly. Not yet law.", sw: "Uliidhinishwa 8 Oktoba 2024; sasa uko Bunge la Kitaifa. Bado si sheria." },
    pillars: ["tea"],
    photoId: "senate-bill",
    sourceIds: ["parliament-tea-bill", "mzalendo-tea-bill"],
    confirm: "total number of bills sponsored",
  },
  {
    id: "growers",
    value: 600000,
    suffix: "+",
    label: { en: "Small-scale tea growers the Tea Bill is written for", sw: "Wakulima wadogo wa chai ambao Mswada wa Chai unawalenga" },
    note: { en: "Growers supplying KTDA factories across tea-growing counties.", sw: "Wakulima wanaosambaza viwanda vya KTDA katika kaunti zinazolima chai." },
    pillars: ["tea"],
    photoId: "farmers-tea",
    sourceIds: ["nation-tea-bill", "parliament-tea-bill"],
    confirm: "growers figure against article text",
  },
  {
    id: "factories",
    value: 69,
    label: { en: "KTDA factories whose growers the Bill covers", sw: "Viwanda vya KTDA ambavyo wakulima wake wanalengwa na Mswada" },
    note: { en: "The Bill protects growers' proceeds and allows direct sales.", sw: "Mswada unalinda mapato ya wakulima na kuruhusu mauzo ya moja kwa moja." },
    pillars: ["tea"],
    photoId: "farmers-pluckers",
    sourceIds: ["nation-tea-bill"],
    confirm: "factories figure against article text",
  },
  {
    id: "inspection",
    value: 1,
    label: { en: "Senate inspection of stalled Bomet projects, after his statement", sw: "Ukaguzi wa Seneti wa miradi iliyokwama Bomet, baada ya taarifa yake" },
    note: { en: "Senate Devolution Committee, November 2025.", sw: "Kamati ya Ugatuzi ya Seneti, Novemba 2025." },
    pillars: ["oversight", "devolution"],
    photoId: "field-inspection",
    sourceIds: ["peopledaily-stalled-projects", "standard-stalled-projects"],
  },
  {
    id: "ecde-milk",
    value: 5,
    label: { en: "Times milk reached ECDE learners, January to March 2025", sw: "Mara maziwa yalipowafikia wanafunzi wa ECDE, Januari hadi Machi 2025" },
    note: { en: "A figure he put before the Senate to push for the programme to deliver.", sw: "Takwimu aliyoiwasilisha Senetini ili mpango huo utekelezwe ipasavyo." },
    pillars: ["education"],
    photoId: "field-school",
    sourceIds: ["peopledaily-ecde-milk"],
  },
  {
    id: "contributions",
    value: 220,
    label: { en: "Contributions recorded in the Senate this term", sw: "Michango iliyorekodiwa Senetini muhula huu" },
    note: { en: "Counted by Mzalendo from Hansard; the count keeps rising.", sw: "Imehesabiwa na Mzalendo kutoka Hansard; idadi inaendelea kuongezeka." },
    pillars: ["oversight", "justice"],
    photoId: "senate-floor",
    sourceIds: ["mzalendo-performance"],
    confirm: "count as of launch date",
  },
  {
    id: "bar-years",
    value: 13,
    label: { en: "Years practising law before entering the Senate", sw: "Miaka ya kutekeleza sheria kabla ya kuingia Senetini" },
    note: { en: "Practising since 2009; now managing partner of SMS Advocates LLP. LLM, University of Nairobi.", sw: "Anatekeleza sheria tangu 2009; sasa mshirika mkuu wa SMS Advocates LLP. Shahada ya LLM, Chuo Kikuu cha Nairobi." },
    pillars: ["justice"],
    photoId: "portrait-casual",
    sourceIds: ["parliament-profile"],
    confirm: "start year of practice",
  },
  {
    id: "population",
    value: 875689,
    label: { en: "People of Bomet County (2019 Census)", sw: "Wakazi wa Kaunti ya Bomet (Sensa ya 2019)" },
    note: { en: "Context: the residents he represents in the Senate.", sw: "Muktadha: wakazi anaowawakilisha Senetini." },
    pillars: ["devolution"],
    photoId: "community-elders",
    sourceIds: ["knbs-census-2019"],
    context: true,
  },
  {
    id: "wards",
    value: 25,
    label: { en: "Wards across Bomet's 5 constituencies", sw: "Wadi 25 katika maeneo bunge 5 ya Bomet" },
    note: { en: "Sotik, Chepalungu, Bomet East, Bomet Central and Konoin.", sw: "Sotik, Chepalungu, Bomet Mashariki, Bomet Kati na Konoin." },
    pillars: ["devolution"],
    photoId: "community-women",
    sourceIds: ["bomet-county-about"],
    context: true,
  },
];
