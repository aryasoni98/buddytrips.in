import Image from "next/image";
import { cn } from "@/lib/utils";

interface KenBurnsImageProps {
  src: string;
  alt: string;
  /** Two slightly different pan paths so adjacent images don't move in sync. */
  variant?: "a" | "b";
  duration?: number;
  /** Seconds; negative values desync the loop start like the original site. */
  delay?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  className?: string;
}

export function KenBurnsImage({
  src,
  alt,
  variant = "a",
  duration = 26,
  delay = 0,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 85,
  className,
}: KenBurnsImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      quality={quality}
      className={cn("object-cover object-center", className)}
      style={{
        animation: `${variant === "b" ? "bt-kenpan-b" : "bt-kenpan"} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
