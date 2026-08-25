const ITEMS = ["Himalayan treks", "Golden deserts", "Living root bridges", "Lake palaces", "Snow trails"];

function MarqueeRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-12 font-display text-[1.375rem] font-semibold tracking-[-0.01em] text-fg-subtle"
    >
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-12">
          {item}
          <span className="text-spark-500">✦</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-muted py-4.5">
      <div className="flex w-max gap-12 motion-safe:animate-[bt-marquee_38s_linear_infinite]">
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </div>
  );
}
