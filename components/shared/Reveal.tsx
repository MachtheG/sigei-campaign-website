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
  id?: string;
};

/** Fade-and-rise once as it enters the viewport. Skipped for reduced motion / Lite mode. */
export function Reveal({ children, delay = 0, y = 20, className, as = "div", pillars, id }: Props) {
  const reduce = useReducedMotion();
  const { lite } = useLite();
  const Comp = motion[as];
  // Always render the motion element so server and client markup match. With reduced
  // motion or Lite mode it jumps straight to the visible state (no travel). Rendering a
  // plain element instead left the server's `opacity:0` in place after hydration.
  const skip = Boolean(reduce || lite);
  const shown = { opacity: 1, transform: "translateY(0px)" };
  return (
    <Comp
      id={id}
      className={className}
      data-pillars={pillars}
      initial={{ opacity: 0, transform: `translateY(${y}px)` }}
      animate={skip ? shown : undefined}
      whileInView={skip ? undefined : shown}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={skip ? { duration: 0 } : { duration: 0.55, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </Comp>
  );
}
