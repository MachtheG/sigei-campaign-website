"use client";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/format";
import { useLite } from "./LiteProvider";

type Props = { value: number; decimals?: number; suffix?: string; className?: string };

/** Counts up once when scrolled into view. The final number is in the server HTML. */
export function StatCounter({ value, decimals = 0, suffix = "", className }: Props) {
  const locale = useLocale();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const { lite } = useLite();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || reduce || lite) return;
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, reduce, lite, value]);

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">{formatNumber(n, locale, decimals)}</span>
      {suffix}
    </span>
  );
}
