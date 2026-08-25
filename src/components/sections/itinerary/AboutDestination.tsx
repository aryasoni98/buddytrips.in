import { MountainIcon, PinIcon } from "@/components/icons";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Itinerary } from "@/data/itineraries";

export function AboutDestination({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-page grid-cols-1 items-center gap-9 px-8 tablet:grid-cols-2 tablet:gap-16">
        <ScrollReveal>
          <div className="mb-3.5 text-caption text-blue-500">About the destination</div>
          <h2 className="mb-5 font-display text-display-md text-fg">A hidden gem in the Himalayas</h2>
          <p className="mb-6 text-[1.0625rem] leading-[1.7] text-fg-muted">{itinerary.about}</p>

          <div className="mb-8 flex flex-wrap gap-2.25">
            {itinerary.aboutHighlights.map((spot) => (
              <span
                key={spot}
                className="inline-flex items-center gap-1.75 rounded-full bg-[image:var(--wk-gradient-soft)] px-3.5 py-2 text-body-sm font-semibold text-fg"
              >
                <PinIcon size={13} className="text-blue-500" />
                {spot}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-7.5">
            {itinerary.altitude && (
              <div>
                <div className="text-[1.625rem] font-bold tracking-[-0.02em] text-fg tabular-nums">
                  {itinerary.altitude}
                </div>
                <div className="text-body-sm text-fg-muted">Altitude</div>
              </div>
            )}
            <div className="h-8.5 w-px bg-border" aria-hidden="true" />
            <div>
              <div className="text-[1.625rem] font-bold tracking-[-0.02em] text-fg tabular-nums">
                {itinerary.subtitle}
              </div>
              <div className="text-body-sm text-fg-muted">Duration</div>
            </div>
            <div className="h-8.5 w-px bg-border" aria-hidden="true" />
            <div>
              <div className="text-[1.625rem] font-bold tracking-[-0.02em] text-fg tabular-nums">
                {itinerary.days.length}
              </div>
              <div className="text-body-sm text-fg-muted">Day plan</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120} className="relative h-100 tablet:h-110">
          <div className="absolute top-0 left-0 h-80 w-[60%] overflow-hidden rounded-2xl border border-white/60 shadow-xl motion-safe:animate-[bt-float_7s_var(--ease-in-out)_infinite]">
            <KenBurnsImage
              src="/images/hero/chopta_tungnath.jpg"
              alt="Himalayan mountain view, Uttarakhand"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="absolute right-0 bottom-0 h-60 w-[45%] overflow-hidden rounded-2xl border border-white/60 shadow-lg [animation-delay:-2s] motion-safe:animate-[bt-float-b_8s_var(--ease-in-out)_infinite]">
            <KenBurnsImage
              src="/images/why/valley.jpg"
              alt="Himalayan river valley"
              variant="b"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
          <div className="glass-photo absolute bottom-6 left-4 z-[4] flex items-center gap-2 rounded-full px-4 py-2.5 [animation-delay:-3s] motion-safe:animate-[bt-float_6s_var(--ease-in-out)_infinite]">
            <MountainIcon size={16} className="text-blue-500" />
            <span className="text-body-sm font-bold text-[#0A0A0A]">Weekend getaway</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
