"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { revealVariants } from "@/lib/animations";

interface ScrollRevealProps {
  children: ReactNode;
  /** Stagger delay in ms - matches the original site's data-delay convention. */
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({ children, delay = 0, className, once = true }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      custom={delay}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}
