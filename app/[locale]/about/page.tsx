import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/about/AboutHero";
import { Credentials } from "@/components/about/Credentials";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { CTABand } from "@/components/shared/CTABand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description"), alternates: alt(locale, "/about") };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home.cta");
  return (
    <>
      <AboutHero />
      <JourneyTimeline />
      <Credentials />
      <CTABand title={t("title")} body={t("body")} cta={t("cta")} href="/get-involved" />
    </>
  );
}
