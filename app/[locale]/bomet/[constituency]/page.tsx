import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ConstituencyHero } from "@/components/bomet/ConstituencyHero";
import { CountyWork } from "@/components/bomet/CountyWork";
import { OtherConstituencies } from "@/components/bomet/OtherConstituencies";
import { CTABand } from "@/components/shared/CTABand";
import { constituencies } from "@/data/record/constituencies";
import { pick } from "@/data/types";
import { routing } from "@/lib/i18n/routing";
import { alt } from "@/lib/seo";

type Params = Promise<{ locale: string; constituency: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    constituencies.map((c) => ({ locale, constituency: c.id })),
  );
}

const find = (id: string) => constituencies.find((c) => c.id === id);

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, constituency } = await params;
  const c = find(constituency);
  if (!c) return {};
  const t = await getTranslations({ locale, namespace: "bomet.meta" });
  return {
    title: `${pick(c.name, locale)} · ${t("title")}`,
    alternates: alt(locale, `/bomet/${c.id}`),
  };
}

export default async function ConstituencyPage({ params }: { params: Params }) {
  const { locale, constituency } = await params;
  const c = find(constituency);
  if (!c) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("bomet");
  const name = pick(c.name, locale);
  return (
    <>
      <ConstituencyHero id={c.id} />
      <CountyWork name={name} />
      <OtherConstituencies current={c.id} />
      <CTABand
        title={t("place.pledge", { name })}
        body={t("cta.body")}
        cta={t("cta.cta")}
        href="/get-involved#pledge"
      />
    </>
  );
}
