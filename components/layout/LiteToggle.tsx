"use client";
import { useTranslations } from "next-intl";
import { useLite } from "@/components/shared/LiteProvider";
import { cn } from "@/lib/utils";

export function LiteToggle({ tone = "default" }: { tone?: "default" | "light" }) {
  const t = useTranslations("common.lite");
  const { lite, setLite } = useLite();
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={lite}
        aria-label={t("label")}
        onClick={() => setLite(!lite)}
        className="press inline-flex min-h-11 items-center gap-3 rounded-full pr-1 text-sm font-semibold"
      >
        <span
          className={cn(
            "relative h-7 w-12 rounded-full transition-colors",
            lite ? "bg-accent" : tone === "light" ? "bg-white/25" : "bg-fg/25",
          )}
        >
          <span
            className={cn(
              "absolute top-1 left-1 size-5 rounded-full bg-white transition-transform",
              lite && "!bg-on-accent translate-x-5",
            )}
          />
        </span>
        <span>
          {t("label")}: {lite ? t("on") : t("off")}
        </span>
      </button>
      <span className="sr-only">{t("hint")}</span>
    </div>
  );
}
