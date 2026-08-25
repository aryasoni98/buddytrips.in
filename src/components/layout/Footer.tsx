import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const EXPLORE_LINKS = [
  { href: "#destinations", label: "Destinations" },
  { href: "#tours", label: "Featured tours" },
  { href: "#why", label: "Why us" },
  { href: "#reviews", label: "Reviews" },
];

const LEGAL_LINKS = [
  { href: "/terms-of-use", label: "Terms of use" },
  { href: "/terms-and-conditions", label: "Terms & conditions" },
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/cookie-policy", label: "Cookie policy" },
];

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-[image:var(--wk-gradient)] hover:text-white"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-8 pt-16 pb-9">
      <div className="mx-auto max-w-page">
        <div className="mb-12 grid grid-cols-1 gap-12 mobile:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src="/images/brand/buddytrips.png"
                alt="Buddy Trips logo"
                width={42}
                height={42}
                className="h-10.5 w-10.5 rounded-xl object-cover"
              />
              <span className="text-xl font-bold tracking-[-0.03em] text-fg">buddytrips</span>
            </div>
            <p className="mb-5 max-w-85 text-body-sm text-fg-muted">
              Your trusted travel companion for exploring Incredible India - genuine experiences across diverse
              destinations, from majestic mountains to pristine beaches.
            </p>
            <div className="flex gap-2.5">
              <SocialLink href={site.instagram} label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <div className="mb-4 text-body-sm font-bold text-fg">Explore</div>
            <div className="flex flex-col gap-2.5">
              {EXPLORE_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.9375rem] text-fg-muted transition-colors hover:text-blue-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-body-sm font-bold text-fg">Legal</div>
            <div className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.9375rem] text-fg-muted transition-colors hover:text-blue-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="text-body-sm text-fg-subtle">© {year} Buddy Trips. All rights reserved.</div>
          <div className="text-body-sm text-fg-subtle">
            {site.email} · Support {site.supportHours}
          </div>
        </div>
      </div>
    </footer>
  );
}
