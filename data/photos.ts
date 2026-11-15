import credits from "./photo-credits.json";
import generated from "./photos.generated.json";
import type { L } from "./types";

export type PhotoCategory = "senate" | "field" | "community" | "farmers" | "portraits" | "events";

export const PHOTO_CATEGORIES: PhotoCategory[] = [
  "senate",
  "field",
  "community",
  "farmers",
  "portraits",
  "events",
];

export type Photo = {
  id: string;
  category: PhotoCategory;
  /** "senator" = shows the Senator. "context" = an openly licensed photo of Bomet / Kenya / Parliament, honestly captioned. */
  kind: "senator" | "context";
  /** Shown in the gallery grid (false for duplicates) */
  gallery: boolean;
  /** What the campaign should supply to replace a context photo (see docs/SHOT-LIST.md) */
  slot: string;
  ratio: string; // CSS aspect-ratio, e.g. "3 / 2"
  alt: L;
  caption: L;
  date: string;
  location: string;
  /** Photographer + licence line, from data/photo-credits.json */
  credit: string;
  creditUrl: string;
  approvedForPress: boolean;
  featured?: boolean;
  /** Filled by `npm run images` */
  src?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
};

type Cred = { title: string; author: string; license: string; licenseUrl: string; pageUrl: string };
const cred = credits as Record<string, Cred>;
const creditLine = (id: string) => {
  const c = cred[id];
  return c ? `${c.author}, ${c.license}` : "";
};

const slots: Omit<Photo, "src" | "width" | "height" | "blurDataURL" | "credit" | "creditUrl">[] = [
  {
    id: "hero-main",
    category: "portraits",
    kind: "senator",
    gallery: false,
    slot: "HERO: senator addressing farmers, landscape 16:9, ≥2400px wide",
    ratio: "3 / 2",
    alt: {
      en: "Official portrait of Sen. Wakili Hillary Sigei",
      sw: "Picha rasmi ya Seneta Wakili Hillary Sigei",
    },
    caption: { en: "Senator for Bomet County.", sw: "Seneta wa Kaunti ya Bomet." },
    date: "",
    location: "",
    approvedForPress: false,
    featured: true,
  },
  {
    id: "portrait-formal",
    category: "portraits",
    kind: "senator",
    gallery: true,
    slot: "PORTRAIT: formal studio or office portrait, 4:5 portrait, ≥1600px tall",
    ratio: "4 / 5",
    alt: {
      en: "Official portrait of Sen. Wakili Hillary Sigei",
      sw: "Picha rasmi ya Seneta Wakili Hillary Sigei",
    },
    caption: { en: "Senator for Bomet County.", sw: "Seneta wa Kaunti ya Bomet." },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "portrait-casual",
    category: "field",
    kind: "context",
    gallery: true,
    slot: "PORTRAIT: relaxed outdoor portrait in Bomet, 4:5 portrait",
    ratio: "4 / 5",
    alt: {
      en: "A road winding through the green hills of Kaplong, Bomet County",
      sw: "Barabara inayopinda kwenye vilima vya kijani vya Kaplong, Kaunti ya Bomet",
    },
    caption: {
      en: "Bomet County: where the story begins.",
      sw: "Kaunti ya Bomet: hadithi inapoanzia.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "senate-floor",
    category: "senate",
    kind: "context",
    gallery: true,
    slot: "SENATE: senator speaking on the Senate floor, landscape 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Aerial view of the Parliament Buildings and Uhuru Park in Nairobi",
      sw: "Mwonekano wa angani wa Majengo ya Bunge na Uhuru Park, Nairobi",
    },
    caption: {
      en: "Parliament Buildings, Nairobi: where the Senate sits.",
      sw: "Majengo ya Bunge, Nairobi: Seneti inapokutana.",
    },
    date: "",
    location: "",
    approvedForPress: false,
    featured: true,
  },
  {
    id: "senate-committee",
    category: "senate",
    kind: "context",
    gallery: true,
    slot: "SENATE: chairing the Justice, Legal Affairs & Human Rights Committee, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "The entrance to the Parliament Buildings in Nairobi",
      sw: "Lango la Majengo ya Bunge, Nairobi",
    },
    caption: {
      en: "Committees meet here, in the Parliament Buildings.",
      sw: "Kamati hukutana hapa, katika Majengo ya Bunge.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "senate-bill",
    category: "senate",
    kind: "context",
    gallery: true,
    slot: "SENATE: moving the Tea (Amendment) Bill, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "The clock tower of the Parliament of Kenya seen from above",
      sw: "Mnara wa saa wa Bunge la Kenya ukionekana kutoka juu",
    },
    caption: { en: "The Parliament of Kenya clock tower.", sw: "Mnara wa saa wa Bunge la Kenya." },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "field-inspection",
    category: "field",
    kind: "context",
    gallery: true,
    slot: "FIELD: inspecting a county project on site, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Green tea fields framed by trees in Bomet County",
      sw: "Mashamba ya chai ya kijani yakizungukwa na miti, Kaunti ya Bomet",
    },
    caption: { en: "Bomet's tea country.", sw: "Nchi ya chai ya Bomet." },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "field-water",
    category: "field",
    kind: "context",
    gallery: true,
    slot: "FIELD: at a water point or water project, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "A spring tumbling down a rock face at Kaplong, Bomet County",
      sw: "Chemchemi ikimiminika kwenye mwamba Kaplong, Kaunti ya Bomet",
    },
    caption: {
      en: "Water from Bomet's hills: the basis of every water project.",
      sw: "Maji kutoka vilima vya Bomet: msingi wa kila mradi wa maji.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "field-school",
    category: "field",
    kind: "context",
    gallery: true,
    slot: "FIELD: visiting an ECDE centre with learners, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Pupils and their teacher in a Kenyan primary school classroom",
      sw: "Wanafunzi na mwalimu wao darasani katika shule ya msingi ya Kenya",
    },
    caption: {
      en: "Early learning: where every child's future begins.",
      sw: "Elimu ya awali: mwanzo wa mustakabali wa kila mtoto.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "community-elders",
    category: "community",
    kind: "context",
    gallery: true,
    slot: "COMMUNITY: with elders, 4:5 portrait",
    ratio: "4 / 5",
    alt: {
      en: "A cup of mursik, the traditional fermented milk of the Kalenjin people, being poured",
      sw: "Kikombe cha mursik, maziwa ya kitamaduni ya jamii ya Kalenjin, yakimiminwa",
    },
    caption: {
      en: "Mursik: a Kalenjin tradition shared with guests.",
      sw: "Mursik: mila ya Wakalenjin inayotolewa kwa wageni.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "community-youth",
    category: "community",
    kind: "context",
    gallery: true,
    slot: "COMMUNITY: with young people, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Students walking home together from school in Kenya",
      sw: "Wanafunzi wakitembea nyumbani pamoja kutoka shuleni, Kenya",
    },
    caption: { en: "Bomet's young people: the next chapter.", sw: "Vijana wa Bomet: sura ijayo." },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "community-women",
    category: "community",
    kind: "context",
    gallery: true,
    slot: "COMMUNITY: with women's groups, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "Four women standing together in a field of maize in Kenya",
      sw: "Wanawake wanne wamesimama pamoja katika shamba la mahindi, Kenya",
    },
    caption: {
      en: "Women who feed and lead their communities.",
      sw: "Wanawake wanaolisha na kuongoza jamii zao.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "farmers-tea",
    category: "farmers",
    kind: "context",
    gallery: true,
    slot: "FARMERS: among tea bushes with growers, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Tea pickers at work in a green tea field near Kericho, Kenya",
      sw: "Wavunaji wa chai wakifanya kazi shambani karibu na Kericho, Kenya",
    },
    caption: {
      en: "The hands behind every cup of Kenyan tea.",
      sw: "Mikono iliyo nyuma ya kila kikombe cha chai ya Kenya.",
    },
    date: "",
    location: "",
    approvedForPress: false,
    featured: true,
  },
  {
    id: "farmers-meeting",
    category: "farmers",
    kind: "context",
    gallery: true,
    slot: "FARMERS: public participation forum with growers, 16:9",
    ratio: "16 / 9",
    alt: {
      en: "Women farmers gathered around an agricultural extension officer in Kenya",
      sw: "Wakulima wanawake wakikusanyika karibu na afisa wa ugani wa kilimo, Kenya",
    },
    caption: {
      en: "Farmers learning together: growers deserve to be heard.",
      sw: "Wakulima wakijifunza pamoja: wakulima wanastahili kusikilizwa.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "farmers-pluckers",
    category: "farmers",
    kind: "context",
    gallery: true,
    slot: "FARMERS: with tea pluckers at a buying centre, 4:5 portrait",
    ratio: "4 / 5",
    alt: {
      en: "A tea farm in Bomet County with a cloud-streaked sky",
      sw: "Shamba la chai katika Kaunti ya Bomet chini ya anga lenye mawingu",
    },
    caption: { en: "A tea farm in Bomet.", sw: "Shamba la chai Bomet." },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "events-rally",
    category: "events",
    kind: "context",
    gallery: true,
    slot: "EVENTS: a public gathering in Bomet, 16:9",
    ratio: "16 / 9",
    alt: {
      en: "Voters queuing at a polling centre in Kenya",
      sw: "Wapiga kura wakipanga foleni katika kituo cha kupigia kura, Kenya",
    },
    caption: {
      en: "Election day: every voter counts.",
      sw: "Siku ya uchaguzi: kila mpiga kura ni muhimu.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "events-church",
    category: "events",
    kind: "context",
    gallery: true,
    slot: "EVENTS: community or church function, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "Cows grazing behind a wooden fence on a dairy farm in Bomet",
      sw: "Ng'ombe wakilisha nyuma ya ua wa mbao katika shamba la maziwa Bomet",
    },
    caption: {
      en: "Dairy farming: a livelihood across Bomet.",
      sw: "Ufugaji wa ng'ombe wa maziwa: riziki kote Bomet.",
    },
    date: "",
    location: "",
    approvedForPress: false,
  },
  {
    id: "events-launch",
    category: "events",
    kind: "context",
    gallery: true,
    slot: "EVENTS: project launch or handover, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "A rainbow arching over farmland in Bomet County",
      sw: "Upinde wa mvua juu ya mashamba katika Kaunti ya Bomet",
    },
    caption: { en: "A new season for Bomet.", sw: "Msimu mpya kwa Bomet." },
    date: "",
    location: "",
    approvedForPress: false,
  },
];

type Gen = { src: string; width: number; height: number; blurDataURL: string };
const gen = generated as Record<string, Gen>;

export const photos: Photo[] = slots.map((s) => ({
  ...s,
  credit: creditLine(s.id),
  creditUrl: cred[s.id]?.pageUrl ?? "",
  ...(gen[s.id] ?? {}),
}));

const byId = new Map(photos.map((p) => [p.id, p]));

export function getPhoto(id: string): Photo {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
}

export const hasRealPhoto = (p: Photo) => Boolean(p.src);
