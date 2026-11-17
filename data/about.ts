import type { L } from "./types";

export type Milestone = {
  id: string;
  year: string;
  title: L;
  body: L;
  photoId: string;
  sourceIds: string[];
};

export const journey: Milestone[] = [
  {
    id: "ndamichonik",
    year: "1995",
    title: { en: "Ndamichonik Primary School", sw: "Shule ya Msingi ya Ndamichonik" },
    body: {
      en: "Sat his KCPE in 1995, a Bomet child starting out.",
      sw: "Alifanya KCPE mwaka 1995, mtoto wa Bomet anayeanza safari.",
    },
    photoId: "community-youth",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "tenwek",
    year: "1999",
    title: { en: "Tenwek High School", sw: "Shule ya Upili ya Tenwek" },
    body: { en: "Completed KCSE in 1999.", sw: "Alihitimu KCSE mwaka 1999." },
    photoId: "kaplong-hills",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "uon-llb",
    year: "2001–2005",
    title: { en: "LLB, University of Nairobi", sw: "LLB, Chuo Kikuu cha Nairobi" },
    body: {
      en: "Studied law at the University of Nairobi.",
      sw: "Alisomea sheria katika Chuo Kikuu cha Nairobi.",
    },
    photoId: "portrait-formal",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "ksl",
    year: "2006",
    title: { en: "Kenya School of Law", sw: "Shule ya Sheria ya Kenya" },
    body: { en: "Advocates' professional training.", sw: "Mafunzo ya kitaaluma ya mawakili." },
    photoId: "portrait-formal",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "practice",
    year: "2009–2013",
    title: {
      en: "Katwa & Kemboy Advocates; Sigei & Associates",
      sw: "Katwa & Kemboy Advocates; Sigei & Associates",
    },
    body: {
      en: "Built his practice, first as an associate, then under his own name.",
      sw: "Alijenga taaluma yake, kwanza kama mshirika, kisha kwa jina lake mwenyewe.",
    },
    photoId: "senate-committee",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "llm",
    year: "2012–2014",
    title: { en: "LLM, University of Nairobi", sw: "LLM, Chuo Kikuu cha Nairobi" },
    body: {
      en: "Master of Laws while practising.",
      sw: "Shahada ya Uzamili ya Sheria akiwa anatekeleza sheria.",
    },
    photoId: "kaplong-hills",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "sms",
    year: "2013",
    title: { en: "Managing Partner, SMS Advocates LLP", sw: "Mshirika Mkuu, SMS Advocates LLP" },
    body: { en: "Leads the firm to this day.", sw: "Anaongoza kampuni hadi leo." },
    photoId: "portrait-formal",
    sourceIds: ["parliament-profile"],
  },
  {
    id: "senator",
    year: "2022",
    title: { en: "Senator for Bomet", sw: "Seneta wa Bomet" },
    body: {
      en: "Elected on the UDA ticket; chairs the Senate Justice Committee.",
      sw: "Alichaguliwa kupitia tiketi ya UDA; anaongoza Kamati ya Haki ya Seneti.",
    },
    photoId: "senate-floor",
    sourceIds: ["parliament-profile", "standard-chair-2022"],
  },
];
