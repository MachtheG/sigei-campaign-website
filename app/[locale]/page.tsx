import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CareerTimeline } from "@/components/home/CareerTimeline";
import { EntryCards } from "@/components/home/EntryCards";
import { HomeBomet } from "@/components/home/HomeBomet";
import { HomeClosing } from "@/components/home/HomeClosing";
import { HomeHero } from "@/components/home/HomeHero";
import { HomePriorities } from "@/components/home/HomePriorities";
import { HomeStats } from "@/components/home/HomeStats";
import { PromiseBanner } from "@/components/home/PromiseBanner";
import { CountdownBand } from "@/components/shared/CountdownBand";
import { CTABand } from "@/components/shared/CTABand";
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
  const j = await getTranslations({ locale, namespace: "home.join" });
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
      {/* Order fixed by the brief (§3); top strip, header and footer come from the layout. */}
      <HomeHero />
      <PromiseBanner />
      <EntryCards />
      <HomeStats />
      <CareerTimeline />
      <HomePriorities />
      <CountdownBand />
      <HomeBomet />
      <CTABand
        title={[j("line1"), j("line2")]}
        cta={j("cta")}
        href="/get-involved#pledge"
        ways={[
          { title: j("volunteerTitle"), body: j("volunteerBody"), href: "/get-involved#volunteer" },
          { title: j("hostTitle"), body: j("hostBody"), href: "/get-involved#host" },
          { title: j("tellTitle"), body: j("tellBody"), href: "/get-involved#story" },
        ]}
      />
      <HomeClosing />
    </>
  );
}
