import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CountdownSection } from "@/components/home/CountdownSection";
import { Hero } from "@/components/home/Hero";
import { PhotoMarquee } from "@/components/home/PhotoMarquee";
import { PledgeCTA } from "@/components/home/PledgeCTA";
import { ProofStats } from "@/components/home/ProofStats";
import { RecordPreview } from "@/components/home/RecordPreview";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { SOCIALS } from "@/lib/nav";
import { SITE_URL } from "@/lib/utils";

export const revalidate = 86400; // keeps "years in office" fresh

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common.meta" });
  const h = await getTranslations({ locale, namespace: "home.meta" });
  return {
    title: { absolute: t("title") },
    description: h("description"),
    alternates: alt(locale),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "common.site" });
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hillary Kiprotich Sigei",
    honorificPrefix: "Sen. Wakili",
    jobTitle: t("role"),
    url: `${SITE_URL}/${locale}`,
    affiliation: { "@type": "Organization", name: "United Democratic Alliance (UDA)" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Nairobi" },
    sameAs: Object.values(SOCIALS),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
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
