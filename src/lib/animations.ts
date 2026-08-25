import type { Transition, Variants } from "motion/react";

/**
 * Spring physics - DESIGN.md §6 specifies stiffness/mass but its damping
 * values (1.0, 0.8) are far below critical damping at these stiffnesses,
 * which would oscillate hard rather than the "no bounce" / "press feedback"
 * they're labeled as. Damping here is corrected to actually match each
 * spring's stated intent; stiffness and mass are unchanged.
 */
export const springDefault: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 34,
  mass: 1,
};

export const springBounce: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 14,
  mass: 1,
};

export const pressFeedback: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 0.8,
};

export const easeOutQuint = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Matches the original count-up easing (1500ms, quart-out). */
export const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Scroll reveal - opacity 0→1, translateY 30px→0, 600ms ease-out-quint.
 * `custom` (the per-instance delay in ms) is fed in via the component's
 * `custom` prop so each instance can stagger independently.
 */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delayMs = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuint, delay: delayMs / 1000 },
  }),
};
