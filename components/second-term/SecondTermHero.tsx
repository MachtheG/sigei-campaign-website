import { useTranslations } from "next-intl";

export function SecondTermHero() {
  const t = useTranslations("secondTerm.hero");
  return (
    <section className="border-accent bg-bg text-fg border-b-[6px]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
        <h1 className="t-display max-w-[14ch]">{t("title")}</h1>
        <p className="text-muted mt-5 max-w-[44ch] text-lg sm:text-xl">{t("lead")}</p>
        <p className="text-accent mt-8 text-sm font-semibold" aria-hidden>
          ↓ {t("scroll")}
        </p>
      </div>
    </section>
  );
}
