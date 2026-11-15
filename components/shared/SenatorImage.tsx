"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getPhoto, hasRealPhoto } from "@/data/photos";
import { pick } from "@/data/types";
import { cn } from "@/lib/utils";
import { useLite } from "./LiteProvider";

const TONE: Record<string, string> = {
  senate: "ph-deep",
  portraits: "ph-deep",
  field: "ph-green",
  community: "ph-clay",
  farmers: "ph-amber",
  events: "ph-clay",
};

type Props = {
  id: string;
  /** `sizes` attribute, set it correctly for every use. */
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Override the manifest ratio, or "fill" to fill a sized parent. */
  ratio?: string | "fill";
  /** object-position, e.g. "50% 20%" to keep the face in frame */
  position?: string;
  /** Hide the slot brief on small placeholders */
  compact?: boolean;
};

/**
 * The only way photos of the Senator appear on the site. Reads data/photos.ts.
 * With no file yet it renders an intentional placeholder, never a fake face.
 */
export function SenatorImage({ id, sizes, priority, className, ratio, position, compact }: Props) {
  const photo = getPhoto(id);
  const locale = useLocale();
  const t = useTranslations("common.photo");
  const { lite } = useLite();
  const alt = pick(photo.alt, locale);
  const style = ratio === "fill" ? undefined : { aspectRatio: ratio ?? photo.ratio };

  if (hasRealPhoto(photo)) {
    return (
      <div className={cn("bg-surface relative overflow-hidden", className)} style={style}>
        <Image
          src={photo.src!}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={lite ? 50 : 75}
          placeholder={photo.blurDataURL ? "blur" : "empty"}
          blurDataURL={photo.blurDataURL}
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${alt} (${t("placeholder")})`}
      className={cn("ph relative isolate overflow-hidden", TONE[photo.category], className)}
      style={style}
    >
      <svg
        aria-hidden
        viewBox="0 0 200 240"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full opacity-[0.16]"
      >
        <circle cx="100" cy="88" r="40" fill="currentColor" />
        <path d="M20 240c0-56 36-92 80-92s80 36 80 92Z" fill="currentColor" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 p-3 text-[0.7rem] leading-snug sm:p-4 sm:text-xs">
        <span className="bg-accent text-on-accent inline-block rounded-full px-2.5 py-0.5 font-semibold">
          {t("placeholder")}
        </span>
        {!compact && <p className="mt-1.5 max-w-[34ch] opacity-80">{photo.slot}</p>}
      </div>
    </div>
  );
}
