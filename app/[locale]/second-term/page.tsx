import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTABand } from "@/components/shared/CTABand";
import { Commitments } from "@/components/second-term/Commitments";
import { LetterFromSenator } from "@/components/second-term/LetterFromSenator";
import { SecondTermHero } from "@/components/second-term/SecondTermHero";
import { StoryScroller } from "@/components/second-term/StoryScroller";
import { WhyHim } from "@/components/second-term/WhyHim";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "secondTerm.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function SecondTermPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("secondTerm.cta");
  return (
    <>
      <SecondTermHero />
      <StoryScroller />
      <Commitments />
      <WhyHim />
      <LetterFromSenator />
      <CTABand title={t("title")} body={t("body")} cta={t("cta")} href="/get-involved" photoId="events-launch" />
    </>
  );
}
