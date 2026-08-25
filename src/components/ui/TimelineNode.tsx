"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { springDefault } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface TimelineNodeProps {
  number: string;
  align: "left" | "right";
  children: ReactNode;
}

export function TimelineNode({ number, align, children }: TimelineNodeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // No `once` - flips back off once the node scrolls out of the centered
  // band, so the glow follows whichever day is "active" as you scroll.
  const isActive = useInView(ref, { margin: "-42% 0px -42% 0px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-[3.5rem_1fr] items-start gap-5 tablet:grid-cols-[1fr_3.5rem_1fr] tablet:gap-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : undefined}
        transition={springDefault}
        className="relative z-[1] col-start-1 row-start-1 flex h-14 w-14 items-center justify-center justify-self-start rounded-full bg-[image:var(--wk-gradient)] font-display text-heading-lg font-bold text-white tablet:col-start-2 tablet:justify-self-center"
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute -inset-1.5 rounded-full ring-4 ring-blue-300 transition-opacity duration-500",
            isActive ? "opacity-70" : "opacity-0",
          )}
        />
        {number}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ ...springDefault, delay: 0.08 }}
        className={cn(
          "col-start-2 row-start-1",
          align === "left" ? "tablet:col-start-1 tablet:justify-self-end" : "tablet:col-start-3",
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}
