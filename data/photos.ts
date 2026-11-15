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
  /** True if the file lives in public/images/senator/hero/ */
  hero?: boolean;
  /** Placeholder label + shot brief (campaign-facing, shown only on placeholders) */
  slot: string;
  ratio: string; // CSS aspect-ratio, e.g. "3 / 2"
  alt: L;
  caption: L;
  date: string;
  location: string;
  credit: string;
  approvedForPress: boolean;
  featured?: boolean;
  /** Filled by `npm run images` */
  src?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
};

const TBC = ""; // date/location/credit to be supplied with the real photo

const slots: Omit<Photo, "src" | "width" | "height" | "blurDataURL">[] = [
  {
    id: "hero-main",
    category: "portraits",
    hero: true,
    slot: "HERO: senator addressing farmers, landscape 16:9, ≥2400px wide",
    ratio: "3 / 2",
    alt: {
      en: "Sen. Wakili Hillary Sigei addressing farmers in Bomet",
      sw: "Seneta Wakili Hillary Sigei akihutubia wakulima Bomet",
    },
    caption: {
      en: "Listening first, then acting for Bomet.",
      sw: "Kusikiliza kwanza, kisha kutenda kwa ajili ya Bomet.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
    featured: true,
  },
  {
    id: "portrait-formal",
    category: "portraits",
    slot: "PORTRAIT: formal studio or office portrait, 4:5 portrait, ≥1600px tall",
    ratio: "4 / 5",
    alt: {
      en: "Formal portrait of Sen. Wakili Hillary Sigei",
      sw: "Picha rasmi ya Seneta Wakili Hillary Sigei",
    },
    caption: { en: "Senator for Bomet County.", sw: "Seneta wa Kaunti ya Bomet." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "portrait-casual",
    category: "portraits",
    slot: "PORTRAIT: relaxed outdoor portrait in Bomet, 4:5 portrait",
    ratio: "4 / 5",
    alt: { en: "Sen. Sigei smiling outdoors in Bomet", sw: "Seneta Sigei akitabasamu nje Bomet" },
    caption: { en: "At home in Bomet.", sw: "Nyumbani Bomet." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "senate-floor",
    category: "senate",
    slot: "SENATE: senator speaking on the Senate floor, landscape 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Sen. Sigei speaking on the floor of the Senate",
      sw: "Seneta Sigei akizungumza bungeni la Seneti",
    },
    caption: {
      en: "Raising Bomet's issues on the Senate floor.",
      sw: "Kuwasilisha masuala ya Bomet bungeni la Seneti.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
    featured: true,
  },
  {
    id: "senate-committee",
    category: "senate",
    slot: "SENATE: chairing the Justice, Legal Affairs & Human Rights Committee, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Sen. Sigei chairing a Senate committee sitting",
      sw: "Seneta Sigei akiongoza kikao cha kamati ya Seneti",
    },
    caption: {
      en: "Chairing the Justice, Legal Affairs and Human Rights Committee.",
      sw: "Akiongoza Kamati ya Haki, Masuala ya Kisheria na Haki za Binadamu.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "senate-bill",
    category: "senate",
    slot: "SENATE: moving the Tea (Amendment) Bill, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "Sen. Sigei presenting the Tea (Amendment) Bill",
      sw: "Seneta Sigei akiwasilisha Mswada wa Marekebisho ya Chai",
    },
    caption: {
      en: "Moving the Tea (Amendment) Bill.",
      sw: "Akiwasilisha Mswada wa Marekebisho ya Chai.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "field-inspection",
    category: "field",
    slot: "FIELD: inspecting a county project on site, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Sen. Sigei at a project site in Bomet",
      sw: "Seneta Sigei kwenye eneo la mradi Bomet",
    },
    caption: {
      en: "On site: oversight starts with seeing for yourself.",
      sw: "Eneo la mradi: usimamizi huanza kwa kujionea mwenyewe.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "field-water",
    category: "field",
    slot: "FIELD: at a water point or water project, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "Sen. Sigei at a water project in Bomet",
      sw: "Seneta Sigei kwenye mradi wa maji Bomet",
    },
    caption: {
      en: "Water and services for homes across Bomet.",
      sw: "Maji na huduma kwa kaya kote Bomet.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "field-school",
    category: "field",
    slot: "FIELD: visiting an ECDE centre with learners, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Sen. Sigei visiting an early learning centre",
      sw: "Seneta Sigei akitembelea kituo cha elimu ya awali",
    },
    caption: {
      en: "Early learning: where every child's future begins.",
      sw: "Elimu ya awali: mwanzo wa mustakabali wa kila mtoto.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "community-elders",
    category: "community",
    slot: "COMMUNITY: with elders, 4:5 portrait",
    ratio: "4 / 5",
    alt: { en: "Sen. Sigei with elders in Bomet", sw: "Seneta Sigei akiwa na wazee Bomet" },
    caption: { en: "Learning from Bomet's elders.", sw: "Kujifunza kutoka kwa wazee wa Bomet." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "community-youth",
    category: "community",
    slot: "COMMUNITY: with young people, 3:2",
    ratio: "3 / 2",
    alt: { en: "Sen. Sigei with youth in Bomet", sw: "Seneta Sigei akiwa na vijana Bomet" },
    caption: { en: "Bomet's young people: the next chapter.", sw: "Vijana wa Bomet: sura ijayo." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "community-women",
    category: "community",
    slot: "COMMUNITY: with women's groups, 4:3",
    ratio: "4 / 3",
    alt: {
      en: "Sen. Sigei meeting women's groups",
      sw: "Seneta Sigei akikutana na vikundi vya wanawake",
    },
    caption: {
      en: "Meeting women's groups across the county.",
      sw: "Kukutana na vikundi vya wanawake kote kaunti.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "farmers-tea",
    category: "farmers",
    slot: "FARMERS: among tea bushes with growers, 3:2",
    ratio: "3 / 2",
    alt: {
      en: "Sen. Sigei among tea bushes with growers",
      sw: "Seneta Sigei miongoni mwa mashamba ya chai na wakulima",
    },
    caption: { en: "With small-scale tea growers.", sw: "Pamoja na wakulima wadogo wa chai." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
    featured: true,
  },
  {
    id: "farmers-meeting",
    category: "farmers",
    slot: "FARMERS: public participation forum with growers, 16:9",
    ratio: "16 / 9",
    alt: {
      en: "Sen. Sigei at a forum with tea farmers",
      sw: "Seneta Sigei kwenye kongamano na wakulima wa chai",
    },
    caption: { en: "Hearing growers directly.", sw: "Kuwasikiliza wakulima moja kwa moja." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "farmers-pluckers",
    category: "farmers",
    slot: "FARMERS: with tea pluckers at a buying centre, 4:5 portrait",
    ratio: "4 / 5",
    alt: { en: "Sen. Sigei with tea pluckers", sw: "Seneta Sigei na wavunaji wa chai" },
    caption: { en: "Every kilo counts.", sw: "Kila kilo ni muhimu." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "events-rally",
    category: "events",
    slot: "EVENTS: a public gathering in Bomet, 16:9",
    ratio: "16 / 9",
    alt: {
      en: "Sen. Sigei at a public gathering in Bomet",
      sw: "Seneta Sigei kwenye mkutano wa hadhara Bomet",
    },
    caption: { en: "Together with the people of Bomet.", sw: "Pamoja na wananchi wa Bomet." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "events-church",
    category: "events",
    slot: "EVENTS: community or church function, 4:3",
    ratio: "4 / 3",
    alt: { en: "Sen. Sigei at a community function", sw: "Seneta Sigei kwenye hafla ya jamii" },
    caption: { en: "Standing with Bomet families.", sw: "Kusimama na familia za Bomet." },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
  {
    id: "events-launch",
    category: "events",
    slot: "EVENTS: project launch or handover, 3:2",
    ratio: "3 / 2",
    alt: { en: "Sen. Sigei at a project launch", sw: "Seneta Sigei kwenye uzinduzi wa mradi" },
    caption: {
      en: "Marking progress with the community.",
      sw: "Kuadhimisha maendeleo pamoja na jamii.",
    },
    date: TBC,
    location: TBC,
    credit: TBC,
    approvedForPress: false,
  },
];

type Gen = { src: string; width: number; height: number; blurDataURL: string };
const gen = generated as Record<string, Gen>;

export const photos: Photo[] = slots.map((s) => ({ ...s, ...(gen[s.id] ?? {}) }));

const byId = new Map(photos.map((p) => [p.id, p]));

export function getPhoto(id: string): Photo {
  const p = byId.get(id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
}

export const hasRealPhoto = (p: Photo) => Boolean(p.src);
