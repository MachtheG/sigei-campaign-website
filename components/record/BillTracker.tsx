import { useLocale, useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { bills } from "@/data/record/bills";
import { pick } from "@/data/types";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export function BillTracker() {
  const t = useTranslations("record.bills");
  const locale = useLocale();
  return (
    <section
      aria-labelledby="rec-bills"
      className="cv mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <SectionHeading id="rec-bills" title={t("title")} lead={t("lead")} />
      <div className="mt-10 space-y-6">
        {bills.map((b) => (
          <article key={b.id} data-pillars={b.pillar} className="bg-surface rounded-3xl p-6 sm:p-8">
            <h3 className="font-sans text-2xl font-bold tracking-normal">{pick(b.name, locale)}</h3>
            <p className="text-muted mt-1 text-sm font-semibold">{b.ref}</p>
            <p className="mt-3 max-w-[60ch]">{pick(b.summary, locale)}</p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-4">
              {b.stages.map((s, i) => (
                <li
                  key={s.id}
                  aria-current={s.state === "current" ? "step" : undefined}
                  className="relative"
                >
                  <div className="flex items-center gap-3 sm:block">
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold",
                        s.state === "done" &&
                          "bg-deep text-on-brand dark:bg-accent dark:text-on-accent",
                        s.state === "current" && "bg-accent text-on-accent ring-accent/30 ring-4",
                        s.state === "pending" && "border-line text-muted border-2 border-dashed",
                      )}
                    >
                      {s.state === "done" ? "✓" : i + 1}
                    </span>
                    <div className="sm:mt-3">
                      <p className="font-semibold">{pick(s.label, locale)}</p>
                      <p className="text-muted text-sm">
                        {s.date
                          ? formatDate(s.date, locale, s.date.length === 7 ? "month" : "day")
                          : s.state === "current"
                            ? t("current")
                            : t("pending")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="bg-bg mt-6 rounded-xl p-4 text-sm font-semibold">{t("notLaw")}</p>
            <SourceBadge ids={b.sourceIds} className="mt-2 -ml-3" />
          </article>
        ))}
        <p
          data-only-pillar="oversight"
          className="border-line rounded-2xl border-2 border-dashed p-5 font-semibold"
        >
          {t("empty")}
        </p>
        {(["justice", "education", "water", "devolution"] as const).map((p) => (
          <p
            key={p}
            data-only-pillar={p}
            className="border-line rounded-2xl border-2 border-dashed p-5 font-semibold"
          >
            {t("empty")}
          </p>
        ))}
      </div>
    </section>
  );
}
