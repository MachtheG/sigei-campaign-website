import type { L } from "../types";

export type BillStage = {
  id: "published" | "senate" | "assembly" | "assent";
  label: L;
  date?: string;
  state: "done" | "current" | "pending";
};

export type Bill = {
  id: string;
  name: L;
  ref: string;
  summary: L;
  pillar: "tea";
  stages: BillStage[];
  sourceIds: string[];
};

export const bills: Bill[] = [
  {
    id: "tea-amendment-2023",
    name: { en: "The Tea (Amendment) Bill, 2023", sw: "Mswada wa Marekebisho ya Chai, 2023" },
    ref: "Senate Bills No. 1 of 2023",
    summary: {
      en: "Protects growers' proceeds, allows direct sales, and exempts value-added tea from the levy.",
      sw: "Unalinda mapato ya wakulima, unaruhusu mauzo ya moja kwa moja, na unasamehe chai iliyoongezwa thamani kutoka kwa ushuru.",
    },
    pillar: "tea",
    stages: [
      {
        id: "published",
        label: { en: "Published", sw: "Ulichapishwa" },
        date: "2023",
        state: "done",
      },
      {
        id: "senate",
        label: { en: "Passed by the Senate", sw: "Uliidhinishwa na Seneti" },
        date: "2024-10-08",
        state: "done",
      },
      {
        id: "assembly",
        label: { en: "National Assembly", sw: "Bunge la Kitaifa" },
        state: "current",
      },
      {
        id: "assent",
        label: { en: "Presidential assent", sw: "Idhini ya Rais" },
        state: "pending",
      },
    ],
    sourceIds: ["parliament-tea-bill", "mzalendo-tea-bill"],
  },
];
