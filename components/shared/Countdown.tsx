"use client";
import { useTranslations } from "next-intl";
import { useCountdown } from "@/lib/hooks/useCountdown";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

/** A number that rolls in whenever it changes (CSS keyframe, off the main thread). */
function Roll({ value }: { value: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom tabular-nums">
      <span key={value} className="roll">
        {value}
      </span>
    </span>
  );
}

type Props = { variant: "pill" | "large"; className?: string };

export function Countdown({ variant, className }: Props) {
  const t = useTranslations("common.countdown");
  const state = useCountdown(variant === "pill" ? 15_000 : 1000);

  // Server + first paint: a static fallback (no mismatch, no layout shift).
  if (!state) {
    return variant === "pill" ? (
      <span className={cn("tabular-nums", className)}>{t("fallback")}</span>
    ) : (
      <p className={cn("text-xl font-semibold", className)}>{t("date")}</p>
    );
  }

  if (state.phase !== "before") {
    const msg = state.phase === "open" ? t("open") : t("thanks");
    return variant === "pill" ? (
      <span className={className}>{msg}</span>
    ) : (
      <p className={cn("t-h2", className)} role="status">
        {msg}
      </p>
    );
  }

  const { days, hours, minutes, seconds } = state.remaining;

  if (variant === "pill") {
    return (
      <span className={cn("tabular-nums", className)}>
        <Roll value={String(days)} />
        <span className="opacity-70">{t("daysShort")}</span> <Roll value={pad(hours)} />
        <span className="opacity-70">{t("hoursShort")}</span> <Roll value={pad(minutes)} />
        <span className="opacity-70">{t("minutesShort")}</span>
      </span>
    );
  }

  const cells = [
    { v: String(days), l: t("days") },
    { v: pad(hours), l: t("hours") },
    { v: pad(minutes), l: t("minutes") },
    { v: pad(seconds), l: t("seconds") },
  ];
  return (
    <div
      className={cn("grid grid-cols-4 gap-2 sm:gap-4", className)}
      role="timer"
      aria-label={`${days} ${t("days")}, ${hours} ${t("hours")}, ${minutes} ${t("minutes")} ${t("until")}`}
    >
      {cells.map((c) => (
        <div key={c.l} className="rounded-2xl bg-white/60 px-1 py-4 text-center sm:py-8">
          <div className="font-display text-[clamp(2rem,9vw,5.5rem)] leading-none font-extrabold">
            <Roll value={c.v} />
          </div>
          <div className="mt-2 text-xs font-medium tracking-wide opacity-80 sm:text-sm">{c.l}</div>
        </div>
      ))}
    </div>
  );
}
