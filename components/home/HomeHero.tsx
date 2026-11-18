import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Duotone } from "@/components/shared/Duotone";
import { getPhoto } from "@/data/photos";
import { pick } from "@/data/types";
import { Link } from "@/lib/i18n/navigation";
import { cn } from "@/lib/utils";

const PROOF = [
  { value: "2×", label: "chair", source: "chairSource" },
  { value: "600,000+", label: "growers", source: "growersSource" },
  { value: "237,192", label: "votes", source: "votesSource" },
] as const;

/**
 * Approved hero (Checkpoint 2: C + A): Kiswahili-first name and tagline, three sourced
 * figures, dusk-over-the-hills duotone, and the official portrait blended in (full colour).
 */
export function HomeHero() {
  const t = useTranslations("home");
  const locale = useLocale();
  const portrait = getPhoto("hero-main");
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-ink text-paper relative isolate overflow-hidden"
    >
      <Duotone
        id="field-inspection"
        sizes="100vw"
        priority
        scrim="left"
        className="hero-parallax absolute inset-0 -z-10"
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-[linear-gradient(0deg,rgb(11_26_20/0.95),transparent)]"
      />

      <div className="shell grid min-h-[calc(100svh-6.25rem)] content-end gap-8 pt-6 pb-10 lg:min-h-[47rem] lg:grid-cols-12 lg:items-end lg:pb-12">
        {portrait.src && (
          <div className="portrait-blend relative mx-auto -mb-16 aspect-[4/5] w-[72%] max-w-[22rem] lg:absolute lg:right-[var(--gutter)] lg:bottom-0 lg:mb-0 lg:h-[46rem] lg:w-[36rem] lg:max-w-none">
            <Image
              src={portrait.src}
              alt={pick(portrait.alt, locale)}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 576px, 72vw"
              className="object-cover object-top"
            />
            {/* Pulls the studio backdrop toward the landscape's ink; face stays untouched. */}
            <span
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_44%_44%_at_50%_42%,transparent_45%,rgb(11_26_20/0.55)_90%)]"
            />
          </div>
        )}

        <div className="relative flex flex-col gap-5 lg:col-span-7 lg:pb-44">
          <p className="t-eyebrow text-ember-bright">{t("hero.eyebrow")}</p>
          <h1 id="hero-title" lang="sw" className="t-display">
            <span className="block">{t("hero.line1")}</span>
            <span className="block">{t("hero.line2")}</span>
          </h1>
          <p className="t-lead">
            <span lang="sw" className="block">
              {t("hero.taglineSw")}
            </span>
            <span lang="en" className="block text-base opacity-80 sm:text-lg">
              {t("hero.tagline")}
            </span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/record" className={buttonVariants({ variant: "paper", size: "lg" })}>
              {t("hero.ctaRecord")}
            </Link>
            <Link
              href="/get-involved#pledge"
              className={buttonVariants({ variant: "outlineLight", size: "lg" })}
            >
              {t("hero.ctaPledge")}
            </Link>
          </div>
        </div>

        <dl
          aria-label={t("hero.proofLabel")}
          className="relative grid grid-cols-3 gap-3 sm:gap-7 lg:absolute lg:bottom-12 lg:left-[var(--gutter)] lg:w-[48rem]"
        >
          {PROOF.map((p) => (
            <div key={p.label} className="border-ember flex flex-col gap-1 border-t-2 pt-3">
              <dt className="order-2 text-xs leading-snug font-semibold sm:text-[0.9375rem]">
                {t(`proof.${p.label}`)}
              </dt>
              <dd className={cn("t-figure order-1 text-2xl sm:text-5xl")}>{p.value}</dd>
              <dd className="order-3 hidden text-xs opacity-75 sm:block">
                {t(`proof.${p.source}`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
