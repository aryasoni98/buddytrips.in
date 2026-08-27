"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { PinIcon } from "@/components/icons";
import { MonthlyChart } from "@/components/ui/MonthlyChart";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { regions } from "@/data/regions";
import { easeOutQuint } from "@/lib/animations";
import { cn } from "@/lib/utils";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border-soft bg-bg-elevated/50 p-3.5">
      <div className="mb-1.25 text-[0.6875rem] font-semibold tracking-[0.06em] text-fg-subtle uppercase">{label}</div>
      <div className="text-body-sm font-bold text-fg">{value}</div>
    </div>
  );
}

export function RegionExplorer() {
  const [active, setActive] = useState(0);
  const region = regions[active];

  return (
    <section id="explore" className="relative overflow-hidden section-y">
      <div aria-hidden="true" className="pointer-events-none absolute top-[8%] -left-22.5 h-95 w-95 rounded-full bg-[radial-gradient(circle,rgba(30,100,230,0.14),transparent_70%)] blur-[3.4375rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[4%] -right-22.5 h-95 w-95 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.14),transparent_70%)] blur-[3.4375rem]" />

      <div className="page-wrap relative z-[1]">
        <SectionHeading
          eyebrow="Explore by region"
          title="A closer look at every region"
          subtitle="Signature spots, the months worth booking, and the views waiting for you."
        />

        <ScrollReveal className="mb-8.5 flex flex-wrap justify-center gap-2.5">
          {regions.map((r, i) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "rounded-full border px-4.5 py-2.5 text-body-sm font-semibold transition-all duration-[220ms] ease-out-quint",
                i === active
                  ? "border-transparent bg-[image:var(--wk-gradient)] text-white shadow-[0_8px_20px_-8px_rgba(30,100,230,0.5)]"
                  : "border-border-strong text-fg-muted hover:border-blue-300 hover:text-fg",
              )}
            >
              {r.name}
            </button>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="glass-strong relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={region.key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: easeOutQuint }}
                className="grid grid-cols-1 mobile-l:grid-cols-[1.05fr_1.2fr]"
              >
                <div className="group relative min-h-120 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    sizes="(max-width: 880px) 100vw, 45vw"
                    className="object-cover transition-transform duration-500 ease-out-quint group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.42)_0%,transparent_38%)]" />
                  <div className="glass-photo absolute top-5.5 left-5.5 inline-flex items-center gap-2 rounded-full px-3.5 py-2">
                    <span className="h-1.75 w-1.75 rounded-full bg-spark-500" />
                    <span className="text-[0.75rem] font-bold text-[#0A0A0A]">{region.tag}</span>
                  </div>
                  <div className="absolute inset-x-5.5 bottom-5.5">
                    <div className="font-display text-[1.875rem] font-bold leading-tight tracking-[-0.02em] text-white">
                      {region.name}
                    </div>
                  </div>
                </div>

                <div className="p-5 mobile-s:p-8.5 mobile-l:p-9">
                  <p className="mb-5.5 text-body-md text-fg-muted">{region.blurb}</p>
                  <div className="mb-6.5 grid grid-cols-1 gap-3 mobile-s:grid-cols-3">
                    <StatCard label="Best season" value={region.season} />
                    <StatCard label="Max altitude" value={region.altitude} />
                    <StatCard label="Ideal trip" value={region.days} />
                  </div>
                  <div className="mb-2 text-caption text-fg-subtle">Signature spots</div>
                  <div className="mb-7 flex flex-wrap gap-2.25">
                    {region.spots.map((spot) => (
                      <span
                        key={spot}
                        className="glass-light inline-flex items-center gap-1.75 rounded-full px-3.5 py-2 text-body-sm font-semibold text-fg"
                      >
                        <PinIcon size={13} className="text-green-500" /> {spot}
                      </span>
                    ))}
                  </div>
                  <div className="mb-3.5 flex items-baseline justify-between">
                    <div className="text-caption text-fg-subtle">Best time to visit</div>
                    <div className="inline-flex items-center gap-1.5 text-[0.75rem] text-fg-muted">
                      <span className="text-spark-500">✦</span> peak months
                    </div>
                  </div>
                  <MonthlyChart months={region.months} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
