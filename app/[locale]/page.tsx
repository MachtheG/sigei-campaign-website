import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CountdownSection } from "@/components/home/CountdownSection";
import { Hero } from "@/components/home/Hero";
import { PhotoMarquee } from "@/components/home/PhotoMarquee";
import { PledgeCTA } from "@/components/home/PledgeCTA";
import { ProofStats } from "@/components/home/ProofStats";
import { RecordPreview } from "@/components/home/RecordPreview";
import { StoryTeaser } from "@/components/home/StoryTeaser";

export const revalidate = 86400; // keeps "years in office" fresh

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common.meta" });
  const h = await getTranslations({ locale, namespace: "home.meta" });
  return { title: { absolute: t("title") }, description: h("description") };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <CountdownSection />
      <ProofStats />
      <StoryTeaser />
      <PhotoMarquee />
      <RecordPreview />
      <PledgeCTA />
    </>
  );
}
