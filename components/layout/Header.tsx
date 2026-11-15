import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { CountdownPill } from "./CountdownPill";
import { LanguageToggle } from "./LanguageToggle";
import { MenuButton } from "./MenuButton";
import { NavLinks } from "./NavLinks";

export function Header() {
  const t = useTranslations("common");
  return (
    <header className="border-line bg-bg sticky top-0 z-30 border-b">
      <div className="scroll-progress bg-accent absolute inset-x-0 bottom-0 h-0.5" aria-hidden />
      <div className="mx-auto flex max-w-[96rem] items-center gap-2 px-3 py-1.5 sm:gap-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="press font-display text-deep dark:text-fg mr-auto flex min-h-11 items-center gap-2 text-lg leading-none font-extrabold"
        >
          <span
            aria-hidden
            className="bg-brand text-accent grid size-9 place-items-center rounded-full text-sm"
          >
            S
          </span>
          <span className="hidden min-[400px]:block">
            {t("site.short")}
            <span className="text-muted block text-[0.62rem] font-medium tracking-wide whitespace-nowrap">
              {t("site.role")}
            </span>
          </span>
        </Link>
        <nav aria-label={t("a11y.mainNav")} className="mx-2 hidden min-[1360px]:block">
          <NavLinks className="flex items-center gap-0.5" />
        </nav>
        <CountdownPill />
        <LanguageToggle />
        <MenuButton />
      </div>
    </header>
  );
}
