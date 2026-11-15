"use client";
import { useTranslations } from "next-intl";
import { PILLARS } from "@/data/types";
import { cn } from "@/lib/utils";
import { usePillar, type PillarSel } from "./PillarScope";

/** Sticky chip bar. Drives every component on the page and the ?pillar= URL param. */
export function PillarFilter() {
  const t = useTranslations("record");
  const { pillar, setPillar } = usePillar();
  const options: PillarSel[] = ["all", ...PILLARS];
  return (
    <div className="border-line bg-bg sticky top-14 z-20 border-b">
      <div
        role="group"
        aria-label={t("filter.label")}
        className="mx-auto flex max-w-7xl [scrollbar-width:none] gap-2 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {options.map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={pillar === p}
            onClick={() => setPillar(p)}
            className={cn(
              "press min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
              pillar === p ? "bg-accent text-on-accent" : "bg-surface text-fg hover:bg-fg/10",
            )}
          >
            {t(`pillars.${p}`)}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {t("filter.showing", { pillar: t(`pillars.${pillar}`) })}
      </p>
    </div>
  );
}
