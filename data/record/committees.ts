import type { L } from "../types";

export const committees: { id: string; name: L; role: L; from: string; sourceIds: string[] }[] = [
  {
    id: "jlahrc",
    name: {
      en: "Justice, Legal Affairs and Human Rights Committee",
      sw: "Kamati ya Haki, Masuala ya Kisheria na Haki za Binadamu",
    },
    role: {
      en: "Chairperson (elected Oct 2022, re-elected 2025)",
      sw: "Mwenyekiti (alichaguliwa Okt 2022, tena 2025)",
    },
    from: "2022-10",
    sourceIds: ["standard-chair-2022", "eastleigh-chair-2025"],
  },
];
