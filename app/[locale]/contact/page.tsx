import type { Metadata } from "next";
import { alt } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { OfficeDetails } from "@/components/contact/OfficeDetails";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description"), alternates: alt(locale, "/contact") };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact.form");
  return (
    <>
      <ContactHero />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <OfficeDetails />
        <section aria-labelledby="ct-form" className="bg-surface rounded-3xl p-6 sm:p-10">
          <h2 id="ct-form" className="t-h2">
            {t("title")}
          </h2>
          <p className="text-muted mt-3 mb-8">{t("lead")}</p>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
