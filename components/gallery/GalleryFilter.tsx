"use client";
import { useTranslations } from "next-intl";
import { PHOTO_CATEGORIES, type PhotoCategory } from "@/data/photos";
import { cn } from "@/lib/utils";

type Props = { value: PhotoCategory | "all"; onChange: (v: PhotoCategory | "all") => void };

export function GalleryFilter({ value, onChange }: Props) {
  const t = useTranslations("gallery.filters");
  const opts: (PhotoCategory | "all")[] = ["all", ...PHOTO_CATEGORIES];
  return (
    <div
      role="group"
      aria-label={t("label")}
      className="-mx-4 mt-6 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {opts.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={cn(
            "press min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
            value === o
              ? "bg-brand text-on-brand dark:bg-accent dark:text-on-accent"
              : "bg-surface hover:bg-fg/10",
          )}
        >
          {t(o)}
        </button>
      ))}
    </div>
  );
}
