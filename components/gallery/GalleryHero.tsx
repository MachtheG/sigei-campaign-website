import { useTranslations } from "next-intl";

export function GalleryHero() {
  const t = useTranslations("gallery.hero");
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <h1 className="t-h1">{t("title")}</h1>
        <p className="t-lead mt-4 max-w-[50ch]">{t("lead")}</p>
      </div>
    </section>
  );
}
