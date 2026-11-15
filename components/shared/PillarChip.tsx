import { useTranslations } from "next-intl";
import type { PillarId } from "@/data/types";
import { PILLAR_COLORS } from "@/lib/pillars";
import { cn } from "@/lib/utils";

/** Pillar label with its own colour (a dot + soft tint) so the record reads as more than one green. */
export function PillarChip({ pillar, className }: { pillar: PillarId; className?: string }) {
  const t = useTranslations("record.pillars");
  return (
    <span
      style={{ background: `color-mix(in srgb, ${PILLAR_COLORS[pillar]} 18%, transparent)` }}
      className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold", className)}
    >
      <span aria-hidden className="size-2.5 rounded-full" style={{ background: PILLAR_COLORS[pillar] }} />
      {t(pillar)}
    </span>
  );
}
