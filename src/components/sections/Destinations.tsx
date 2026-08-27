import { ArrowUpRightIcon } from "@/components/icons";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { destinations } from "@/data/destinations";

export function Destinations() {
  return (
    <section id="destinations" className="relative section-y">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="Destinations"
          title="Discover India's top destinations"
          subtitle="From majestic mountains to golden deserts and beaches - India's incredible diversity, one trip at a time."
        />

        <div className="grid grid-cols-1 gap-5 mobile-s:grid-cols-2 mobile:grid-cols-3">
          {destinations.map((dest, i) => {
            const delay = i === 0 ? 0 : i % 2 === 1 ? 80 : 160;
            return (
              <ScrollReveal key={dest.name} delay={delay}>
                <Spotlight className="group relative block min-h-55 overflow-hidden rounded-xl shadow-md transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-1 hover:shadow-lg">
                  <a href="#tours" aria-label={dest.name} className="absolute inset-0 z-[1]" />
                  <KenBurnsImage
                    src={dest.image}
                    alt={dest.name}
                    variant={i % 2 === 0 ? "a" : "b"}
                    duration={22 + (i % 3) * 2}
                    delay={-i * 3}
                    className="transition-transform duration-300 ease-out-quint group-hover:scale-[1.06]"
                    sizes="(max-width: 480px) 100vw, (max-width: 720px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent to-55%" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-lg font-bold tracking-[-0.02em] text-white">{dest.name}</div>
                      <div className="text-body-sm text-white/78">{dest.listings} listings</div>
                    </div>
                    <span className="inline-flex h-10.5 w-10.5 items-center justify-center rounded-full bg-white/85 text-[#0A0A0A] backdrop-blur-md transition-transform duration-200 group-hover:rotate-45 group-hover:bg-[image:var(--wk-gradient)] group-hover:text-white">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                </Spotlight>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
