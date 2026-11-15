import Image from "next/image";
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
          className="press font-display text-brand mr-auto flex min-h-11 items-center gap-2 text-lg leading-none font-extrabold"
        >
          <Image
            src="/images/bomet/coat-of-arms.png"
            alt={t("site.coatOfArms")}
            width={44}
            height={44}
            priority
            className="size-10 shrink-0 object-contain"
          />
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
