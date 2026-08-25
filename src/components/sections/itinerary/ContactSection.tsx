import { GlobeIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { GradientButton } from "@/components/ui/GradientButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";
import type { Itinerary } from "@/data/itineraries";

export function ContactSection({ itinerary }: { itinerary: Itinerary }) {
  const methods = [
    {
      icon: <PhoneIcon size={22} />,
      label: "Call us",
      value: itinerary.contact.phone,
      href: `tel:${itinerary.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <MailIcon size={22} />,
      label: "Email us",
      value: itinerary.contact.email,
      href: `mailto:${itinerary.contact.email}`,
    },
    {
      icon: <GlobeIcon size={22} />,
      label: "Visit us online",
      value: itinerary.contact.website.replace(/^https?:\/\//, ""),
      href: itinerary.contact.website,
    },
  ];

  return (
    // Fixed dark (not bg-inverse) - glass-dark's cards are a fixed near-black
    // glass by design (see globals.css), so the section behind them must stay
    // fixed dark too. bg-inverse flips to white in dark mode, which would
    // wash the cards out to flat gray.
    <section className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-page px-8">
        <ScrollReveal className="mx-auto mb-14 max-w-160 text-center">
          <div className="mb-3.5 text-caption text-blue-300">Get in touch</div>
          <h2 className="mb-4 font-display text-display-md text-white">Plan it with us directly</h2>
          <p className="text-body-lg text-white/85">
            Questions about the route, dates, or a custom batch? Reach out any way that&apos;s easiest.
          </p>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-1 gap-6 tablet:grid-cols-3">
          {methods.map((method, i) => (
            <ScrollReveal key={method.label} delay={i * 100}>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-dark group flex flex-col items-center gap-3 rounded-2xl p-8 text-center transition-transform duration-300 ease-out-quint hover:-translate-y-1.5"
              >
                <span className="inline-flex h-13.5 w-13.5 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-[image:var(--wk-gradient)]">
                  {method.icon}
                </span>
                <div className="text-body-sm text-white/85">{method.label}</div>
                <div className="text-body-md font-semibold text-white">{method.value}</div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300} className="flex flex-wrap items-center justify-center gap-4.5">
          <GradientButton href={itinerary.contact.whatsapp} showSpark={false}>
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </GradientButton>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="glass-dark inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-[image:var(--wk-gradient)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
