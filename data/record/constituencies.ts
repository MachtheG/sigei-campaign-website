import type { L } from "../types";

/** Bomet's five constituencies (sub-counties). Source: County Government of Bomet. */
export const constituencies: {
  id: string;
  name: L;
  /** Position on the stylised (non-geographic) map, 0–100 viewBox */
  x: number;
  y: number;
  sourceIds: string[];
}[] = [
  {
    id: "sotik",
    name: { en: "Sotik", sw: "Sotik" },
    x: 22,
    y: 62,
    sourceIds: ["bomet-county-about"],
  },
  {
    id: "chepalungu",
    name: { en: "Chepalungu", sw: "Chepalungu" },
    x: 40,
    y: 80,
    sourceIds: ["bomet-county-about"],
  },
  {
    id: "bomet-central",
    name: { en: "Bomet Central", sw: "Bomet Kati" },
    x: 55,
    y: 48,
    sourceIds: ["bomet-county-about"],
  },
  {
    id: "bomet-east",
    name: { en: "Bomet East", sw: "Bomet Mashariki" },
    x: 78,
    y: 62,
    sourceIds: ["bomet-county-about"],
  },
  {
    id: "konoin",
    name: { en: "Konoin", sw: "Konoin" },
    x: 48,
    y: 20,
    sourceIds: ["bomet-county-about"],
  },
];
