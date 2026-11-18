import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** Kept for call-site compatibility; scroll-driven reveals stagger by position instead. */
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  /** Space-separated pillar ids, used by the Record filter (CSS) */
  pillars?: string;
  id?: string;
};

/**
 * Fade-and-rise as the element enters the viewport, driven by CSS scroll timelines
 * (no JavaScript). Content is always visible by default: browsers without scroll
 * timelines, reduced motion and Lite mode simply show it.
 */
export function Reveal({ children, className, as = "div", pillars, id }: Props) {
  const Tag = as;
  return (
    <Tag id={id} className={cn("reveal", className)} data-pillars={pillars}>
      {children}
    </Tag>
  );
}
