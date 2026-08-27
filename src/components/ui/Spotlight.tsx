"use client";

import { useReducedMotion } from "motion/react";
import { type ReactNode, useRef } from "react";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

/**
 * Cursor-following radial highlight for card surfaces - reads the pointer
 * position straight onto CSS vars via the DOM ref (not React state) so the
 * glow tracks every pointermove without triggering a re-render per frame.
 * Caller's className carries `group` + the card's own layout/hover classes;
 * this only adds the glow layer on top.
 */
export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={prefersReducedMotion ? undefined : handlePointerMove} className={className}>
      {children}
      {!prefersReducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle 220px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(255,255,255,0.16), transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
