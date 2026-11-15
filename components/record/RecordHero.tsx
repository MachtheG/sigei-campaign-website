import { useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";

export function RecordHero() {
  const t = useTranslations("record.hero");
  return (
    <section className="border-accent bg-bg text-fg border-b-[6px]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-20 lg:px-8">
        <div>
          <h1 className="t-h1">{t("title")}</h1>
          <p className="text-muted mt-5 max-w-[48ch] text-lg sm:text-xl">{t("lead")}</p>
        </div>
        <SenatorImage
          id="senate-floor"
          sizes="(min-width: 768px) 40vw, 100vw"
          priority
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
