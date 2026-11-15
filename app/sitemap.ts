import type { MetadataRoute } from "next";
import { timeline } from "@/data/record/timeline";
import { routing } from "@/lib/i18n/routing";
import { SITE_URL } from "@/lib/utils";

const PATHS = [
  "",
  "/record",
  "/second-term",
  "/gallery",
  "/news",
  "/about",
  "/party",
  "/elections",
  "/get-involved",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...PATHS, ...timeline.map((e) => `/record/${e.slug}`)];
  return all.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
