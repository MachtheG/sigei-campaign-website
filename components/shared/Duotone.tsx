import Image from "next/image";
import { getPhoto } from "@/data/photos";
import { cn } from "@/lib/utils";

type Props = {
  /** A context photo id from data/photos.ts. Never a portrait of the Senator. */
  id: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Extra scrim for text on top: "left" (hero), "bottom" (closing), "flat" or none. */
  scrim?: "left" | "bottom" | "flat";
  position?: string;
  children?: React.ReactNode;
};

const SCRIM = {
  left: "bg-[linear-gradient(90deg,rgb(11_26_20/0.94)_0%,rgb(11_26_20/0.78)_40%,rgb(11_26_20/0.25)_70%,rgb(11_26_20/0.45)_100%)]",
  bottom: "bg-[linear-gradient(0deg,rgb(11_26_20/0.9),rgb(11_26_20/0.1))]",
  flat: "bg-ink/60",
};

/**
 * Two-ink, print-style treatment for landscape and atmosphere photos
 * (deep green × ember). The image is decorative: alt="" (credit lives in the footer).
 */
export function Duotone({ id, sizes, priority, className, scrim, position, children }: Props) {
  const photo = getPhoto(id);
  if (photo.kind === "senator") throw new Error(`Duotone is for landscapes only, not "${id}"`);
  return (
    <div className={cn("duotone relative overflow-hidden", className)}>
      {photo.src && (
        <Image
          src={photo.src}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          quality={60}
          className="duotone-img object-cover"
          style={{ objectPosition: position }}
        />
      )}
      <span aria-hidden className="duotone-ink" />
      {scrim && <span aria-hidden className={cn("absolute inset-0", SCRIM[scrim])} />}
      {children && <div className="relative h-full">{children}</div>}
    </div>
  );
}
