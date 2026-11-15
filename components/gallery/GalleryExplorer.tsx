"use client";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/shared/Lightbox";
import { photos, type PhotoCategory } from "@/data/photos";
import { GalleryFilter } from "./GalleryFilter";
import { GalleryGrid } from "./GalleryGrid";
import { PhotoOfTheWeek } from "./PhotoOfTheWeek";

/** Client island: owns the filter + lightbox state. */
export function GalleryExplorer() {
  const t = useTranslations("gallery");
  const [cat, setCat] = useState<PhotoCategory | "all">("all");
  const [open, setOpen] = useState<number | null>(null);
  const list = useMemo(
    () => (cat === "all" ? photos : photos.filter((p) => p.category === cat)),
    [cat],
  );
  const featured = photos.find((p) => p.featured) ?? photos[0];

  return (
    <>
      <PhotoOfTheWeek photo={featured} onOpen={() => setOpen(photos.indexOf(featured))} />
      <section
        aria-labelledby="gal-grid"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8"
      >
        <h2 id="gal-grid" className="t-h2">
          {t("grid.title")}
        </h2>
        <GalleryFilter value={cat} onChange={setCat} />
        <p className="text-muted mt-3 text-sm" aria-live="polite">
          {t("grid.count", { count: list.length })}
        </p>
        <GalleryGrid photos={list} onOpen={(i) => setOpen(photos.indexOf(list[i]))} />
        <p className="text-muted mt-8 text-sm">{t("press.note")}</p>
      </section>
      {open !== null && (
        <Lightbox photos={photos} startIndex={open} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
