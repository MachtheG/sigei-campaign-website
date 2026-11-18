import type { MetadataRoute } from "next";
import { constituencies } from "@/data/record/constituencies";
import { timeline } from "@/data/record/timeline";
import { routing } from "@/lib/i18n/routing";
import { SITE_URL } from "@/lib/utils";

const PATHS = [
  "",
  "/record",
  "/kazi-iendelee",
  "/gallery",
  "/news",
  "/story",
  "/party",
  "/elections",
  "/get-involved",
  "/contact",
  "/privacy",
  "/bomet",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [
    ...PATHS,
    ...timeline.map((e) => `/record/${e.slug}`),
    ...constituencies.map((c) => `/bomet/${c.id}`),
  ];
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
