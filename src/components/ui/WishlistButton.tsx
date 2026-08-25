"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { pressFeedback } from "@/lib/animations";

export function WishlistButton({ label }: { label: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setSaved((v) => !v)}
      whileTap={{ scale: 0.88 }}
      transition={pressFeedback}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from wishlist` : `Save ${label} to wishlist`}
      className="glass-photo absolute top-3 right-3 z-[2] inline-flex h-9 w-9 items-center justify-center rounded-full"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "#E11D48" : "none"} stroke="#E11D48" strokeWidth={2} aria-hidden="true">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    </motion.button>
  );
}
