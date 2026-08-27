import { CountUp } from "@/components/ui/CountUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const METRICS = [
  { target: 25, suffix: "k+", label: "Happy travelers", href: "#reviews" },
  { target: 150, suffix: "+", label: "Destinations covered", href: "#destinations" },
  { target: 500, suffix: "+", label: "Successful trips", href: "#tours" },
  { target: 98, suffix: "%", label: "Satisfaction rate", href: "#why" },
];

export function MetricsBand() {
  return (
    <section className="page-wrap">
      <ScrollReveal className="relative overflow-hidden rounded-2xl bg-[image:var(--wk-gradient)] shadow-xl">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full mix-blend-overlay opacity-40">
          <filter id="bt-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={2} stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#bt-noise)" />
        </svg>
        <div className="relative z-[1] grid grid-cols-2 gap-8 px-6 py-12 mobile:px-12 mobile:py-16 tablet:grid-cols-4">
          {METRICS.map((metric) => (
            <a key={metric.label} href={metric.href} className="group text-center">
              <CountUp
                target={metric.target}
                suffix={metric.suffix}
                className="block font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-none font-bold tracking-[-0.02em] text-white tabular-nums"
              />
              <div className="mt-2 text-body-lg text-white/85 group-hover:text-white">{metric.label}</div>
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
