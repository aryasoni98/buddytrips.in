import { BedIcon, BusIcon, HeadsetIcon, UtensilsIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Itinerary } from "@/data/itineraries";
import type { ReactNode } from "react";

function OverviewCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group glass-light flex h-full flex-col gap-4 rounded-2xl p-6 transition-[transform,box-shadow] duration-300 ease-out-quint hover:-translate-y-1.5 hover:shadow-lg">
        <span className="inline-flex h-13.5 w-13.5 items-center justify-center rounded-2xl bg-[image:var(--wk-gradient)] text-white transition-transform duration-300 ease-out-quint group-hover:scale-110">
          {icon}
        </span>
        <div>
          <h3 className="mb-1.5 text-heading-md text-fg">{title}</h3>
          <p className="text-body-sm leading-[1.55] text-fg-muted">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function TripOverview({ itinerary }: { itinerary: Itinerary }) {
  const nights = itinerary.subtitle.split("/")[0]?.trim() ?? itinerary.subtitle;

  const cards = [
    {
      icon: <BusIcon size={24} />,
      title: "Travel",
      description: "AC comfortable traveler / bus, round trip from Delhi.",
    },
    {
      icon: <BedIcon size={24} />,
      title: "Stay",
      description: `${nights} at ${itinerary.title} in hotel / camps.`,
    },
    {
      icon: <UtensilsIcon size={24} />,
      title: "Meals",
      description: "3 meals through the trip (2 breakfast + 1 dinner).",
    },
    {
      icon: <HeadsetIcon size={24} />,
      title: "Support",
      description: "A trip captain with you throughout, plus 24x7 assistance.",
    },
  ];

  return (
    <section className="relative bg-bg-muted py-24">
      <div className="mx-auto max-w-page px-8">
        <div className="grid grid-cols-1 gap-5 mobile:grid-cols-2 tablet:grid-cols-4">
          {cards.map((card, i) => (
            <OverviewCard key={card.title} {...card} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
