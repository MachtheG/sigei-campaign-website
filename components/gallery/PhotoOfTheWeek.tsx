"use client";
import { useLocale, useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";
import type { Photo } from "@/data/photos";
import { pick } from "@/data/types";

export function PhotoOfTheWeek({ photo, onOpen }: { photo: Photo; onOpen: () => void }) {
  const t = useTranslations("gallery");
  const locale = useLocale();
  return (
    <section aria-labelledby="gal-week" className="bg-clay text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-20 lg:px-8">
        <button
          type="button"
          onClick={onOpen}
          aria-label={t("week.open")}
          className="press block overflow-hidden rounded-3xl text-left"
        >
          <SenatorImage
            id={photo.id}
            sizes="(min-width: 768px) 60vw, 100vw"
            priority
            className="w-full"
          />
        </button>
        <div>
          <h2 id="gal-week" className="t-h2">
            {t("week.title")}
          </h2>
          <p className="text-on-brand/85 mt-4 text-lg">{pick(photo.caption, locale)}</p>
        </div>
      </div>
    </section>
  );
}
