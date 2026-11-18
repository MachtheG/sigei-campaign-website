import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BometHero } from "@/components/bomet/BometHero";
import { BometStats } from "@/components/bomet/BometStats";
import { ConstituencyList } from "@/components/shared/ConstituencyList";
import { CTABand } from "@/components/shared/CTABand";
import { SplitHeadline } from "@/components/shared/SplitHeadline";
import { alt, og } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bomet.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: alt(locale, "/bomet"),
    ...og(locale, t("title")),
  };
}

export default async function BometPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bomet");
  return (
    <>
      <BometHero />
      <section aria-labelledby="bomet-list" className="shell py-[var(--section)]">
        <SplitHeadline id="bomet-list" lines={[t("list.line1"), t("list.line2")]} />
        <ConstituencyList className="mt-10" />
      </section>
      <BometStats />
      <CTABand
        title={t("cta.title")}
        body={t("cta.body")}
        cta={t("cta.cta")}
        href="/get-involved#pledge"
      />
    </>
  );
}
