"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/#explore", label: "Regions" },
  { href: "/#tours", label: "Tours" },
  { href: "/#why", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] border-b transition-[padding,box-shadow,border-color] duration-300 ease-out-quint",
        scrolled ? "glass border-border py-2.5" : "border-transparent py-3.5",
      )}
    >
      <div className="page-wrap flex items-center justify-between gap-3">
        <Link href="/#top" className="flex min-w-0 items-center gap-2 mobile-s:gap-2.5">
          <Image
            src="/images/brand/buddytrips.png"
            alt="Buddy Trips"
            width={46}
            height={46}
            className="h-10 w-10 shrink-0 rounded-xl object-cover mobile-s:h-11.5 mobile-s:w-11.5"
          />
          <span className="truncate text-[1.125rem] font-bold tracking-[-0.03em] text-fg mobile-s:text-[1.3125rem]">
            buddytrips
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8.5 mobile-l:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden mobile-l:block">
            <GradientButton href={site.whatsapp}>Start your journey</GradientButton>
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl text-fg mobile-l:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
