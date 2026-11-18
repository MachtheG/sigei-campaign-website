import { useTranslations } from "next-intl";
import { ConstituencyList } from "@/components/shared/ConstituencyList";
import { SplitHeadline } from "@/components/shared/SplitHeadline";

/** Rows link to /bomet/[constituency] once those pages exist (Phase 5). */
export function HomeBomet() {
  const t = useTranslations("home.bomet");
  return (
    <section aria-labelledby="home-bomet" className="shell py-[var(--section)]">
      <SplitHeadline id="home-bomet" lines={[t("line1"), t("line2")]} />
      <ConstituencyList className="mt-10" linked={false} />
    </section>
  );
}
