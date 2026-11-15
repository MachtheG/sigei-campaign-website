"use client";
import { Download, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { type Photo } from "@/data/photos";
import { pick } from "@/data/types";
import { SenatorImage } from "./SenatorImage";

type Props = { photos: Photo[]; startIndex: number; onClose: () => void };

/** Full-screen, swipeable (scroll-snap) lightbox with bilingual captions. Native <dialog> traps focus. */
export function Lightbox({ photos, startIndex, onClose }: Props) {
  const t = useTranslations("common");
  const tp = useTranslations("common.photo");
  const locale = useLocale();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    const track = trackRef.current;
    if (track) track.scrollTo({ left: startIndex * track.clientWidth, behavior: "instant" as ScrollBehavior });
    return () => d?.close();
  }, [startIndex]);

  function go(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(photos.length - 1, i));
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  }

  const photo = photos[index];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={onKey}
      aria-label={pick(photo.alt, locale)}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-3">
          <span className="px-2 text-sm tabular-nums opacity-80">
            {index + 1} / {photos.length}
          </span>
          <div className="flex items-center gap-1">
            {photo.approvedForPress && photo.src && (
              <a
                href={photo.src}
                download
                className="press inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold hover:bg-white/10"
              >
                <Download aria-hidden className="size-4" /> {tp("download")}
              </a>
            )}
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={t("close")}
              className="press inline-flex size-11 items-center justify-center rounded-full hover:bg-white/10"
              autoFocus
            >
              <X aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={(e) => {
            const el = e.currentTarget;
            setIndex(Math.round(el.scrollLeft / el.clientWidth));
          }}
          className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((p, i) => (
            <figure key={p.id} className="flex w-screen shrink-0 snap-center flex-col items-center justify-center gap-4 px-3">
              <div style={{ width: `min(94vw, calc(68dvh * ${p.ratio.replace(" / ", " / ")}))` }}>
                <SenatorImage id={p.id} sizes="100vw" priority={Math.abs(i - startIndex) < 1} className="w-full rounded-lg" />
              </div>
              <figcaption className="max-w-prose text-center text-base text-white/90">{pick(p.caption, locale)}</figcaption>
            </figure>
          ))}
        </div>

        <div className="hidden justify-between p-3 sm:flex">
          <button type="button" onClick={() => go(index - 1)} disabled={index === 0} className="press min-h-11 rounded-full px-5 hover:bg-white/10 disabled:opacity-30">
            ← {t("previous")}
          </button>
          <button type="button" onClick={() => go(index + 1)} disabled={index === photos.length - 1} className="press min-h-11 rounded-full px-5 hover:bg-white/10 disabled:opacity-30">
            {t("next")} →
          </button>
        </div>
      </div>
    </dialog>
  );
}
