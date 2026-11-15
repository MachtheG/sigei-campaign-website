"use client";
import { useInView } from "motion/react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

// Recharts is heavy: load it only when the section is near the viewport.
const Body = dynamic(() => import("./OversightChartBody"), {
  ssr: false,
  loading: () => <div className="h-72 sm:h-96" aria-hidden />,
});

export function OversightChart() {
  const t = useTranslations("record");
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "400px 0px" });
  return (
    <section aria-labelledby="rec-oversight" className="cv bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <SectionHeading
          id="rec-oversight"
          title={t("oversight.title")}
          lead={t("oversight.lead")}
        />
        <div ref={ref} className="mt-8 min-h-72 sm:min-h-96">
          {near ? <Body /> : null}
        </div>
      </div>
    </section>
  );
}
