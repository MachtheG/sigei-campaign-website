import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

/** messages/<locale>/<file>.json → namespace key */
export const NAMESPACES = {
  common: "common",
  home: "home",
  record: "record",
  "kazi-iendelee": "kazi",
  gallery: "gallery",
  news: "news",
  story: "story",
  party: "party",
  elections: "elections",
  "get-involved": "getInvolved",
  contact: "contact",
  privacy: "privacy",
  bomet: "bomet",
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const entries = await Promise.all(
    Object.entries(NAMESPACES).map(async ([file, ns]) => [
      ns,
      (await import(`../../messages/${locale}/${file}.json`)).default,
    ]),
  );
  return { locale, messages: Object.fromEntries(entries), timeZone: "Africa/Nairobi" };
});
