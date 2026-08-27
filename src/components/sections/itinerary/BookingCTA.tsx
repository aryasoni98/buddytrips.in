import { PhoneIcon } from "@/components/icons";
import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Itinerary } from "@/data/itineraries";

export function BookingCTA({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section className="page-wrap">
      <ScrollReveal className="relative overflow-hidden rounded-2xl bg-[image:var(--wk-gradient)] shadow-xl">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 h-170 w-170 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[image:var(--wk-gradient-conic)] opacity-40 blur-[4.375rem] motion-safe:animate-[bt-spin_30s_linear_infinite]"
        />
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full mix-blend-overlay opacity-40">
          <filter id="bt-noise-cta">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={2} stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#bt-noise-cta)" />
        </svg>

        <div className="relative z-[1] px-8 py-20 text-center">
          <h2 className="mx-auto mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white">
            Ready for {itinerary.title}?
          </h2>
          <p className="mx-auto mb-9 max-w-110 text-body-lg text-white/85">
            Book your spot now. Limited seats per batch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4.5">
            <GradientButton href={itinerary.contact.whatsapp} variant="white">
              Book on WhatsApp
            </GradientButton>
            <GradientButton href={`tel:${itinerary.contact.phone.replace(/\s/g, "")}`} variant="glass">
              <PhoneIcon size={16} />
              Call {itinerary.contact.phone}
            </GradientButton>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
