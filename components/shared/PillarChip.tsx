import { useTranslations } from "next-intl";
import type { PillarId } from "@/data/types";
import { cn } from "@/lib/utils";

export function PillarChip({ pillar, className }: { pillar: PillarId; className?: string }) {
  const t = useTranslations("record.pillars");
  return (
    <span
      className={cn(
        "bg-brand/10 text-link inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
        className,
      )}
    >
      {t(pillar)}
    </span>
  );
}
