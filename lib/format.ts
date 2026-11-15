import type { Locale } from "@/data/types";

const tag = (l: string) => (l === "sw" ? "sw-KE" : "en-KE");

export function formatNumber(n: number, locale: string, decimals = 0) {
  return new Intl.NumberFormat(tag(locale), {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

export function formatDate(
  iso: string,
  locale: string,
  precision: "day" | "month" | "year" = "day",
) {
  if (!iso) return "";
  const d = new Date(iso.length === 4 ? `${iso}-01-01` : iso.length === 7 ? `${iso}-01` : iso);
  const opts: Intl.DateTimeFormatOptions =
    precision === "year"
      ? { year: "numeric" }
      : precision === "month"
        ? { year: "numeric", month: "long" }
        : { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat(tag(locale), { ...opts, timeZone: "UTC" }).format(d);
}

export function yearsSince(iso: string, now = Date.now()) {
  return (now - new Date(iso).getTime()) / (365.25 * 86400 * 1000);
}

export type { Locale };
