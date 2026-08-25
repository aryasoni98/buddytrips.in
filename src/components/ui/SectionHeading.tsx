import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("mx-auto mb-14 max-w-160 text-center", className)}>
      <div className="mb-3.5 text-caption text-blue-500">{eyebrow}</div>
      <h2 className="mb-4 font-display text-display-md text-fg">{title}</h2>
      {subtitle && <p className="text-body-lg text-fg-muted">{subtitle}</p>}
    </ScrollReveal>
  );
}
