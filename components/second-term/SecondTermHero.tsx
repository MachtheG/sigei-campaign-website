import { useTranslations } from "next-intl";

export function SecondTermHero() {
  const t = useTranslations("secondTerm.hero");
  return (
    <section className="bg-brand text-on-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
        <h1 className="t-display max-w-[14ch]">{t("title")}</h1>
        <p className="mt-5 max-w-[44ch] text-lg text-on-brand/85 sm:text-xl">{t("lead")}</p>
        <p className="mt-8 text-sm font-semibold text-accent" aria-hidden>
          ↓ {t("scroll")}
        </p>
      </div>
    </section>
  );
}
