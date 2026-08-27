import { ChevronRightIcon, PinIcon, StarIcon } from "@/components/icons";
import { KenBurnsImage } from "@/components/ui/KenBurnsImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Spotlight } from "@/components/ui/Spotlight";
import { WishlistButton } from "@/components/ui/WishlistButton";
import { site } from "@/data/site";
import { tours } from "@/data/tours";

export function FeaturedTours() {
  return (
    <section id="tours" className="relative bg-bg-muted section-y">
      <div className="page-wrap">
        <ScrollReveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-150">
            <div className="mb-3.5 text-caption text-blue-500">Featured tours</div>
            <h2 className="mb-3.5 font-display text-display-md text-fg">Featured adventure tours</h2>
            <p className="text-body-lg text-fg-muted">
              Handpicked adventures across India. From thrilling treks to cultural journeys.
            </p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.25 rounded-full border border-border-strong px-5.5 py-3 text-body-sm font-semibold text-fg transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-bg-elevated"
          >
            View all tours
            <ChevronRightIcon size={16} />
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 mobile:grid-cols-2 tablet:grid-cols-3">
          {tours.map((tour, i) => (
            <ScrollReveal key={tour.slug} delay={(i % 3) * 80}>
              <Spotlight className="group relative overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-sm transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-1.5 hover:shadow-lg">
                <div className="relative h-57.5 overflow-hidden">
                  <KenBurnsImage
                    src={tour.image}
                    alt={tour.title}
                    variant={i % 2 === 1 ? "b" : "a"}
                    duration={24 + (i % 3) * 2}
                    delay={-i * 3}
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-300 ease-out-quint group-hover:scale-[1.07]"
                  />
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-spark-500 px-3 py-1.5 text-[0.75rem] font-bold text-white shadow-[0_6px_16px_-6px_rgba(249,115,22,0.7)]">
                    {tour.offer}
                  </span>
                  <WishlistButton label={tour.title} />
                  <div className="glass-photo absolute bottom-3.5 left-3.5 rounded-full px-2.75 py-1.25 text-[0.75rem] font-semibold text-[#0A0A0A]">
                    From {tour.price}
                  </div>
                </div>
                <div className="p-4.5 pt-4.5">
                  <h3 className="mb-3 text-heading-md text-fg">{tour.title}</h3>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1.5 text-body-sm text-fg-muted">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[image:var(--wk-gradient-soft)] px-2.25 py-0.75 font-bold text-green-700">
                        <StarIcon size={12} />
                        {tour.rating}
                      </span>
                      <span>{tour.reviewCount} ratings</span>
                    </div>
                    <div className="inline-flex items-center gap-1.25 text-body-sm text-fg-muted">
                      <PinIcon />
                      {tour.location}
                    </div>
                  </div>
                </div>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${tour.title} on WhatsApp`}
                  className="absolute inset-0 z-[1]"
                />
              </Spotlight>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
