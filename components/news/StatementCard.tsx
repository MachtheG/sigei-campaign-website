import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { statements } from "@/data/news";
import { pick } from "@/data/types";
import { formatDate } from "@/lib/format";

export function StatementCard() {
  const t = useTranslations("news.statements");
  const locale = useLocale();
  return (
    <section aria-labelledby="news-statements" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading id="news-statements" title={t("title")} lead={t("lead")} />
        {statements.length === 0 ? (
          <p className="border-line mt-8 rounded-2xl border-2 border-dashed p-6 font-semibold">
            {t("empty")}
          </p>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {statements.map((s) => (
              <article key={s.id} className="bg-bg rounded-3xl p-6">
                <time className="text-muted text-sm">{formatDate(s.date, locale)}</time>
                <h3 className="mt-1 text-xl font-bold">{pick(s.title, locale)}</h3>
                <p className="mt-2">{pick(s.body, locale)}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
