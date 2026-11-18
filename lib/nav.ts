/** The six header items (redesign IA). Gallery, Party, Elections, Contact, Privacy live in the footer. */
export const NAV = [
  { key: "story", href: "/about" },
  { key: "record", href: "/record" },
  { key: "kazi", href: "/kazi-iendelee" },
  { key: "bomet", href: "/bomet" },
  { key: "news", href: "/news" },
  { key: "getInvolved", href: "/get-involved" },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export const SOCIALS = {
  facebook: "https://www.facebook.com/wakilisigei.senator",
  x: "https://x.com/skhillary",
} as const;
