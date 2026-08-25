import type { Itinerary } from "@/data/itineraries";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/brand/buddytrips.png`,
    email: site.email,
    telephone: site.phone,
    sameAs: [site.instagram],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function getTravelAgencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/images/brand/buddytrips.png`,
    image: `${site.url}/images/hero/manali_kasol.jpg`,
    description:
      "Adventure travel agency offering curated tours and treks across Incredible India.",
    telephone: site.phone,
    email: site.email,
    areaServed: "IN",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.rating),
      reviewCount: String(site.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 2).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
      reviewBody: r.content,
    })),
    sameAs: [site.instagram],
  };
}

export function getTouristTripJsonLd(itinerary: Itinerary) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${itinerary.title} - ${itinerary.subtitle}`,
    description: itinerary.about,
    image: `${site.url}${itinerary.heroImage}`,
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
      telephone: site.phone,
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.days.map((day, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Thing",
          name: day.title,
          description: day.content.join(" "),
        },
      })),
    },
    ...(itinerary.price
      ? {
          offers: {
            "@type": "Offer",
            price: itinerary.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: itinerary.contact.whatsapp,
          },
        }
      : {}),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
