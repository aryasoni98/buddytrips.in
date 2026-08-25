"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { GradientButton } from "@/components/ui/GradientButton";
import { site } from "@/data/site";
import { springDefault } from "@/lib/animations";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={springDefault}
          className="glass-strong mx-4 mt-2.5 rounded-xl p-4"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-3 py-3.5 text-base font-semibold text-fg transition-colors hover:bg-bg-elevated"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <GradientButton href={site.whatsapp} className="mt-2 w-full justify-center">
            Start your journey
          </GradientButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
