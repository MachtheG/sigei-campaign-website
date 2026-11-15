import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";

export function ContactHero() {
  const t = useTranslations("contact.hero");
  return (
    <section className="border-accent bg-bg text-fg border-b-[6px]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div>
          <h1 className="t-h1">{t("title")}</h1>
          <p className="text-muted mt-4 max-w-[44ch] text-lg">{t("lead")}</p>
        </div>
        <SenatorImage
          id="portrait-formal"
          sizes="(min-width: 768px) 40vw, 100vw"
          priority
          className="rounded-3xl md:max-h-[26rem] md:w-full"
          ratio="3 / 2"
        />
      </div>
    </section>
  );
}
