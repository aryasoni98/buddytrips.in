"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const MONTH_LABELS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

interface MonthlyChartProps {
  months: number[];
}

export function MonthlyChart({ months }: MonthlyChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const peak = Math.max(...months);

  return (
    <div ref={ref} className="flex items-end gap-1.5">
      {months.map((value, i) => {
        const isPeak = value >= peak - 4;
        return (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="relative flex h-30 w-full items-end">
              <div
                className={cn(
                  "w-full rounded-t-md rounded-b-sm transition-[height] duration-700 ease-out-quint",
                  isPeak
                    ? "bg-[image:var(--wk-gradient)] shadow-[0_6px_16px_-6px_rgba(34,197,94,0.5)]"
                    : "bg-[image:var(--wk-gradient-soft)]",
                )}
                style={{
                  height: isInView ? `${value}%` : "0%",
                  transitionDelay: `${i * 35}ms`,
                }}
              />
              {isPeak && (
                <span
                  aria-hidden="true"
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[0.6875rem] text-spark-500"
                >
                  ✦
                </span>
              )}
            </div>
            <span className={cn("text-[0.6875rem] font-semibold", isPeak ? "text-fg" : "text-fg-subtle")}>
              {MONTH_LABELS[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
