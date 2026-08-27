"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { pressFeedback } from "@/lib/animations";
import { cn } from "@/lib/utils";

const MAGNETIC_RANGE = 8; // px, capped pull toward the cursor

type GradientButtonVariant = "solid" | "glass" | "white";

const variantClass: Record<GradientButtonVariant, string> = {
  solid:
    "bg-[image:var(--wk-gradient)] text-white shadow-[0_14px_34px_-10px_rgba(30,100,230,0.55)] hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.6)]",
  glass: "glass text-fg",
  // Contrasts against bg-inverse, which itself flips with the theme.
  white: "bg-fg-on-dark text-bg-inverse shadow-[0_18px_44px_-12px_rgba(0,0,0,0.5)]",
};

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  variant?: GradientButtonVariant;
  showSpark?: boolean;
  className?: string;
}

export function GradientButton({
  href,
  children,
  variant = "solid",
  showSpark = variant !== "glass",
  className,
}: GradientButtonProps) {
  const isExternal = href.startsWith("http");
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, pressFeedback);
  const springY = useSpring(y, pressFeedback);

  function handlePointerMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * MAGNETIC_RANGE);
    y.set(((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * MAGNETIC_RANGE);
  }

  function resetMagnetic() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetMagnetic}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      transition={pressFeedback}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-base font-semibold transition-shadow",
        variantClass[variant],
        className,
      )}
    >
      {showSpark && (
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-spark-500 shadow-[0_0_10px_var(--wk-spark-500)]"
        />
      )}
      {children}
    </motion.a>
  );
}
