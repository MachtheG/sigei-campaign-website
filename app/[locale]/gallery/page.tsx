import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { GalleryHero } from "@/components/gallery/GalleryHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery.meta" });
  return { title: t("title"), description: t("description"), alternates: alt(locale, "/gallery") };
}

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <GalleryHero />
      <GalleryExplorer />
    </>
  );
}
