import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { CountdownPill } from "./CountdownPill";
import { LanguageToggle } from "./LanguageToggle";
import { MenuButton } from "./MenuButton";
import { NavLinks } from "./NavLinks";

export function Header() {
  const t = useTranslations("common");
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-accent" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-1.5 sm:gap-3 sm:px-6 lg:px-8">
        <Link href="/" className="press mr-auto flex min-h-11 items-center gap-2 font-display text-lg leading-none font-extrabold text-brand dark:text-fg">
          <span aria-hidden className="grid size-9 place-items-center rounded-full bg-brand text-sm text-accent">S</span>
          <span className="hidden min-[400px]:block">
            {t("site.short")}
            <span className="block text-[0.62rem] font-medium tracking-wide whitespace-nowrap text-muted">{t("site.role")}</span>
          </span>
        </Link>
        <nav aria-label={t("a11y.mainNav")} className="mx-2 hidden xl:block">
          <NavLinks className="flex items-center gap-0.5" />
        </nav>
        <CountdownPill />
        <LanguageToggle />
        <MenuButton />
      </div>
    </header>
  );
}
