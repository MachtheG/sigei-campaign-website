import { useTranslations } from "next-intl";
import { Countdown } from "@/components/shared/Countdown";
import { Link } from "@/lib/i18n/navigation";

/** Small countdown that lives in the sticky header on every page. Taps through to /elections. */
export function CountdownPill() {
  const t = useTranslations("common.countdown");
  return (
    <Link
      href="/elections"
      aria-label={t("pillAria")}
      className="press bg-accent text-on-accent inline-flex min-h-11 items-center gap-2 rounded-full px-3.5 text-sm font-bold whitespace-nowrap"
    >
      <span aria-hidden className="bg-on-accent size-2 animate-pulse rounded-full" />
      <Countdown variant="pill" />
    </Link>
  );
}
