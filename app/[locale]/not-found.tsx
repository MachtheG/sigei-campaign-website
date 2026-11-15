import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/lib/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("common.notFound");
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <h1 className="t-h1">{t("title")}</h1>
      <p className="t-lead mt-4">{t("body")}</p>
      <Link href="/" className={buttonVariants({ size: "lg", className: "mt-8" })}>
        {t("cta")}
      </Link>
    </section>
  );
}
