import Link from "next/link";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

const NAV_LINKS = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/#tours", label: "Featured tours" },
  { href: "/#why", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/cookie-policy", label: "Cookie policy" },
  { href: "/terms-and-conditions", label: "Terms & conditions" },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg transition-transform duration-200 ease-out-quint hover:scale-110 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      {children}
    </a>
  );
}

function DotGrid() {
  return (
    <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
      {Array.from({ length: 16 }, (_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-fg/12" />
      ))}
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,var(--bg)_0%,color-mix(in_srgb,var(--wk-blue-500)_9%,var(--bg))_100%)] px-8 pt-20 pb-16">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-0.18em] z-0 text-center font-display text-[clamp(4.5rem,16vw,12rem)] leading-none font-bold tracking-[-0.06em] text-fg/[0.045] select-none"
      >
        buddytrips
      </p>

      <div className="relative z-[1] mx-auto grid max-w-page grid-cols-1 items-start gap-14 mobile-l:grid-cols-[1fr_auto_1fr] mobile-l:gap-10">
        <div className="flex max-w-72 flex-col">
          <div className="mb-6 flex gap-2.5">
            <SocialIcon href={site.instagram} label="Instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href={`mailto:${site.email}`} label="Email">
              <MailIcon size={18} />
            </SocialIcon>
            <SocialIcon href={site.whatsapp} label="WhatsApp">
              <WhatsAppIcon size={18} />
            </SocialIcon>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="mb-3 text-[1.125rem] font-bold tracking-[-0.025em] text-fg"
          >
            {site.email}
          </a>
          <p className="mb-8 max-w-62 text-body-sm leading-[1.55] text-fg-muted">
            Adventure tours and treks across Incredible India. Expert guides, genuine stays.
          </p>
          <Link
            href="/terms-of-use"
            className="text-body-sm text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
          >
            Terms of use
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 self-stretch text-center">
          <DotGrid />
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-fg px-8 py-3.5 text-[0.9375rem] font-semibold text-bg transition-transform duration-200 ease-out-quint hover:scale-[1.04] active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            Start your journey
          </a>
          <DotGrid />
          <p className="text-[0.75rem] tracking-[0.01em] text-fg-subtle">
            © {year} Buddy Trips. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col items-start gap-3 mobile-l:items-end">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] font-semibold text-fg transition-colors duration-200 hover:text-blue-500"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] font-semibold text-fg transition-colors duration-200 hover:text-blue-500"
              >
                {link.label}
              </a>
            ),
          )}
          <Link
            href="/privacy-policy"
            className="mt-4 text-body-sm text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
          >
            Privacy policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
