import type { Metadata } from "next";
import { routing } from "@/lib/i18n/routing";

/** Canonical + hreflang alternates for a locale-less path like "/record". */
export function alt(locale: string, path = ""): NonNullable<Metadata["alternates"]> {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`])),
      "x-default": `/en${path}`,
    },
  };
}
