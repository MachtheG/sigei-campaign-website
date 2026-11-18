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

/** Per-page share card (1200×630) rendered by /api/og in the campaign palette. */
export function og(locale: string, title: string): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `/api/og?page=${encodeURIComponent(title)}&locale=${locale}`;
  return {
    openGraph: { title, images: [{ url, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, images: [url] },
  };
}
