import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="page-wrap pb-16 mobile:pb-20 tablet:pb-24">
      <ScrollReveal className="relative overflow-hidden rounded-[1.5rem] bg-bg-inverse shadow-xl mobile-s:rounded-[2rem]">
        <div
          aria-hidden="true"
          className="absolute -top-30 left-1/2 h-170 w-170 -translate-x-1/2 rounded-full bg-[image:var(--wk-gradient-conic)] opacity-55 blur-[4.375rem] motion-safe:animate-[bt-spin_30s_linear_infinite]"
        />
        <div className="relative z-[1] px-5 py-14 text-center mobile-s:px-8 mobile:py-22">
          <h2 className="mx-auto mb-4.5 max-w-190 text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.04] font-bold tracking-[-0.024em] text-fg-on-dark font-display">
            Your next adventure starts with <span className="text-gradient-animate">better trips</span>.
          </h2>
          <p className="mx-auto mb-9 max-w-130 text-body-lg text-fg-on-dark-muted">
            Tell us where you want to go. We&apos;ll handle the rest - guides, stays, routes, and the good
            memories.
          </p>
          <GradientButton href={site.whatsapp} variant="white">
            Start your journey
          </GradientButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
