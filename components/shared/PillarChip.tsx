import { useTranslations } from "next-intl";
import type { PillarId } from "@/data/types";
import { cn } from "@/lib/utils";

export function PillarChip({ pillar, className }: { pillar: PillarId; className?: string }) {
  const t = useTranslations("record.pillars");
  return (
    <span className={cn("inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-link", className)}>
      {t(pillar)}
    </span>
  );
}
