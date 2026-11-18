"use client";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/format";
import { useLite } from "./LiteProvider";

type Props = { value: number; decimals?: number; suffix?: string; className?: string };

const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/** Counts up once when scrolled into view. The final number is in the server HTML. */
export function StatCounter({ value, decimals = 0, suffix = "", className }: Props) {
  const locale = useLocale();
  const ref = useRef<HTMLSpanElement>(null);
  const { lite } = useLite();
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || lite || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          setN(value * ease(t));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [lite, value]);

  return (
    <span ref={ref} className={className}>
      <span className="tabular-nums">{formatNumber(n, locale, decimals)}</span>
      {suffix}
    </span>
  );
}
