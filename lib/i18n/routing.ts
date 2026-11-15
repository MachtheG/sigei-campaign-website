import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sw"],
  defaultLocale: "en",
  localePrefix: "always",
  // Remember the visitor's choice in a cookie (NEXT_LOCALE).
  localeCookie: { maxAge: 60 * 60 * 24 * 365, sameSite: "lax" },
});

export type AppLocale = (typeof routing.locales)[number];
