import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";
import { SenatorImage } from "@/components/shared/SenatorImage";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { StatCounter } from "@/components/shared/StatCounter";
import { buttonVariants } from "@/components/ui/button";
import type { ChapterDef } from "@/data/second-term/story";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

/** One full-height chapter: a big photo of the Senator, punchy copy, one hard number. */
export function StoryChapter({ chapter, index }: { chapter: ChapterDef; index: number }) {
  const t = useTranslations(`kazi.chapters.${chapter.id}`);
  const rs = useTranslations("record.stats");
  const flip = index % 2 === 1;
  const last = chapter.id === "iendelee";
  return (
    <section
      aria-labelledby={`ch-${chapter.id}`}
      className={cn("min-h-[100dvh] md:min-h-[88dvh]", index % 2 === 0 ? "bg-bg" : "bg-surface")}
    >
      <div
        className={cn(
          "mx-auto grid min-h-[inherit] max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-14 md:py-16 lg:px-8",
          flip && "md:[&>*:first-child]:order-2",
        )}
      >
        <Reveal y={32}>
          <SenatorImage
            id={chapter.photoId}
            sizes="(min-width: 768px) 50vw, 100vw"
            ratio="4 / 5"
            priority={index === 0}
            className="max-h-[70dvh] w-full rounded-md md:max-h-[78dvh]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-link font-semibold">
            {String(index + 1)} / 5 · {t("subtitle")}
          </p>
          <h2 id={`ch-${chapter.id}`} className="t-h1 mt-2">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg sm:text-xl">{t("body")}</p>
          <div className="border-accent mt-8 border-l-4 pl-5">
            <p className="font-display text-brand text-6xl leading-none font-extrabold sm:text-7xl">
              {chapter.value !== null ? (
                <StatCounter value={chapter.value} suffix={chapter.suffix} />
              ) : (
                <span className="text-4xl sm:text-5xl">10 Aug 2027</span>
              )}
            </p>
            <p className="text-muted mt-2">{t("stat")}</p>
            {chapter.confirm && (
              <p className="mt-1 text-sm font-semibold">
                {rs("toConfirm", { what: chapter.confirm })}
              </p>
            )}
            <SourceBadge ids={chapter.sourceIds} className="mt-1 -ml-3" />
          </div>
          {last && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#commitments" className={buttonVariants({ size: "lg", variant: "brand" })}>
                {t("ctaCommitments")}
              </a>
              <Link href="/get-involved" className={buttonVariants({ size: "lg" })}>
                {t("ctaPledge")}
              </Link>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
