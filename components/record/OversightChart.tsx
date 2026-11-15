"use client";
import { useLocale, useTranslations } from "next-intl";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { oversightByYear } from "@/data/record/oversight";
import { PILLARS } from "@/data/types";
import { PILLAR_COLORS } from "@/lib/pillars";
import { usePillar } from "./PillarScope";

const rows = oversightByYear();

/** Documented actions per year, stacked by pillar. The selected pillar is highlighted; others fade. */
export function OversightChart() {
  const t = useTranslations("record");
  const locale = useLocale();
  const { pillar } = usePillar();
  void locale;

  return (
    <section aria-labelledby="rec-oversight" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading id="rec-oversight" title={t("oversight.title")} lead={t("oversight.lead")} />
        <div className="mt-8 h-72 w-full sm:h-96" role="img" aria-label={t("oversight.chartLabel")}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rows} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="var(--line)" />
              <XAxis dataKey="year" tick={{ fill: "var(--muted)", fontSize: 13 }} axisLine={false} tickLine={false} />
              <YAxis allowDecimals={false} tick={{ fill: "var(--muted)", fontSize: 13 }} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: "rgba(128,128,128,0.12)" }}
                contentStyle={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12, color: "var(--fg)" }}
                formatter={(v, name) => [`${v} ${t("oversight.actions")}`, t(`pillars.${name as string}`)]}
              />
              {PILLARS.map((p) => (
                <Bar
                  key={p}
                  dataKey={p}
                  stackId="a"
                  fill={PILLAR_COLORS[p]}
                  fillOpacity={pillar === "all" || pillar === p ? 1 : 0.15}
                  isAnimationActive={false}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {PILLARS.map((p) => (
            <li key={p} className="inline-flex items-center gap-2">
              <span aria-hidden className="size-3 rounded-sm" style={{ background: PILLAR_COLORS[p] }} />
              {t(`pillars.${p}`)}
            </li>
          ))}
        </ul>
        <div className="sr-only">
        <table>
          <caption>{t("oversight.title")}</caption>
          <thead>
            <tr>
              <th>#</th>
              {PILLARS.map((p) => (
                <th key={p}>{t(`pillars.${p}`)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.year}>
                <th>{r.year}</th>
                {PILLARS.map((p) => (
                  <td key={p}>{r[p]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <p className="mt-4 text-sm font-semibold text-muted">{t("oversight.note")}</p>
      </div>
    </section>
  );
}
