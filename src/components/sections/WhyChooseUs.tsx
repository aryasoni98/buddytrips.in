import { ArrowUpRightIcon } from "@/components/icons";
import { GradientButton } from "@/components/ui/GradientButton";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatLink } from "@/components/ui/StatLink";
import { site } from "@/data/site";

const FEATURES = [
  {
    title: "Curated Indian experiences",
    description:
      "Carefully selected destinations across India - from the majestic Himalayas to pristine beaches, customized for you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Expert local guides",
    description: "Experienced guides who know India's hidden gems and cultural heritage inside out.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M12 22s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden py-24">
      <div aria-hidden="true" className="pointer-events-none absolute top-[10%] -right-20 h-90 w-90 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18),transparent_70%)] blur-[3.125rem]" />

      <div className="relative z-[1] mx-auto grid max-w-page grid-cols-1 items-center gap-9 px-8 mobile-l:grid-cols-[0.9fr_1.1fr] mobile-l:gap-16">
        <ScrollReveal className="relative hidden h-120 mobile-l:block">
          <div className="absolute top-0 left-0 h-90 w-[74%] overflow-hidden rounded-2xl border border-white/60 shadow-xl motion-safe:animate-[bt-float_7s_var(--ease-in-out)_infinite]">
            <KenBurnsImage src="/images/why/valley.jpg" alt="Himalayan river valley" sizes="(max-width: 880px) 100vw, 30vw" />
          </div>
          <div className="absolute right-0 bottom-2.5 h-60 w-1/2 overflow-hidden rounded-full border-4 border-bg shadow-lg [animation-delay:-2s] motion-safe:animate-[bt-float-b_8s_var(--ease-in-out)_infinite]">
            <KenBurnsImage src="/images/why/temple.jpg" alt="Himalayan ridge temple" variant="b" delay={-4} sizes="(max-width: 880px) 100vw, 20vw" />
          </div>

          <div className="glass-photo absolute bottom-9 left-2 z-[4] flex items-center gap-3.25 rounded-2xl px-4.5 py-3.5 [animation-delay:-3s] motion-safe:animate-[bt-float_6s_var(--ease-in-out)_infinite]">
            <span className="inline-flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[image:var(--wk-gradient)] text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="text-body-sm font-bold text-[#0A0A0A]">Trusted by</div>
              <div className="text-[0.75rem] text-[#0A0A0A]/60">thousands of happy travelers</div>
            </div>
          </div>

          <div className="absolute -bottom-1.5 left-[46%] flex h-21 w-21 items-center justify-center rounded-full bg-bg-muted shadow-md">
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-green-300 motion-safe:animate-[bt-spin_20s_linear_infinite]" />
            <span className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-[image:var(--wk-gradient)] text-white">
              <ArrowUpRightIcon size={22} />
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mb-3.5 text-caption text-blue-500">Why choose us</div>
          <h2 className="mb-4 font-display text-display-md text-fg">Why choose Buddy Trips</h2>
          <p className="mb-9 text-body-lg text-fg-muted">
            Your trusted travel partner for exploring Incredible India. Expert guidance, personalized service,
            unforgettable memories.
          </p>

          <div className="flex flex-col gap-4.5">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="glass-light flex gap-4.5 rounded-2xl p-5.5">
                <span className="inline-flex h-13.5 w-13.5 shrink-0 items-center justify-center rounded-[0.875rem] bg-[image:var(--wk-gradient)] text-white">
                  {feature.icon}
                </span>
                <div>
                  <h3 className="mb-1.5 text-heading-md text-fg">{feature.title}</h3>
                  <p className="text-[0.9375rem] leading-[1.55] text-fg-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5.5">
            <GradientButton href={site.whatsapp}>Start booking</GradientButton>
            <StatLink
              href="#reviews"
              value={site.metrics.travelers}
              label="happy travelers across India"
              layout="inline"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
