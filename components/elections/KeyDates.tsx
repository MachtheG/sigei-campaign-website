import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { KEY_DATES } from "@/data/election";
import { formatDate } from "@/lib/format";

export function KeyDates() {
  const t = useTranslations("elections.dates");
  const locale = useLocale();
  return (
    <section
      aria-labelledby="el-dates"
      className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <SectionHeading id="el-dates" title={t("title")} />
      <ol className="mt-8 space-y-3">
        {KEY_DATES.map((d) => (
          <li
            key={d.id}
            className="bg-surface flex flex-col gap-1 rounded-3xl p-5 sm:flex-row sm:items-center sm:gap-6"
          >
            <time
              dateTime={d.iso}
              className="font-display text-deep dark:text-accent text-2xl font-extrabold sm:w-72"
            >
              {formatDate(d.iso, locale)}
            </time>
            <p className="flex-1 font-semibold">{t(d.id)}</p>
            <SourceBadge ids={d.sourceIds} />
          </li>
        ))}
      </ol>
    </section>
  );
}
