import { ChevronRightIcon } from "@/components/icons";
import { GradientButton } from "@/components/ui/GradientButton";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatLink } from "@/components/ui/StatLink";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 mobile-l:pt-43 mobile-l:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-15 -left-10 h-120 w-120 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(30,100,230,0.45),transparent_70%)] blur-[3.125rem] motion-safe:animate-[bt-orb_20s_var(--ease-in-out)_infinite]" />
        <div className="absolute top-30 -right-15 h-130 w-130 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(34,197,94,0.40),transparent_70%)] blur-[3.4375rem] motion-safe:animate-[bt-orb_24s_var(--ease-in-out)_infinite_reverse]" />
        <div className="absolute bottom-10 left-[42%] h-70 w-70 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.30),transparent_70%)] blur-[3.125rem] motion-safe:animate-[bt-orb_18s_var(--ease-in-out)_infinite]" />
      </div>

      <div className="relative z-[2] mx-auto grid max-w-page grid-cols-1 gap-9 px-8 mobile-l:grid-cols-[1.05fr_0.95fr] mobile-l:gap-14 mobile-l:items-center">
        <div>
          <ScrollReveal className="glass-light mb-6.5 inline-flex items-center gap-2.5 rounded-full px-3.75 py-2">
            <span className="h-1.75 w-1.75 rounded-full bg-spark-500 shadow-[0_0_8px_var(--wk-spark-500)] motion-safe:animate-[bt-pulse_1.8s_var(--ease-in-out)_infinite]" />
            <span className="text-[0.8125rem] font-semibold tracking-[0.04em] text-fg">Welcome to Buddy Trips</span>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1 className="mb-5.5 font-display text-display-xl text-fg">
              Discover incredible
              <br />
              <span className="text-gradient-animate">India</span>. Your
              <br />
              adventure awaits.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mb-8.5 max-w-120 text-body-lg text-fg-muted">
              From Himalayan peaks to golden deserts - explore India&apos;s hidden gems. Authentic adventures,
              unforgettable memories.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="mb-10.5 flex flex-wrap items-center gap-4.5">
            <GradientButton href={site.whatsapp}>
              Start your journey
              <ChevronRightIcon />
            </GradientButton>
            <GradientButton href="#tours" variant="glass">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[image:var(--wk-gradient-soft)] text-[0.6875rem] text-blue-500">
                ▷
              </span>
              Explore tours
            </GradientButton>
          </ScrollReveal>

          <ScrollReveal delay={320} className="flex items-center gap-7.5">
            <StatLink href="#reviews" value={site.metrics.travelers} label="Happy travelers" />
            <div className="h-8.5 w-px bg-border" aria-hidden="true" />
            <StatLink href="#destinations" value={site.metrics.destinations} label="Destinations" />
            <div className="h-8.5 w-px bg-border" aria-hidden="true" />
            <StatLink href="#reviews" value={`${site.rating}★`} label="Avg rating" />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={120} className="relative hidden h-135 mobile-l:block">
          <div className="absolute top-0 left-[8%] h-82.5 w-[62%] overflow-hidden rounded-2xl border border-white/60 shadow-xl motion-safe:animate-[bt-float_7s_var(--ease-in-out)_infinite]">
            <KenBurnsImage src="/images/hero/manali_kasol.jpg" alt="Manali & Kasol" priority sizes="(max-width: 880px) 100vw, 30vw" />
            <div className="glass-photo absolute bottom-3.5 left-3.5 rounded-xl px-3.5 py-2">
              <div className="text-body-sm font-bold text-[#0A0A0A]">Manali &amp; Kasol</div>
              <div className="text-[0.6875rem] text-[#0A0A0A]/60">Himachal Pradesh</div>
            </div>
          </div>
          <div className="absolute top-47 right-0 h-60 w-[46%] overflow-hidden rounded-2xl border border-white/60 shadow-xl [animation-delay:-2s] motion-safe:animate-[bt-float-b_8s_var(--ease-in-out)_infinite]">
            <KenBurnsImage src="/images/hero/chopta_tungnath.jpg" alt="Chopta & Tungnath" variant="b" sizes="(max-width: 880px) 100vw, 25vw" />
            <div className="glass-photo absolute bottom-3 left-3 rounded-xl px-3 py-1.75">
              <div className="text-[0.8125rem] font-bold text-[#0A0A0A]">Chopta &amp; Tungnath</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-50 w-[42%] overflow-hidden rounded-2xl border border-white/60 shadow-lg [animation-delay:-1s] motion-safe:animate-[bt-float-c_9s_var(--ease-in-out)_infinite]">
            <KenBurnsImage src="/images/hero/kedarkantha.jpg" alt="Kedarkantha" delay={-5} sizes="(max-width: 880px) 100vw, 22vw" />
          </div>

          <div className="glass-photo absolute top-35.5 -left-2.5 z-5 flex items-center gap-2.75 rounded-2xl px-4 py-3 [animation-delay:-3s] motion-safe:animate-[bt-float_6s_var(--ease-in-out)_infinite]">
            <div className="flex" aria-hidden="true">
              <span className="h-7.5 w-7.5 rounded-full border-2 border-white bg-[image:var(--wk-gradient)]" />
              <span className="-ml-2.5 h-7.5 w-7.5 rounded-full border-2 border-white bg-[linear-gradient(135deg,#4A9CFF,#4ADE80)]" />
              <span className="-ml-2.5 h-7.5 w-7.5 rounded-full border-2 border-white bg-[linear-gradient(135deg,#F97316,#FDBA74)]" />
            </div>
            <div>
              <div className="text-body-sm font-bold leading-tight text-[#0A0A0A]">{site.metrics.trips} trips</div>
              <div className="text-[0.6875rem] text-[#0A0A0A]/60">completed this year</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
