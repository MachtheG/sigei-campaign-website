import type { L, PillarId } from "./types";

/** Our own one-line summaries. Never copy article text. */
export type NewsItem = {
  id: string;
  sourceId: string;
  pillar: PillarId;
  summary: L;
};

export const news: NewsItem[] = [
  { id: "n1", sourceId: "standard-chair-2022", pillar: "justice",
    summary: { en: "Senators elect Sen. Sigei to chair the Justice, Legal Affairs and Human Rights Committee.", sw: "Maseneta wamchagua Seneta Sigei kuongoza Kamati ya Haki, Masuala ya Kisheria na Haki za Binadamu." } },
  { id: "n2", sourceId: "eastleigh-chair-2025", pillar: "justice",
    summary: { en: "Senate committee elections return Sen. Sigei as chair of the Justice Committee.", sw: "Uchaguzi wa kamati za Seneti unamrudisha Seneta Sigei kuwa mwenyekiti wa Kamati ya Haki." } },
  { id: "n3", sourceId: "parliament-tea-bill", pillar: "tea",
    summary: { en: "Parliament's record of the Tea (Amendment) Bill, passed by the Senate on 8 October 2024.", sw: "Rekodi ya Bunge ya Mswada wa Marekebisho ya Chai, ulioidhinishwa na Seneti 8 Oktoba 2024." } },
  { id: "n4", sourceId: "mzalendo-tea-bill", pillar: "tea",
    summary: { en: "Mzalendo tracks the Tea Bill's journey from the Senate to the National Assembly.", sw: "Mzalendo anafuatilia safari ya Mswada wa Chai kutoka Seneti hadi Bunge la Kitaifa." } },
  { id: "n5", sourceId: "nation-tea-bill", pillar: "tea",
    summary: { en: "Tea farmers voice support for the Senator's effort to review the law on selling tea.", sw: "Wakulima wa chai waunga mkono juhudi za Seneta kupitia upya sheria ya uuzaji wa chai." } },
  { id: "n6", sourceId: "star-tea-bonus-2025", pillar: "tea",
    summary: { en: "Bomet leaders, including the Senator, call for action over the tea bonus.", sw: "Viongozi wa Bomet, akiwemo Seneta, wanataka hatua kuhusu bonasi ya chai." } },
  { id: "n7", sourceId: "peopledaily-ecde-milk", pillar: "education",
    summary: { en: "Senators examine the county's ECDE milk programme; Sen. Sigei cites five deliveries in three months.", sw: "Maseneta wachunguza mpango wa maziwa wa ECDE; Seneta Sigei atoa mfano wa utoaji mara tano kwa miezi mitatu." } },
  { id: "n8", sourceId: "peopledaily-stalled-projects", pillar: "oversight",
    summary: { en: "Senate Devolution Committee questions the county executive over stalled projects.", sw: "Kamati ya Ugatuzi ya Seneti yahoji utawala wa kaunti kuhusu miradi iliyokwama." } },
  { id: "n9", sourceId: "standard-stalled-projects", pillar: "oversight",
    summary: { en: "Committee concludes an inspection tour of incomplete Bomet projects.", sw: "Kamati yahitimisha ziara ya kukagua miradi ya Bomet isiyokamilika." } },
  { id: "n10", sourceId: "peopledaily-audit", pillar: "oversight",
    summary: { en: "Bomet County faces Senate scrutiny over its audit queries and stalled projects.", sw: "Kaunti ya Bomet yakabiliwa na uchunguzi wa Seneti kuhusu hoja za ukaguzi na miradi iliyokwama." } },
  { id: "n11", sourceId: "peopledaily-bomwasco", pillar: "water",
    summary: { en: "Senate committee examines the Bomet water company's audit findings; Sen. Sigei says oversight will continue.", sw: "Kamati ya Seneti yachunguza matokeo ya ukaguzi wa kampuni ya maji ya Bomet; Seneta Sigei asema usimamizi utaendelea." } },
  { id: "n12", sourceId: "kna-ecde-2026", pillar: "education",
    summary: { en: "Kenya News Agency reports the Senator's call to expand modern ECDE centres.", sw: "Shirika la Habari la Kenya laripoti wito wa Seneta wa kupanua vituo vya kisasa vya ECDE." } },
  { id: "n13", sourceId: "educationnews-ecde", pillar: "education",
    summary: { en: "Education News on the Senator's push for more modern early-learning centres.", sw: "Education News kuhusu msukumo wa Seneta wa vituo vya kisasa zaidi vya elimu ya awali." } },
];

/** Own press statements will be added here once the campaign supplies them. */
export const statements: { id: string; date: string; title: L; body: L }[] = [];
