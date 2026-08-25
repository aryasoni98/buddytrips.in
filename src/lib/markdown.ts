import { destinations } from "@/data/destinations";
import type { Itinerary } from "@/data/itineraries";
import { regions } from "@/data/regions";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { tours, type Tour } from "@/data/tours";

export function generateHomeMarkdown(): string {
  return [
    "# Buddy Trips - Adventure Tours & Treks Across India",
    "",
    `> ${site.description}`,
    "",
    "## Destinations",
    ...destinations.map((d) => `- ${d.name} - ${d.listings} listings`),
    "",
    "## Featured Tours",
    ...tours.map(
      (t) =>
        `- **${t.title}** - ${t.price} (${t.offer}) - ${t.location} - ${t.rating}★ (${t.reviewCount} ratings)`,
    ),
    "",
    "## Regions",
    ...regions.map(
      (r) => `- **${r.name}** - ${r.tag} - Best season: ${r.season} - ${r.days}`,
    ),
    "",
    "## Reviews",
    ...reviews.map((r) => `- "${r.content}" - ${r.name}, ${r.role}`),
    "",
    "## Contact",
    `- Phone: ${site.phone}`,
    `- Email: ${site.email}`,
    `- WhatsApp: ${site.whatsapp}`,
    `- Instagram: ${site.instagram}`,
  ].join("\n");
}

export function generateItineraryMarkdown(itinerary: Itinerary): string {
  return [
    `# ${itinerary.title} - ${itinerary.subtitle}`,
    "",
    `> ${itinerary.about}`,
    "",
    "## Day by day",
    ...itinerary.days.flatMap((day) => [
      `### ${day.day}: ${day.title}`,
      ...day.content.map((line) => `- ${line}`),
      "",
    ]),
    "## Inclusions",
    ...itinerary.inclusions.map((line) => `- ${line}`),
    "",
    "## Exclusions",
    ...itinerary.exclusions.map((line) => `- ${line}`),
    "",
    "## Contact",
    `- Phone: ${itinerary.contact.phone}`,
    `- Email: ${itinerary.contact.email}`,
    `- WhatsApp: ${itinerary.contact.whatsapp}`,
  ].join("\n");
}

export function generateTourMarkdown(tour: Tour): string {
  return [
    `# ${tour.title}`,
    "",
    `> ${tour.description}`,
    "",
    `- Price: ${tour.price} (${tour.offer})`,
    `- Location: ${tour.location}`,
    `- Rating: ${tour.rating}★ (${tour.reviewCount} ratings)`,
  ].join("\n");
}
