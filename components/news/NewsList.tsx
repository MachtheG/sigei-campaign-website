import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { news } from "@/data/news";
import { NewsCard } from "./NewsCard";

export function NewsList() {
  const t = useTranslations("news.list");
  return (
    <section
      aria-labelledby="news-list"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8"
    >
      <SectionHeading id="news-list" title={t("title")} />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {news.map((n, i) => (
          <Reveal key={n.id} delay={(i % 2) * 0.05}>
            <NewsCard item={n} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
