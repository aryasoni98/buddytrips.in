import Image from "next/image";
import { CheckCircleIcon, PinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineNode } from "@/components/ui/TimelineNode";
import { TimelineTrack } from "@/components/ui/TimelineTrack";
import type { Itinerary } from "@/data/itineraries";

export function DayTimeline({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section id="timeline" className="relative py-24">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="Your journey"
          title="Day by day itinerary"
          subtitle="Every stop, every view, every night - mapped out so you know exactly what each day holds."
        />

        <TimelineTrack>
          {itinerary.days.map((day, i) => (
            <TimelineNode key={day.day} number={String(i)} align={i % 2 === 0 ? "left" : "right"}>
              <div className="glass rounded-2xl p-8">
                <div className="mb-2 text-caption text-blue-500">{day.day}</div>
                <h3 className="mb-3 font-display text-[1.5rem] font-semibold text-fg">{day.title}</h3>

                {day.subtitle && (
                  <span className="glass-light mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-body-sm font-semibold text-fg">
                    <PinIcon size={13} className="text-green-500" />
                    {day.subtitle}
                  </span>
                )}

                <ul className="mb-5 flex flex-col gap-2.5">
                  {day.content.map((line, lineIndex) => (
                    <li key={lineIndex} className="flex gap-3 text-body-md leading-[1.6] text-fg-muted">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--wk-gradient)]"
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                {day.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {day.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border-soft bg-bg-elevated/50 px-3 py-1.5 text-[0.8125rem] font-medium text-fg-muted"
                      >
                        <CheckCircleIcon size={14} className="text-green-500" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {day.image && (
                  <div className="relative mt-5 h-50 w-full overflow-hidden rounded-xl">
                    <Image src={day.image} alt={day.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                  </div>
                )}
              </div>
            </TimelineNode>
          ))}
        </TimelineTrack>
      </div>
    </section>
  );
}
