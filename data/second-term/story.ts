/** Structure of the 5-chapter story. All words live in messages/<locale>/second-term.json. */
export type ChapterDef = {
  id: "mtoto" | "wakili" | "sauti" | "kazi" | "iendelee";
  photoId: string;
  /** Hard number shown with the chapter; null = show the text value only */
  value: number | null;
  suffix?: string;
  sourceIds: string[];
  confirm?: string;
};

export const chapters: ChapterDef[] = [
  { id: "mtoto", photoId: "portrait-casual", value: 10, sourceIds: ["parliament-profile"] },
  {
    id: "wakili",
    photoId: "portrait-formal",
    value: 13,
    sourceIds: ["parliament-profile"],
    confirm: "start year of practice",
  },
  {
    id: "sauti",
    photoId: "senate-floor",
    value: 2,
    suffix: "×",
    sourceIds: ["standard-chair-2022", "eastleigh-chair-2025"],
  },
  {
    id: "kazi",
    photoId: "farmers-tea",
    value: 600000,
    suffix: "+",
    sourceIds: [
      "nation-tea-bill",
      "parliament-tea-bill",
      "peopledaily-audit",
      "peopledaily-ecde-milk",
      "unverified-gbv-arrears",
    ],
    confirm: "growers figure against article text",
  },
  { id: "iendelee", photoId: "events-rally", value: null, sourceIds: ["iebc-date-notice"] },
];

/** "Why him": each reason is backed by a record stat or timeline event. */
export const reasons = [
  { id: "law", statId: "bar-years" },
  { id: "trust", statId: "chair-terms" },
  { id: "tea", statId: "bills-sponsored" },
  { id: "oversight", statId: "inspection" },
] as const;
