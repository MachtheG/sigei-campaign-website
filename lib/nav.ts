export const NAV = [
  { key: "home", href: "/" },
  { key: "record", href: "/record" },
  { key: "secondTerm", href: "/kazi-iendelee" },
  { key: "gallery", href: "/gallery" },
  { key: "news", href: "/news" },
  { key: "about", href: "/about" },
  { key: "party", href: "/party" },
  { key: "elections", href: "/elections" },
  { key: "getInvolved", href: "/get-involved" },
  { key: "contact", href: "/contact" },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export const SOCIALS = {
  facebook: "https://www.facebook.com/wakilisigei.senator",
  x: "https://x.com/skhillary",
} as const;
