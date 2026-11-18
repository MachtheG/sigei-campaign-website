"use client";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { openMenu } from "./MobileNav";

/** Opens the full-screen menu (links, language, calendar, Donate, Lite mode). Visible at every width. */
export function MenuButton() {
  const t = useTranslations("common.nav");
  return (
    <button
      type="button"
      onClick={openMenu}
      className="press border-paper/40 text-paper inline-flex min-h-11 items-center gap-2 rounded border px-4 text-sm font-bold"
    >
      <Menu aria-hidden className="size-4" />
      {t("menu")}
    </button>
  );
}
