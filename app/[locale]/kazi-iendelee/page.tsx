import type { Metadata } from "next";
import { alt, og } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CTABand } from "@/components/shared/CTABand";
import { Commitments } from "@/components/kazi-iendelee/Commitments";
import { LetterFromSenator } from "@/components/kazi-iendelee/LetterFromSenator";
import { SecondTermHero } from "@/components/kazi-iendelee/SecondTermHero";
import { StoryScroller } from "@/components/kazi-iendelee/StoryScroller";
import { WhyHim } from "@/components/kazi-iendelee/WhyHim";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kazi.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alt(locale, "/kazi-iendelee"),
    ...og(locale, t("title")),
  };
}

export default async function KaziIendeleePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("kazi.cta");
  return (
    <>
      <SecondTermHero />
      <StoryScroller />
      <Commitments />
      <WhyHim />
      <LetterFromSenator />
      <CTABand title={t("title")} body={t("body")} cta={t("cta")} href="/get-involved" />
    </>
  );
}
