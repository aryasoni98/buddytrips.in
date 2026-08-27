"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { CalendarIcon, ChevronDownIcon, MountainIcon, PinIcon } from "@/components/icons";
import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { easeOutExpo } from "@/lib/animations";
import type { Itinerary } from "@/data/itineraries";

export function ItineraryHero({ itinerary }: { itinerary: Itinerary }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], [0, -100]);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y: imageY }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: easeOutExpo }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 motion-safe:animate-[bt-hero-zoom_20s_var(--ease-in-out)_infinite]">
          <Image
            src={itinerary.heroImage}
            alt={`${itinerary.location ?? itinerary.title} mountain landscape`}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent to-60%" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-x-0 bottom-0 z-[1] px-[var(--page-gutter)] pb-16 text-center tablet:pb-20"
      >
        <ScrollReveal className="mx-auto mb-6 inline-flex">
          <span className="glass-photo inline-flex items-center gap-2.5 rounded-full px-3.75 py-2">
            <span className="h-1.75 w-1.75 rounded-full bg-spark-500 shadow-[0_0_8px_var(--wk-spark-500)] motion-safe:animate-[bt-pulse_1.8s_var(--ease-in-out)_infinite]" />
            <span className="text-[0.8125rem] font-semibold tracking-[0.04em] text-[#0A0A0A]">
              {itinerary.subtitle}
            </span>
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="mx-auto mb-4 font-display text-[clamp(3rem,8vw,6rem)] leading-[0.98] font-bold tracking-[-0.03em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            {itinerary.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto mb-7 max-w-130 text-[1.25rem] text-fg-on-dark-muted">{itinerary.tagline}</p>
        </ScrollReveal>

        <ScrollReveal delay={300} className="mx-auto mb-9 flex flex-wrap items-center justify-center gap-2.5">
          {itinerary.location && (
            <span className="glass-photo inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.75 text-[0.8125rem] font-semibold text-[#0A0A0A]">
              <PinIcon size={13} />
              {itinerary.location}
            </span>
          )}
          {itinerary.altitude && (
            <span className="glass-photo inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.75 text-[0.8125rem] font-semibold text-[#0A0A0A]">
              <MountainIcon size={14} />
              {itinerary.altitude}
            </span>
          )}
          {itinerary.season && (
            <span className="glass-photo inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.75 text-[0.8125rem] font-semibold text-[#0A0A0A]">
              <CalendarIcon size={14} />
              {itinerary.season}
            </span>
          )}
        </ScrollReveal>

        <ScrollReveal delay={400} className="flex flex-wrap items-center justify-center gap-4.5">
          <GradientButton href={itinerary.contact.whatsapp}>Book this trip</GradientButton>
          <GradientButton href="#timeline" variant="glass">
            View itinerary
          </GradientButton>
        </ScrollReveal>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-5 z-[1] flex flex-col items-center gap-1.5 text-fg-on-dark-muted"
      >
        <span className="text-[0.6875rem] font-semibold tracking-[0.06em] uppercase">Scroll to explore</span>
        <ChevronDownIcon size={20} className="motion-safe:animate-[bt-bounce-sm_1.6s_var(--ease-in-out)_infinite]" />
      </motion.div>
    </section>
  );
}
