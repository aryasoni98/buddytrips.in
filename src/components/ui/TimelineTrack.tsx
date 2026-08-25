"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

/**
 * Wraps a stack of TimelineNode children with a central line that draws
 * as the user scrolls through it. Scroll-linked (not autoplaying), so
 * there's nothing for prefers-reduced-motion to reduce - the line only
 * ever moves in lockstep with the user's own scroll.
 */
export function TimelineTrack({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-7 w-1 -translate-x-1/2 rounded-full bg-border-soft tablet:left-1/2"
      >
        <motion.div style={{ height }} className="w-full rounded-full bg-[image:var(--wk-gradient)]" />
      </div>
      <div className="flex flex-col gap-12 tablet:gap-16">{children}</div>
    </div>
  );
}
