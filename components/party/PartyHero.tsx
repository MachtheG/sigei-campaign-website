import { useTranslations } from "next-intl";

export function PartyHero() {
  const t = useTranslations("party.hero");
  return (
    <section className="bg-brand text-on-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
        <h1 className="t-h1 max-w-[16ch]">{t("title")}</h1>
        <p className="text-on-brand/85 mt-4 max-w-[52ch] text-lg">{t("lead")}</p>
      </div>
    </section>
  );
}
