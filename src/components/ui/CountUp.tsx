"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { easeOutQuart } from "@/lib/animations";

interface CountUpProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ target, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(0, target, {
      duration: reduce ? 0 : 1.5,
      ease: easeOutQuart,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
