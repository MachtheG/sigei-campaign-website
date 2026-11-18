"use client";
import { useLocale, useTranslations } from "next-intl";
import { SenatorImage } from "@/components/shared/SenatorImage";
import type { Photo } from "@/data/photos";
import { pick } from "@/data/types";

type Props = { photos: Photo[]; onOpen: (index: number) => void };

/** Masonry via CSS columns: no layout JS, no layout shift (ratios come from the manifest). */
export function GalleryGrid({ photos, onOpen }: Props) {
  const t = useTranslations("gallery.grid");
  const locale = useLocale();
  if (!photos.length) return <p className="mt-8 font-semibold">{t("none")}</p>;
  return (
    <ul className="mt-6 columns-2 gap-3 md:columns-3 lg:columns-4 [&>li]:mb-3 [&>li]:break-inside-avoid">
      {photos.map((p, i) => (
        <li key={p.id}>
          <button
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`${t("open")}: ${pick(p.alt, locale)}`}
            className="press group block w-full overflow-hidden rounded-md text-left"
          >
            <SenatorImage
              id={p.id}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="w-full transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
              compact
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
