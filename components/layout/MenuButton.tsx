"use client";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { openMenu } from "./MobileNav";

/** Header menu button for tablet widths (phones use the bottom bar). */
export function MenuButton() {
  const t = useTranslations("common.nav");
  return (
    <button
      type="button"
      onClick={openMenu}
      className="press border-fg/15 hidden min-h-11 items-center gap-2 rounded-full border-2 px-4 text-sm font-bold md:inline-flex xl:hidden"
    >
      <Menu aria-hidden className="size-4" />
      {t("menu")}
    </button>
  );
}
