import type { L, PillarId } from "../types";

export type Lever = "bill" | "oversight" | "revenue";

export type Commitment = {
  id: string;
  pillar: PillarId | "youth";
  title: L;
  what: L;
  why: L;
  how: L;
  lever: Lever;
  measure: L;
  /** Every commitment stays DRAFT until the Senator signs it off. */
  status: "draft";
  sourceIds: string[];
};

export const commitments: Commitment[] = [
  {
    id: "tea",
    pillar: "tea",
    lever: "bill",
    status: "draft",
    title: { en: "Tea farmers' earnings", sw: "Mapato ya wakulima wa chai" },
    what: {
      en: "See the Tea (Amendment) Bill through the National Assembly to become law.",
      sw: "Kuhakikisha Mswada wa Marekebisho ya Chai unapita Bunge la Kitaifa na kuwa sheria.",
    },
    why: {
      en: "Bomet's tea growers should keep more of the value they work for. The Bill already passed the Senate.",
      sw: "Wakulima wa chai wa Bomet wanapaswa kubaki na thamani zaidi ya jasho lao. Mswada tayari umepita Senetini.",
    },
    how: {
      en: "Sponsor's follow-through: engage the National Assembly and growers' groups until assent.",
      sw: "Ufuatiliaji wa mdhamini: kushirikiana na Bunge la Kitaifa na vikundi vya wakulima hadi idhini.",
    },
    measure: {
      en: "Bill stage on the public tracker; payments to growers as reported by the sector.",
      sw: "Hatua ya mswada kwenye kifuatiliaji cha umma; malipo kwa wakulima kama yanavyoripotiwa na sekta.",
    },
    sourceIds: ["parliament-tea-bill", "mzalendo-tea-bill"],
  },
  {
    id: "oversight",
    pillar: "oversight",
    lever: "oversight",
    status: "draft",
    title: { en: "Every shilling accounted for", sw: "Kila shilingi ihesabiwe" },
    what: {
      en: "Keep Bomet's county spending and stalled projects under steady Senate scrutiny.",
      sw: "Kuendelea kuweka matumizi ya kaunti ya Bomet na miradi iliyokwama chini ya uangalizi wa Seneti.",
    },
    why: {
      en: "Money spent on projects left unfinished is money taken from services families need.",
      sw: "Fedha zinazotumika kwenye miradi isiyokamilika ni fedha zinazopokonywa huduma wanazohitaji familia.",
    },
    how: {
      en: "Statements, committee inspections and audit hearings in the Senate.",
      sw: "Taarifa, ukaguzi wa kamati na vikao vya ukaguzi wa hesabu Senetini.",
    },
    measure: {
      en: "Stalled projects completed; audit queries closed, as reported by the Auditor-General and Controller of Budget.",
      sw: "Miradi iliyokwama kukamilika; hoja za ukaguzi kufungwa, kama zinavyoripotiwa na Mkaguzi Mkuu na Mdhibiti wa Bajeti.",
    },
    sourceIds: ["peopledaily-stalled-projects", "peopledaily-audit"],
  },
  {
    id: "justice",
    pillar: "justice",
    lever: "bill",
    status: "draft",
    title: {
      en: "Justice, rule of law and GBV response",
      sw: "Haki, utawala wa sheria na kukabili GBV",
    },
    what: {
      en: "Use the Justice Committee chair to strengthen laws and institutions that protect people, especially from gender-based violence.",
      sw: "Kutumia uenyekiti wa Kamati ya Haki kuimarisha sheria na taasisi zinazolinda watu, hasa dhidi ya ukatili wa kijinsia.",
    },
    why: {
      en: "Rights mean little if courts and protections are out of reach.",
      sw: "Haki hazina maana ikiwa mahakama na ulinzi haviwafikii watu.",
    },
    how: {
      en: "Committee scrutiny of bills and petitions; legislative amendments where gaps are found.",
      sw: "Uchunguzi wa kamati wa miswada na maombi; marekebisho ya sheria pale mapengo yanapopatikana.",
    },
    measure: {
      en: "Bills and amendments tabled and passed; committee reports published.",
      sw: "Miswada na marekebisho yaliyowasilishwa na kupitishwa; ripoti za kamati zilizochapishwa.",
    },
    sourceIds: ["standard-chair-2022", "unverified-gbv-arrears"],
  },
  {
    id: "ecde",
    pillar: "education",
    lever: "oversight",
    status: "draft",
    title: { en: "ECDE and education", sw: "ECDE na elimu" },
    what: {
      en: "Press for the ECDE milk programme to deliver as promised and for more modern early-learning centres.",
      sw: "Kusisitiza mpango wa maziwa wa ECDE utekelezwe kama ilivyoahidiwa na kuwepo kwa vituo vya kisasa zaidi vya elimu ya awali.",
    },
    why: {
      en: "A strong start at school changes a child's whole path.",
      sw: "Mwanzo mzuri shuleni hubadilisha safari nzima ya mtoto.",
    },
    how: {
      en: "Senate oversight of county education functions and the county share of revenue.",
      sw: "Usimamizi wa Seneti wa majukumu ya elimu ya kaunti na mgao wa mapato ya kaunti.",
    },
    measure: {
      en: "Milk delivery days per term; number of modern ECDE centres, reported by the county.",
      sw: "Siku za utoaji maziwa kwa muhula; idadi ya vituo vya kisasa vya ECDE, kama inavyoripotiwa na kaunti.",
    },
    sourceIds: ["peopledaily-ecde-milk", "kna-ecde-2026"],
  },
  {
    id: "water",
    pillar: "water",
    lever: "oversight",
    status: "draft",
    title: { en: "Water, power and service delivery", sw: "Maji, umeme na utoaji huduma" },
    what: {
      en: "Follow audit findings on Bomet's water services until corrective action is taken.",
      sw: "Kufuatilia matokeo ya ukaguzi wa huduma za maji za Bomet hadi hatua za kurekebisha zichukuliwe.",
    },
    why: {
      en: "Clean, reliable water and power are basics that every home depends on.",
      sw: "Maji safi ya uhakika na umeme ni mahitaji ya msingi ya kila kaya.",
    },
    how: {
      en: "Audit hearings and follow-up questions in the Senate; project inspections.",
      sw: "Vikao vya ukaguzi na maswali ya ufuatiliaji Senetini; ukaguzi wa miradi.",
    },
    measure: {
      en: "Non-revenue water and staff arrears at the water company, as audited.",
      sw: "Maji yasiyolipiwa na malimbikizo ya wafanyakazi katika kampuni ya maji, kama yalivyokaguliwa.",
    },
    sourceIds: ["peopledaily-bomwasco"],
  },
  {
    id: "devolution",
    pillar: "devolution",
    lever: "revenue",
    status: "draft",
    title: {
      en: "Devolution, county workers and youth opportunity",
      sw: "Ugatuzi, wafanyakazi wa kaunti na fursa kwa vijana",
    },
    what: {
      en: "Defend devolution: timely pay for county workers and county funds that reach youth opportunity programmes.",
      sw: "Kutetea ugatuzi: malipo ya wakati kwa wafanyakazi wa kaunti na fedha za kaunti zinazofikia programu za fursa kwa vijana.",
    },
    why: {
      en: "Devolution works when money and people are treated fairly at the county level.",
      sw: "Ugatuzi hufanya kazi pale fedha na watu wanapotendewa haki katika ngazi ya kaunti.",
    },
    how: {
      en: "The Senate's role in the county revenue-sharing formula and oversight of county spending.",
      sw: "Jukumu la Seneti katika fomula ya mgao wa mapato ya kaunti na usimamizi wa matumizi ya kaunti.",
    },
    measure: {
      en: "Salary arrears cleared; share of the county budget going to youth programmes, per Controller of Budget.",
      sw: "Malimbikizo ya mishahara kulipwa; sehemu ya bajeti ya kaunti kwa programu za vijana, kulingana na Mdhibiti wa Bajeti.",
    },
    sourceIds: ["unverified-gbv-arrears", "bomet-county-about"],
  },
];
