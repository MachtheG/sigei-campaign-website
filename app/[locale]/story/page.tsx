import type { Metadata } from "next";
import { alt, og } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/story/AboutHero";
import { Credentials } from "@/components/story/Credentials";
import { JourneyTimeline } from "@/components/story/JourneyTimeline";
import { CTABand } from "@/components/shared/CTABand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "story.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alt(locale, "/story"),
    ...og(locale, t("title")),
  };
}

export default async function StoryPage({ params }: { params: Promise<{ locale: string }> }) {
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
