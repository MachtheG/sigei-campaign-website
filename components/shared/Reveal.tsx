"use client";
import { motion, useReducedMotion } from "motion/react";
import { useLite } from "./LiteProvider";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  /** Space-separated pillar ids, used by the Record filter (CSS) */
  pillars?: string;
};

/** Fade-and-rise once as it enters the viewport. Skipped for reduced motion / Lite mode. */
export function Reveal({ children, delay = 0, y = 20, className, as = "div", pillars }: Props) {
  const reduce = useReducedMotion();
  const { lite } = useLite();
  const Comp = motion[as];
  if (reduce || lite) {
    const Plain = as;
    return (
      <Plain className={className} data-pillars={pillars}>
        {children}
      </Plain>
    );
  }
  return (
    <Comp
      className={className}
      data-pillars={pillars}
      initial={{ opacity: 0, transform: `translateY(${y}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </Comp>
  );
}
