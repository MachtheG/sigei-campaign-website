import type { L, PillarId } from "../types";

export type RecordEvent = {
  slug: string;
  /** ISO date; datePrecision controls how much of it we show. */
  date: string;
  datePrecision: "day" | "month" | "year";
  pillar: PillarId;
  title: L;
  summary: L;
  /** Our own plain-language explainer, never article text. */
  detail: L;
  photoId: string;
  sourceIds: string[];
};

export const timeline: RecordEvent[] = [
  {
    slug: "elected-senator",
    date: "2022-08-16", datePrecision: "day", pillar: "devolution",
    title: { en: "Becomes Senator for Bomet", sw: "Anakuwa Seneta wa Bomet" },
    summary: { en: "Elected on the UDA ticket to represent Bomet County in the Senate.", sw: "Alichaguliwa kupitia tiketi ya UDA kuwakilisha Kaunti ya Bomet Senetini." },
    detail: {
      en: "The Senate represents counties and protects devolution. From his first day, Sen. Sigei took the seat as a practising advocate, bringing a lawyer's habits of evidence and detail to the work of representing Bomet.",
      sw: "Seneti inawakilisha kaunti na kulinda ugatuzi. Tangu siku ya kwanza, Seneta Sigei alichukua kiti hicho akiwa wakili anayetekeleza sheria, akileta nidhamu ya ushahidi na umakini katika kuwakilisha Bomet.",
    },
    photoId: "portrait-formal",
    sourceIds: ["parliament-profile", "mzalendo-profile"],
  },
  {
    slug: "chair-justice-committee-2022",
    date: "2022-10-21", datePrecision: "day", pillar: "justice",
    title: { en: "Elected chair, Senate Justice Committee", sw: "Achaguliwa mwenyekiti, Kamati ya Haki ya Seneti" },
    summary: { en: "Senators chose him to chair the Justice, Legal Affairs and Human Rights Committee.", sw: "Maseneta walimchagua kuongoza Kamati ya Haki, Masuala ya Kisheria na Haki za Binadamu." },
    detail: {
      en: "The committee examines bills and matters of law, rights and the administration of justice. Chairing it puts his legal training to work for the whole country, and for Bomet.",
      sw: "Kamati hii huchunguza miswada na masuala ya sheria, haki na utawala wa haki. Kuiongoza kunatumia utaalamu wake wa kisheria kwa taifa zima, na kwa Bomet.",
    },
    photoId: "senate-committee",
    sourceIds: ["standard-chair-2022"],
  },
  {
    slug: "tea-bill-published",
    date: "2023-01", datePrecision: "month", pillar: "tea",
    title: { en: "Tea (Amendment) Bill published", sw: "Mswada wa Marekebisho ya Chai wachapishwa" },
    summary: { en: "He sponsors a Senate bill to protect small-scale tea growers' proceeds.", sw: "Anadhamini mswada wa Seneti wa kulinda mapato ya wakulima wadogo wa chai." },
    detail: {
      en: "Senate Bills No. 1 of 2023 sets out to protect growers' proceeds, allow direct sales, and exempt value-added tea from the levy, so that more of the value of Bomet's tea stays with the farmer.",
      sw: "Mswada wa Seneti Na. 1 wa 2023 unalenga kulinda mapato ya wakulima, kuruhusu mauzo ya moja kwa moja, na kusamehe chai iliyoongezwa thamani kutoka kwa ushuru, ili thamani zaidi ya chai ya Bomet ibaki kwa mkulima.",
    },
    photoId: "farmers-meeting",
    sourceIds: ["mzalendo-tea-bill", "parliament-tea-bill"],
  },
  {
    slug: "tea-bill-passed-senate",
    date: "2024-10-08", datePrecision: "day", pillar: "tea",
    title: { en: "Senate passes the Tea Bill", sw: "Seneti yaidhinisha Mswada wa Chai" },
    summary: { en: "The Bill clears the Senate and moves to the National Assembly.", sw: "Mswada unapita Senetini na kuelekea Bunge la Kitaifa." },
    detail: {
      en: "Passing the Senate is a major step, not the last one. The Bill must still pass the National Assembly and receive the President's assent before it becomes law. It has not yet been signed into law.",
      sw: "Kupita Senetini ni hatua kubwa, lakini si ya mwisho. Mswada lazima upitishwe na Bunge la Kitaifa na kupata idhini ya Rais kabla ya kuwa sheria. Bado haujasainiwa kuwa sheria.",
    },
    photoId: "senate-bill",
    sourceIds: ["parliament-tea-bill", "mzalendo-tea-bill"],
  },
  {
    slug: "courts-arson-statement",
    date: "2025-08", datePrecision: "month", pillar: "justice",
    title: { en: "Speaks on the Bomet Law Courts arson attempt", sw: "Azungumzia jaribio la kuchoma Mahakama ya Bomet" },
    summary: { en: "As a lawyer and committee chair, he defends the rule of law and court institutions.", sw: "Kama wakili na mwenyekiti wa kamati, anatetea utawala wa sheria na taasisi za mahakama." },
    detail: {
      en: "Attacks on courts are attacks on every citizen's access to justice. He spoke up for the institution.",
      sw: "Mashambulizi dhidi ya mahakama ni mashambulizi dhidi ya haki ya kila mwananchi kupata haki. Alizungumza kutetea taasisi hiyo.",
    },
    photoId: "senate-floor",
    sourceIds: ["unverified-courts-arson"],
  },
  {
    slug: "ecde-milk-oversight",
    date: "2025-04-08", datePrecision: "day", pillar: "education",
    title: { en: "Puts ECDE milk delivery under the spotlight", sw: "Aangazia utoaji wa maziwa kwa ECDE" },
    summary: { en: "Told senators milk reached learners only 5 times between January and March 2025.", sw: "Aliwaambia maseneta kuwa maziwa yaliwafikia wanafunzi mara 5 tu kati ya Januari na Machi 2025." },
    detail: {
      en: "Early learners were promised milk to support enrolment and attendance. He asked that the programme be run as intended, because a promise to children is only as good as its delivery.",
      sw: "Wanafunzi wa awali waliahidiwa maziwa ili kuboresha uandikishaji na mahudhurio. Aliomba mpango utekelezwe kama ilivyokusudiwa, kwa sababu ahadi kwa watoto ni nzuri tu kama inavyotekelezwa.",
    },
    photoId: "field-school",
    sourceIds: ["peopledaily-ecde-milk"],
  },
  {
    slug: "chair-justice-committee-2025",
    date: "2025-01-01", datePrecision: "year", pillar: "justice",
    title: { en: "Re-elected chair, Senate Justice Committee", sw: "Achaguliwa tena mwenyekiti, Kamati ya Haki ya Seneti" },
    summary: { en: "Senators returned him to lead the committee for another stretch.", sw: "Maseneta walimrudisha kuongoza kamati kwa kipindi kingine." },
    detail: {
      en: "A second election as chair reflects the confidence of fellow senators in how he runs the committee.",
      sw: "Kuchaguliwa mara ya pili kunaonyesha imani ya maseneta wenzake katika uongozi wake wa kamati.",
    },
    photoId: "senate-committee",
    sourceIds: ["eastleigh-chair-2025"],
  },
  {
    slug: "tea-farmers-bonus",
    date: "2025-09-30", datePrecision: "day", pillar: "tea",
    title: { en: "Urges swift action on the Tea Bill", sw: "Ahimiza hatua za haraka kuhusu Mswada wa Chai" },
    summary: { en: "With Bomet leaders, he presses the National Assembly to pass the Bill.", sw: "Pamoja na viongozi wa Bomet, anaomba Bunge la Kitaifa lipitishe mswada huo." },
    detail: {
      en: "Growers were frustrated by a low tea bonus. He argued the Tea Bill is part of the answer and urged the National Assembly to act.",
      sw: "Wakulima walikasirishwa na bonasi ndogo ya chai. Alihoji kuwa Mswada wa Chai ni sehemu ya suluhisho na akalitaka Bunge la Kitaifa kuchukua hatua.",
    },
    photoId: "farmers-tea",
    sourceIds: ["star-tea-bonus-2025"],
  },
  {
    slug: "stalled-projects-inspection",
    date: "2025-11-07", datePrecision: "day", pillar: "oversight",
    title: { en: "Senate inspects stalled Bomet projects", sw: "Seneti yakagua miradi iliyokwama Bomet" },
    summary: { en: "After his statement, the Senate Devolution Committee toured incomplete county projects.", sw: "Baada ya taarifa yake, Kamati ya Ugatuzi ya Seneti ilizuru miradi ya kaunti ambayo haijakamilika." },
    detail: {
      en: "Public money already spent on projects that stand unfinished helps no one. His statement in the Senate led to a committee visit to see the projects first-hand, including a water project started in 2010.",
      sw: "Fedha za umma zilizotumika kwenye miradi isiyokamilika hazimsaidii yeyote. Taarifa yake Senetini ilisababisha ziara ya kamati kujionea miradi, ikiwemo mradi wa maji ulioanza 2010.",
    },
    photoId: "field-inspection",
    sourceIds: ["peopledaily-stalled-projects", "standard-stalled-projects"],
  },
  {
    slug: "bomwasco-audit-scrutiny",
    date: "2026-01-29", datePrecision: "day", pillar: "water",
    title: { en: "Audit scrutiny of Bomet, incl. the water company", sw: "Ukaguzi wa hesabu za Bomet, ikiwemo kampuni ya maji" },
    summary: { en: "Senators examined Bomet's 2024/25 audit queries, including BOMWASCO.", sw: "Maseneta walichunguza hoja za ukaguzi wa Bomet 2024/25, ikiwemo BOMWASCO." },
    detail: {
      en: "Reliable water depends on a well-run water company. He said the Senate would keep monitoring corrective action, because accountability is not a one-day event.",
      sw: "Maji ya uhakika yanahitaji kampuni ya maji inayosimamiwa vizuri. Alisema Seneti itaendelea kufuatilia hatua za kurekebisha, kwa sababu uwajibikaji si tukio la siku moja.",
    },
    photoId: "field-water",
    sourceIds: ["peopledaily-bomwasco", "peopledaily-audit"],
  },
  {
    slug: "political-violence-statement",
    date: "2026-04", datePrecision: "month", pillar: "justice",
    title: { en: "Speaks against political violence", sw: "Apinga ghasia za kisiasa" },
    summary: { en: "Calls for peaceful politics ahead of the 2027 campaign season.", sw: "Anatoa wito wa siasa za amani kuelekea msimu wa kampeni wa 2027." },
    detail: {
      en: "Free and fair elections need safe campaigns. He called for peace and for the law to be respected by everyone.",
      sw: "Uchaguzi huru na wa haki unahitaji kampeni salama. Alitoa wito wa amani na sheria kuheshimiwa na kila mtu.",
    },
    photoId: "events-rally",
    sourceIds: ["unverified-political-violence"],
  },
  {
    slug: "ecde-centres-expansion",
    date: "2026-08-20", datePrecision: "day", pillar: "education",
    title: { en: "Calls for more modern ECDE centres", sw: "Aomba vituo vya kisasa vya ECDE zaidi" },
    summary: { en: "Presses for urgent expansion of modern early-learning centres in Bomet.", sw: "Anasisitiza upanuzi wa haraka wa vituo vya kisasa vya elimu ya awali Bomet." },
    detail: {
      en: "A strong start in school shapes everything after it. He asked for modern early-learning centres within reach of more of Bomet's children.",
      sw: "Mwanzo mzuri shuleni huathiri kila kitu baadaye. Aliomba vituo vya kisasa vya elimu ya awali vilivyo karibu na watoto wengi zaidi wa Bomet.",
    },
    photoId: "field-school",
    sourceIds: ["kna-ecde-2026", "educationnews-ecde"],
  },
];

export const bySlug = (slug: string) => timeline.find((e) => e.slug === slug);
