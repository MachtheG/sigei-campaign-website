import { useLocale, useTranslations } from "next-intl";
import type { Commitment } from "@/data/second-term/commitments";
import { pick } from "@/data/types";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = { commitment: Commitment; index: number; className?: string };

/** Numbered priority with a Draft badge until the Senator signs it off. Links to its full entry. */
export function PriorityCard({ commitment: c, index, className }: Props) {
  const locale = useLocale();
  const t = useTranslations("common");
  const n = String(index + 1).padStart(2, "0");
  return (
    <article
      className={cn("border-line bg-surface flex flex-col gap-3 rounded-md border p-6", className)}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="t-figure text-forest text-[2.5rem]" aria-hidden>
          {n}
        </span>
        {c.status === "draft" && (
          <span className="bg-uda text-ink rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wider">
            {t("draft.badge")}
          </span>
        )}
      </div>
      <h3 className="font-sans text-xl leading-snug font-semibold tracking-normal">
        <span className="sr-only">{n}. </span>
        {pick(c.title, locale)}
      </h3>
      <p className="text-muted text-sm">{t(`priority.lever.${c.lever}`)}</p>
      <Link
        href={`/kazi-iendelee#${c.id}`}
        className="text-forest mt-auto inline-flex min-h-11 items-center font-bold underline-offset-4 hover:underline"
      >
        {t("priority.readMore")}
        <span className="sr-only">: {pick(c.title, locale)}</span> →
      </Link>
    </article>
  );
}
