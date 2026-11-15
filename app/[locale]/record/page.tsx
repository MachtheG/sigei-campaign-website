import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import { BillTracker } from "@/components/record/BillTracker";
import { ConstituencyMap } from "@/components/record/ConstituencyMap";
import { OversightChart } from "@/components/record/OversightChart";
import { PillarFilter } from "@/components/record/PillarFilter";
import { PillarScope } from "@/components/record/PillarScope";
import { PromiseVsDelivered } from "@/components/record/PromiseVsDelivered";
import { RecordCards } from "@/components/record/RecordCards";
import { RecordHero } from "@/components/record/RecordHero";
import { RecordStatsGrid } from "@/components/record/RecordStatsGrid";
import { RecordTimeline } from "@/components/record/RecordTimeline";
import { CTABand } from "@/components/shared/CTABand";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "record.meta" });
  return { title: t("title"), description: t("description"), alternates: alt(locale, "/record") };
}

export default async function RecordPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home.cta");
  const body = (
    <>
      <PillarFilter />
      <RecordStatsGrid />
      <RecordTimeline />
      <BillTracker />
      <OversightChart />
      <ConstituencyMap />
      <PromiseVsDelivered />
      <RecordCards />
    </>
  );
  return (
    <>
      <RecordHero />
      {/* PillarScope reads ?pillar= (needs Suspense); the fallback is the unfiltered page. */}
      <Suspense fallback={<div data-pillar="all">{body}</div>}>
        <PillarScope>{body}</PillarScope>
      </Suspense>
      <CTABand
        title={t("title")}
        body={t("body")}
        cta={t("cta")}
        href="/get-involved"
        photoId="farmers-meeting"
      />
    </>
  );
}
