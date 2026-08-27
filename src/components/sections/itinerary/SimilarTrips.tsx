import { ChevronRightIcon, PinIcon, StarIcon } from "@/components/icons";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { tours } from "@/data/tours";

export function SimilarTrips() {
  const suggestions = tours.slice(0, 3);

  return (
    <section className="relative bg-bg-muted py-24">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="More adventures"
          title="Explore similar trips"
          subtitle="Other handpicked routes across the Himalayas and beyond."
        />

        <div className="grid grid-cols-1 gap-6 mobile:grid-cols-2 tablet:grid-cols-3">
          {suggestions.map((tour, i) => (
            <ScrollReveal key={tour.slug} delay={i * 80}>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-sm transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-50 overflow-hidden">
                  <KenBurnsImage
                    src={tour.image}
                    alt={tour.title}
                    variant={i % 2 === 1 ? "b" : "a"}
                    duration={24 + (i % 3) * 2}
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-300 ease-out-quint group-hover:scale-[1.07]"
                  />
                  <span className="glass-photo absolute top-3.5 left-3.5 rounded-full px-3 py-1.5 text-[0.75rem] font-semibold text-[#0A0A0A]">
                    {tour.offer}
                  </span>
                </div>
                <div className="p-4.5">
                  <h3 className="mb-2.5 text-heading-md text-fg">{tour.title}</h3>
                  <div className="flex items-center justify-between gap-3 text-body-sm text-fg-muted">
                    <span className="inline-flex items-center gap-1.5 font-bold text-green-700">
                      <StarIcon size={12} />
                      {tour.rating}
                    </span>
                    <span className="inline-flex items-center gap-1.25">
                      <PinIcon />
                      {tour.location}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-body-sm font-semibold text-blue-500">
                    Enquire on WhatsApp
                    <ChevronRightIcon size={14} />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
