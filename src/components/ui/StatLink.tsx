import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatLinkProps {
  href: string;
  value: ReactNode;
  label: string;
  layout?: "stack" | "inline";
  className?: string;
}

export function StatLink({ href, value, label, layout = "stack", className }: StatLinkProps) {
  if (layout === "inline") {
    return (
      <a href={href} className={cn("group flex items-baseline gap-2", className)}>
        <span className="text-[1.75rem] font-bold tracking-[-0.02em] text-fg tabular-nums group-hover:text-blue-500">
          {value}
        </span>
        <span className="max-w-30 text-[0.875rem] leading-[1.3] text-fg-muted">{label}</span>
      </a>
    );
  }

  return (
    <a href={href} className={cn("group", className)}>
      <div className="text-[1.625rem] font-bold tracking-[-0.02em] text-fg tabular-nums group-hover:text-blue-500">
        {value}
      </div>
      <div className="text-body-sm text-fg-muted">{label}</div>
    </a>
  );
}
