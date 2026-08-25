import { CameraIcon } from "@/components/icons";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Itinerary } from "@/data/itineraries";

interface GallerySpot {
  label: string;
  image?: string;
}

// Real photography only exists for two of these spots (pulled from the
// original PDF itinerary). The rest render as honest "photo pending" cards
// rather than reusing an unrelated stock photo and mislabeling it - swap in
// real shots as they become available.
const GALLERY_SPOTS: GallerySpot[] = [
  { label: "Tiger Falls", image: "/images/itineraries/chakrata/tiger-falls.jpg" },
  { label: "Moila Top", image: "/images/itineraries/chakrata/moila-top.jpg" },
  { label: "Chirmiri Sunset Point" },
  { label: "Budher Caves" },
  { label: "Resort at Chakrata" },
  { label: "Bonfire evening" },
];

export function GalleryStrip({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto mb-10 max-w-page px-8">
        <div className="mb-3.5 text-caption text-blue-500">The experience</div>
        <h2 className="font-display text-display-md text-fg">What you&apos;ll see</h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-linear-to-r from-bg to-transparent tablet:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-linear-to-l from-bg to-transparent tablet:w-32" />

        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-8 pb-4 tablet:px-[calc((100vw-75rem)/2+2rem)]">
          {GALLERY_SPOTS.map((spot, i) => (
            <ScrollReveal key={spot.label} delay={i * 60} className="shrink-0 snap-start">
              {spot.image ? (
                <div className="group relative h-100 w-62.5 overflow-hidden rounded-2xl shadow-md mobile-s:w-70">
                  <KenBurnsImage
                    src={spot.image}
                    alt={`${spot.label}, ${itinerary.title}`}
                    variant={i % 2 === 0 ? "a" : "b"}
                    duration={26 + i * 2}
                    sizes="280px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 to-transparent to-55% opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-4 bottom-4 translate-y-2 text-body-sm font-semibold text-white opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {spot.label}
                  </div>
                </div>
              ) : (
                <div className="glass-light flex h-100 w-62.5 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border-strong text-center mobile-s:w-70">
                  <CameraIcon size={32} className="text-fg-subtle" />
                  <div>
                    <div className="text-body-md font-semibold text-fg">{spot.label}</div>
                    <div className="mt-1 text-[0.8125rem] text-fg-subtle">Photo coming soon</div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
