import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./LanguageToggle";
import { MenuButton } from "./MenuButton";
import { NavLinks } from "./NavLinks";

/** Lean header: wordmark · six links · 10.08.2027 (.ics) · EN/SW · Donate · Menu. */
export function Header() {
  const t = useTranslations("common");
  return (
    <header className="bg-ink text-paper border-paper/12 sticky top-0 z-30 border-b">
      <div className="scroll-progress bg-uda absolute inset-x-0 bottom-0 h-0.5" aria-hidden />
      <div className="shell flex min-h-16 items-center gap-3 lg:min-h-20">
        <Link
          href="/"
          className="press mr-auto flex min-h-11 flex-col justify-center leading-tight"
        >
          <span className="font-display text-2xl">{t("site.short")}</span>
          <span className="text-[0.6875rem] tracking-[0.12em] uppercase opacity-75">
            {t("site.roleShort")}
          </span>
        </Link>
        <nav aria-label={t("a11y.mainNav")} className="hidden xl:block">
          <NavLinks className="flex items-center gap-3" />
        </nav>
        <a
          href="/api/election.ics"
          download
          aria-label={t("navNew.calendar")}
          className="hidden min-h-11 items-center px-1 text-sm font-semibold tabular-nums underline underline-offset-4 md:inline-flex"
        >
          10.08.2027
        </a>
        <span className="hidden sm:block">
          <LanguageToggle tone="light" />
        </span>
        <Link
          href="/get-involved#donate"
          className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
        >
          {t("footer.donate")}
        </Link>
        <MenuButton />
      </div>
    </header>
  );
}
