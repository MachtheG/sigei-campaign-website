import { useLocale, useTranslations } from "next-intl";
import { constituencies } from "@/data/record/constituencies";
import { sources } from "@/data/sources";
import { pick } from "@/data/types";
import { formatNumber } from "@/lib/format";

/** Name, 2022 register size and share of the county, with the IEBC source visible. */
export function ConstituencyHero({ id }: { id: string }) {
  const t = useTranslations("bomet.place");
  const locale = useLocale();
  const ranked = [...constituencies].sort((a, b) => b.voters2022 - a.voters2022);
  const index = ranked.findIndex((c) => c.id === id);
  const c = ranked[index];
  const total = ranked.reduce((n, x) => n + x.voters2022, 0);
  const share = new Intl.NumberFormat(locale === "sw" ? "sw-KE" : "en-KE", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(c.voters2022 / total);
  const name = pick(c.name, locale);
  const src = sources["iebc-voters-2022"];
  return (
    <section aria-labelledby="page-title" className="bg-paper border-line border-b">
      <div className="shell flex flex-col gap-4 py-14 md:py-20">
        <p className="t-eyebrow text-ember-text">{t("eyebrow", { n: index + 1 })}</p>
        <h1 id="page-title" className="t-display">
          {t("title", { name })}
        </h1>
        <p className="t-lead text-muted max-w-[52ch]">
          {t("lead", {
            name,
            voters: formatNumber(c.voters2022, locale),
            share,
            total: formatNumber(total, locale),
          })}
        </p>
        <p className="t-figure text-forest text-6xl sm:text-7xl">
          {formatNumber(c.voters2022, locale)}
        </p>
        <a
          href={src.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
        >
          {t("source")} ↗
        </a>
      </div>
    </section>
  );
}
