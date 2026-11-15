"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { PillarChip } from "@/components/shared/PillarChip";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { constituencies } from "@/data/record/constituencies";
import { timeline } from "@/data/record/timeline";
import { pick } from "@/data/types";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";
import { usePillar } from "./PillarScope";

/** Stylised (not geographic) map. No boundary data is bundled; see docs/DECISIONS.md. */
export function ConstituencyMap() {
  const t = useTranslations("record.map");
  const locale = useLocale();
  const { pillar } = usePillar();
  const [sel, setSel] = useState<string | null>(null);
  const current = constituencies.find((c) => c.id === sel);
  const countyWide = timeline.filter((e) => pillar === "all" || e.pillar === pillar);

  return (
    <section
      aria-labelledby="rec-map"
      className="cv mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <SectionHeading id="rec-map" title={t("title")} lead={t("lead")} />
      <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
        <div>
          <svg
            viewBox="0 0 100 100"
            role="group"
            aria-label={t("title")}
            className="bg-surface w-full rounded-3xl"
          >
            {constituencies.map((c) => {
              const active = sel === c.id;
              return (
                <g
                  key={c.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={active}
                  aria-label={pick(c.name, locale)}
                  onClick={() => setSel(c.id)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSel(c.id))
                  }
                  className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-[var(--accent)] [&:focus-visible>rect]:[stroke-width:1.2]"
                >
                  <rect
                    x={c.x - 15}
                    y={c.y - 11}
                    width="30"
                    height="22"
                    rx="7"
                    className={cn(
                      "transition-colors",
                      active
                        ? "fill-[var(--accent)]"
                        : "fill-[var(--deep)] hover:fill-[var(--clay)]",
                    )}
                  />
                  <text
                    x={c.x}
                    y={c.y + 1.6}
                    textAnchor="middle"
                    fontSize="4.4"
                    fontWeight="700"
                    fill={active ? "#111a16" : "#faf7f0"}
                    className="pointer-events-none select-none"
                  >
                    {pick(c.name, locale)}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="text-muted mt-2 text-sm">
            {t("stylised")} {t("wardsNote")}
          </p>
        </div>

        <div aria-live="polite" className="bg-surface rounded-3xl p-6 sm:p-8">
          {current ? (
            <>
              <h3 className="font-sans text-2xl font-bold tracking-normal">
                {pick(current.name, locale)}
              </h3>
              <h4 className="text-muted mt-4 font-sans text-sm font-bold tracking-normal">
                {t("work")}
              </h4>
              <p className="mt-1 font-semibold">{t("workPlaceholder")}</p>
              <SourceBadge ids={current.sourceIds} className="mt-1 -ml-3" />
            </>
          ) : (
            <p className="font-semibold">{t("prompt")}</p>
          )}
          <h4 className="text-muted mt-6 font-sans text-sm font-bold tracking-normal">
            {t("countyWide")}
          </h4>
          {countyWide.length ? (
            <ul className="mt-2 space-y-2">
              {countyWide.slice(0, 5).map((e) => (
                <li key={e.slug} className="flex flex-wrap items-center gap-2">
                  <PillarChip pillar={e.pillar} />
                  <Link
                    href={`/record/${e.slug}`}
                    className="min-h-11 content-center font-semibold underline underline-offset-4"
                  >
                    {pick(e.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted mt-2">{t("none")}</p>
          )}
        </div>
      </div>
    </section>
  );
}
