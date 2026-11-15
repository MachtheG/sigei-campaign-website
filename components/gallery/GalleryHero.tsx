import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";

export function GalleryHero() {
  const t = useTranslations("gallery.hero");
  return (
    <section className="border-accent bg-bg border-b-[6px]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-20 lg:px-8">
        <div>
          <h1 className="t-h1">{t("title")}</h1>
          <p className="t-lead mt-4 max-w-[50ch]">{t("lead")}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SenatorImage
            id="portrait-formal"
            sizes="(min-width: 768px) 20vw, 45vw"
            priority
            className="rounded-3xl"
            compact
          />
          <SenatorImage
            id="farmers-tea"
            sizes="(min-width: 768px) 20vw, 45vw"
            ratio="4 / 5"
            className="mt-8 rounded-3xl"
            compact
          />
        </div>
      </div>
    </section>
  );
}
