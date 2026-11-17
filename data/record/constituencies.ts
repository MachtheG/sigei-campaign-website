import type { L } from "../types";

/** Bomet's five constituencies (sub-counties). Sources: County Government of Bomet; IEBC 2022 register. */
export const constituencies: {
  id: string;
  name: L;
  /** Position on the stylised (non-geographic) map, 0–100 viewBox */
  x: number;
  y: number;
  /** Registered voters, 2022 General Election register (IEBC). */
  voters2022: number;
  sourceIds: string[];
}[] = [
  {
    id: "sotik",
    name: { en: "Sotik", sw: "Sotik" },
    x: 22,
    y: 62,
    voters2022: 86681,
    sourceIds: ["bomet-county-about", "iebc-voters-2022"],
  },
  {
    id: "chepalungu",
    name: { en: "Chepalungu", sw: "Chepalungu" },
    x: 40,
    y: 80,
    voters2022: 80140,
    sourceIds: ["bomet-county-about", "iebc-voters-2022"],
  },
  {
    id: "bomet-central",
    name: { en: "Bomet Central", sw: "Bomet Kati" },
    x: 55,
    y: 48,
    voters2022: 71409,
    sourceIds: ["bomet-county-about", "iebc-voters-2022"],
  },
  {
    id: "bomet-east",
    name: { en: "Bomet East", sw: "Bomet Mashariki" },
    x: 78,
    y: 62,
    voters2022: 63640,
    sourceIds: ["bomet-county-about", "iebc-voters-2022"],
  },
  {
    id: "konoin",
    name: { en: "Konoin", sw: "Konoin" },
    x: 48,
    y: 20,
    voters2022: 75115,
    sourceIds: ["bomet-county-about", "iebc-voters-2022"],
  },
];
