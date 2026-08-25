"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { CheckCircleIcon, XCircleIcon } from "@/components/icons";
import type { Itinerary } from "@/data/itineraries";
import { easeOutQuint } from "@/lib/animations";

function ListCard({
  title,
  icon,
  iconClassName,
  items,
  itemIcon,
  fromX,
}: {
  title: string;
  icon: ReactNode;
  iconClassName: string;
  items: string[];
  itemIcon: ReactNode;
  fromX: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: easeOutQuint }}
      className="glass rounded-2xl p-10"
    >
      <div className="mb-6 flex items-center gap-3.5">
        <span className={`inline-flex h-11.5 w-11.5 items-center justify-center rounded-full ${iconClassName}`}>
          {icon}
        </span>
        <h3 className="text-[1.25rem] font-semibold text-fg">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl px-2 py-1.5 text-body-md leading-[1.5] text-fg-muted transition-colors hover:bg-bg-elevated"
          >
            <span className="mt-0.5 shrink-0">{itemIcon}</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function InclusionsExclusions({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-6 px-8 tablet:grid-cols-2">
        <ListCard
          title="What's included"
          icon={<CheckCircleIcon size={22} className="text-white" />}
          iconClassName="bg-[image:var(--wk-gradient)]"
          items={itinerary.inclusions}
          itemIcon={<CheckCircleIcon size={18} className="text-green-500" />}
          fromX={-40}
        />
        <ListCard
          title="Not included"
          icon={<XCircleIcon size={22} className="text-white" />}
          iconClassName="bg-spark-500"
          items={itinerary.exclusions}
          itemIcon={<XCircleIcon size={18} className="text-fg-subtle" />}
          fromX={40}
        />
      </div>
    </section>
  );
}
