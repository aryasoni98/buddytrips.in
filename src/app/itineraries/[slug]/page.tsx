import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutDestination } from "@/components/sections/itinerary/AboutDestination";
import { BookingCTA } from "@/components/sections/itinerary/BookingCTA";
import { ContactSection } from "@/components/sections/itinerary/ContactSection";
import { DayTimeline } from "@/components/sections/itinerary/DayTimeline";
import { GalleryStrip } from "@/components/sections/itinerary/GalleryStrip";
import { InclusionsExclusions } from "@/components/sections/itinerary/InclusionsExclusions";
import { ItineraryHero } from "@/components/sections/itinerary/ItineraryHero";
import { SimilarTrips } from "@/components/sections/itinerary/SimilarTrips";
import { TripOverview } from "@/components/sections/itinerary/TripOverview";
import { getItinerary, itineraries } from "@/data/itineraries";
import { site } from "@/data/site";
import { getBreadcrumbJsonLd, getTouristTripJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({ slug: itinerary.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) return {};

  const title = `${itinerary.title} - ${itinerary.subtitle}`;
  const description = itinerary.about.slice(0, 155);
  const canonical = `${site.url}/itineraries/${itinerary.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      images: [{ url: itinerary.heroImage, alt: itinerary.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [itinerary.heroImage],
    },
  };
}

export default async function ItineraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const itinerary = getItinerary(slug);
  if (!itinerary) notFound();

  return (
    <>
      <JsonLd
        data={[
          getTouristTripJsonLd(itinerary),
          getBreadcrumbJsonLd([
            { name: "Home", url: site.url },
            { name: itinerary.title, url: `${site.url}/itineraries/${itinerary.slug}` },
          ]),
        ]}
      />
      <main>
        <ItineraryHero itinerary={itinerary} />
        <AboutDestination itinerary={itinerary} />
        <TripOverview itinerary={itinerary} />
        <DayTimeline itinerary={itinerary} />
        <InclusionsExclusions itinerary={itinerary} />
        <GalleryStrip itinerary={itinerary} />
        <BookingCTA itinerary={itinerary} />
        <ContactSection itinerary={itinerary} />
        <SimilarTrips />
      </main>
    </>
  );
}
