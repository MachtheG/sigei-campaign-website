import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";

export function NewsHero() {
  const t = useTranslations("news.hero");
  return (
    <section className="bg-brand text-on-brand">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div>
          <h1 className="t-h1">{t("title")}</h1>
          <p className="text-on-brand/85 mt-4 max-w-[46ch] text-lg">{t("lead")}</p>
        </div>
        <SenatorImage
          id="events-launch"
          sizes="(min-width: 768px) 45vw, 100vw"
          priority
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
