import { StarIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";

export function Testimonials() {
  return (
    <section id="reviews" className="relative section-y">
      <div className="page-wrap">
        <SectionHeading eyebrow="Reviews" title="Loved by travelers across India" />

        <div className="grid grid-cols-1 items-start gap-6 mobile:grid-cols-2 tablet:grid-cols-3">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={(i % 3) * 80}>
              <div className="glass-light flex flex-col gap-4.5 rounded-xl p-7">
                <div className="flex gap-0.75 text-spark-500" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
                <p className="font-serif text-[1.3125rem] leading-[1.35] tracking-[-0.01em] text-fg italic">
                  {review.content}
                </p>
                <div className="mt-auto flex items-center gap-3 pt-1.5">
                  <span className="inline-flex h-10.5 w-10.5 items-center justify-center rounded-full bg-[image:var(--wk-gradient)] text-base font-bold text-white">
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-body-sm font-semibold text-fg">{review.name}</div>
                    <div className="text-[0.8125rem] text-fg-muted">{review.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
