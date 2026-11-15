"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ITEMS = ["register", "station", "id", "early", "family"] as const;

export function VoterChecklist() {
  const t = useTranslations("elections.checklist");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const count = Object.values(done).filter(Boolean).length;
  return (
    <section aria-labelledby="el-check" className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 id="el-check" className="t-h2">{t("title")}</h2>
        <p className="t-lead mt-3">{t("lead")}</p>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuemin={0} aria-valuemax={ITEMS.length} aria-valuenow={count}>
          <div className="h-full origin-left bg-accent transition-transform duration-300" style={{ transform: `scaleX(${count / ITEMS.length})` }} />
        </div>
        <ul className="mt-6 space-y-2">
          {ITEMS.map((k) => (
            <li key={k}>
              <label className={cn("flex min-h-14 cursor-pointer items-start gap-4 rounded-2xl bg-bg p-4", done[k] && "opacity-70")}>
                <input type="checkbox" checked={!!done[k]} onChange={(e) => setDone((d) => ({ ...d, [k]: e.target.checked }))} className="mt-0.5 size-6 shrink-0 accent-[var(--brand)]" />
                <span className={cn("text-lg", done[k] && "line-through")}>{t(`items.${k}`)}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
