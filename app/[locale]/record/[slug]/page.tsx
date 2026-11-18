import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { RecordDetail } from "@/components/record/RecordDetail";
import { CTABand } from "@/components/shared/CTABand";
import { bySlug, timeline } from "@/data/record/timeline";
import { pick } from "@/data/types";
import { routing } from "@/lib/i18n/routing";
import { getTranslations } from "next-intl/server";

type P = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => timeline.map((e) => ({ locale, slug: e.slug })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await params;
  const e = bySlug(slug);
  if (!e) return {};
  return {
    title: pick(e.title, locale),
    description: pick(e.summary, locale),
    alternates: alt(locale, `/record/${slug}`),
  };
}

export default async function RecordItemPage({ params }: P) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const event = bySlug(slug);
  if (!event) notFound();
  const t = await getTranslations("home.cta");
  return (
    <>
      <RecordDetail event={event} />
      <CTABand title={t("title")} body={t("body")} cta={t("cta")} href="/get-involved" />
    </>
  );
}
