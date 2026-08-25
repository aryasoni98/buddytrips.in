import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${site.name} website.`,
  alternates: { canonical: `${site.url}/terms-of-use` },
};

export default function TermsOfUsePage() {
  return (
    <LegalPageShell title="Terms of Use" path="/terms-of-use" lastUpdated="August 25, 2026">
      <p>
        These Terms of Use govern your access to and use of the {site.name} website at{" "}
        <a href={site.url}>{site.url}</a> (the &ldquo;Site&rdquo;). By browsing or using the Site, you agree to
        these terms. If you do not agree, please do not use the Site.
      </p>

      <h2>Who we are</h2>
      <p>
        {site.name} is an adventure travel company organizing curated tours and treks across India. You can
        reach us at <a href={`mailto:${site.email}`}>{site.email}</a>, by phone at {site.phone}, or via{" "}
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <h2>Use of the Site</h2>
      <p>
        The Site is provided for your personal, non-commercial use to learn about our tours and to contact us
        about booking a trip. You agree not to:
      </p>
      <ul>
        <li>Use the Site for any unlawful purpose or in violation of any applicable law;</li>
        <li>Attempt to gain unauthorized access to the Site, its systems, or related networks;</li>
        <li>Scrape, mirror, or republish substantial portions of the Site&apos;s content without our permission;</li>
        <li>Interfere with the Site&apos;s operation, security, or availability.</li>
      </ul>

      <h2>Content and intellectual property</h2>
      <p>
        Unless otherwise noted, the text, photographs, graphics, and design of the Site are owned by or
        licensed to {site.name} and are protected by applicable intellectual property laws. You may view and
        share pages of the Site for personal, non-commercial purposes, but may not reproduce, modify, or
        distribute our content without written permission.
      </p>

      <h2>No booking contract formed on this Site</h2>
      <p>
        The Site describes our tours for informational purposes. Browsing the Site does not itself create a
        booking or contract between you and {site.name}. Bookings are confirmed only once we&apos;ve
        exchanged trip details and confirmation with you directly, as described in our{" "}
        <a href="/terms-and-conditions">Terms &amp; Conditions</a>.
      </p>

      <h2>Accuracy of information</h2>
      <p>
        We take reasonable care to keep tour descriptions, pricing, and availability information accurate and
        current, but travel conditions, local regulations, and seasonal factors can change. Please confirm
        current details with us directly before finalizing travel plans.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Site may link to third-party services, such as WhatsApp or Instagram. We aren&apos;t responsible
        for the content, policies, or practices of those third-party services.
      </p>

      <h2>Disclaimer and limitation of liability</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; without warranties of any kind, to the fullest extent
        permitted by law. {site.name} is not liable for any indirect, incidental, or consequential damages
        arising from your use of the Site. This section does not limit liability that cannot be excluded under
        Indian law.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms of Use from time to time. The &ldquo;Last updated&rdquo; date at the top of
        this page reflects the most recent revision. Continued use of the Site after changes take effect means
        you accept the updated terms.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, and disputes are subject to the courts of India.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPageShell>
  );
}
