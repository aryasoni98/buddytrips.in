import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${site.name} uses cookies and similar technologies on this website.`,
  alternates: { canonical: `${site.url}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageShell title="Cookie Policy" path="/cookie-policy" lastUpdated="August 25, 2026">
      <p>This Cookie Policy explains how {site.name} uses cookies and similar technologies on the Site.</p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files a website can store on your device to remember information about your
        visit. Websites also sometimes use similar technologies, like local storage, for the same purpose.
      </p>

      <h2>What this Site uses today</h2>
      <p>
        The Site is a straightforward informational and booking-enquiry site - we don&apos;t use advertising
        cookies, and we don&apos;t currently run third-party analytics tracking. The Site doesn&apos;t set any
        non-essential cookies today; light and dark appearance simply follows your device&apos;s system
        setting automatically, with nothing stored on your device to remember it.
      </p>

      <h2>Third-party content</h2>
      <p>
        If you follow a link from the Site to a third-party service - such as WhatsApp or Instagram - that
        service may set its own cookies once you&apos;re on their platform. Those cookies are governed by that
        service&apos;s own policy, not this one.
      </p>

      <h2>Managing cookies</h2>
      <p>
        Most browsers let you view, delete, and block cookies through their settings. Since the Site doesn&apos;t
        rely on non-essential cookies to function, blocking cookies shouldn&apos;t affect your ability to
        browse tour information here - though it may affect how third-party sites you visit from our links
        behave.
      </p>

      <h2>If this changes</h2>
      <p>
        If we add analytics or marketing tools that use non-essential cookies in the future, we&apos;ll update
        this page and, where required, ask for your consent first.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPageShell>
  );
}
