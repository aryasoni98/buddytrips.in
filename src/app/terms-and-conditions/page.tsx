import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/LegalPageShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Booking terms, cancellation policy, and traveler responsibilities for ${site.name} tours.`,
  alternates: { canonical: `${site.url}/terms-and-conditions` },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell title="Terms & Conditions" path="/terms-and-conditions" lastUpdated="August 25, 2026">
      <p>
        These Terms &amp; Conditions apply to any tour, trek, or travel package you book with {site.name}{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By confirming a booking with us - by message, call, email, or
        deposit payment - you agree to these terms.
      </p>

      <h2>1. Booking &amp; confirmation</h2>
      <p>
        Enquiries made through the Site, WhatsApp, phone, or email are quotes and availability checks, not
        confirmed bookings. A booking is confirmed once we&apos;ve agreed on the itinerary, price, and payment
        with you and issued a confirmation. Please review your confirmed itinerary and traveler details
        carefully - you&apos;re responsible for the accuracy of names, dates, and contact information you give
        us.
      </p>

      <h2>2. Pricing &amp; payment</h2>
      <p>
        Prices shown on the Site are indicative starting prices per person and can vary with season, group
        size, and inclusions; we&apos;ll confirm the final price with you before you pay anything. We typically
        require an advance payment to hold your booking, with the balance due before departure - exact terms
        are confirmed at the time of booking. Prices are in Indian Rupees (₹) unless stated otherwise.
      </p>

      <h2>3. Cancellations &amp; refunds</h2>
      <p>
        If you need to cancel a confirmed booking, tell us as early as possible. Because we commit to
        transport, stays, and permits on your behalf ahead of your trip, cancellations made closer to the
        departure date carry a higher forfeiture of the amount paid. We&apos;ll confirm the specific
        cancellation schedule that applies to your tour at the time of booking. Refunds, where due, are
        processed to the original payment method within a reasonable time after cancellation is confirmed in
        writing.
      </p>

      <h2>4. Changes to itineraries</h2>
      <p>
        Weather, road conditions, local regulations, or safety concerns can require us to alter an itinerary -
        including routes, accommodation, or activities - before or during a trip. We&apos;ll always aim to
        offer a comparable alternative and will let you know as soon as reasonably possible when this happens.
      </p>

      <h2>5. Traveler responsibilities</h2>
      <p>You&apos;re responsible for:</p>
      <ul>
        <li>Being reasonably fit and prepared for the physical demands of your chosen trek or activity;</li>
        <li>Carrying valid identification and any permits required for the region you&apos;re visiting;</li>
        <li>Disclosing relevant medical conditions to us and your trip leader before departure;</li>
        <li>Arranging your own travel insurance, which we strongly recommend for all treks and adventure travel;</li>
        <li>Following the safety instructions of your guides and trip leaders during the tour.</li>
      </ul>

      <h2>6. Assumption of risk</h2>
      <p>
        Trekking, mountain travel, and other adventure activities carry inherent risks, including those related
        to terrain, altitude, and weather. You participate in these activities voluntarily and at your own
        risk. We take reasonable care in planning routes and engaging experienced guides, but we cannot
        guarantee against every risk inherent to outdoor adventure travel.
      </p>

      <h2>7. Force majeure</h2>
      <p>
        We&apos;re not liable for failure to perform any part of a tour due to circumstances beyond our
        reasonable control, including natural disasters, extreme weather, government restrictions, strikes, or
        civil unrest. Where a trip is affected by such circumstances, we&apos;ll work with you in good faith on
        rescheduling or a partial refund where recoverable costs allow.
      </p>

      <h2>8. Photography</h2>
      <p>
        We may take photographs or videos during group tours for our own marketing use. Let your trip leader
        know if you&apos;d prefer not to be included, and we&apos;ll respect that.
      </p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of India, and disputes are subject to the courts of India.</p>

      <h2>Contact</h2>
      <p>
        For booking questions, reach us at <a href={`mailto:${site.email}`}>{site.email}</a>,{" "}
        {site.phone}, or{" "}
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
    </LegalPageShell>
  );
}
