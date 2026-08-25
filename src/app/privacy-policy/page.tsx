import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" path="/privacy-policy" lastUpdated="August 25, 2026">
      <p>
        This Privacy Policy explains how {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and
        protects your personal information when you visit the Site or contact us about a trip.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information you choose to give us, primarily when you reach out to plan a trip:</p>
      <ul>
        <li>
          <strong>Contact details</strong> - name, phone number, email address, and WhatsApp number when you
          message or email us;
        </li>
        <li>
          <strong>Trip details</strong> - destinations, dates, group size, and preferences you share so we can
          plan your itinerary;
        </li>
        <li>
          <strong>Traveler information</strong> - identification details or medical information you provide
          for booking or safety purposes, where a specific trek or tour requires it.
        </li>
      </ul>
      <p>
        We don&apos;t operate an account system or online checkout on the Site - enquiries and bookings are
        handled directly through WhatsApp, phone, or email, so we only hold the information you send us through
        those channels.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to enquiries and plan, confirm, and run your trip;</li>
        <li>To communicate booking confirmations, itinerary updates, and trip logistics;</li>
        <li>To meet legal, safety, or permit requirements tied to specific destinations;</li>
        <li>With your consent, to share offers or updates about future tours.</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>
        We share traveler information only where necessary to run your trip - for example, with local guides,
        accommodation partners, or transport providers, and with authorities where a permit requires traveler
        details. We don&apos;t sell your personal information to third parties.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep booking and traveler information for as long as needed to deliver your trip and meet our
        accounting and legal record-keeping obligations, after which we delete or anonymize it.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct, or delete the personal information we hold about you, or to stop
        contacting you with offers, at any time by emailing{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable steps to protect the information you share with us, but no method of transmission
        or storage is completely secure, and we can&apos;t guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>
        The Site and our services are intended for adults arranging travel, including on behalf of families.
        We don&apos;t knowingly collect personal information directly from children.
      </p>

      <h2>Cookies</h2>
      <p>
        See our <a href="/cookie-policy">Cookie Policy</a> for details on how the Site uses cookies and similar
        technologies.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of
        this page reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.
      </p>
    </LegalPageShell>
  );
}
