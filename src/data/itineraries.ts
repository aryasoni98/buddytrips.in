import { site } from "@/data/site";

export interface ItineraryDay {
  day: string;
  title: string;
  subtitle?: string;
  content: string[];
  highlights?: string[];
  image?: string;
}

export interface Itinerary {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  tagline: string;
  about: string;
  aboutHighlights: string[];
  days: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
    whatsapp: string;
  };
  price?: string;
  rating?: string;
  reviewCount?: number;
  location?: string;
  altitude?: string;
  season?: string;
}

export const itineraries: Itinerary[] = [
  {
    slug: "chakrata",
    title: "Chakrata",
    subtitle: "1N / 2 Days",
    heroImage: "/images/destinations/uttarakhand.png",
    tagline: "A magical hill station in the sun-kissed Himalayas",
    about:
      "A magical hill station embellished by the sun-kissed Himalayan Ranges, the beauteous hill station of Chakrata is seated at an elevation of 2,118 metres above sea level. This secluded hilly town is cradled in the Dehradun district and is an ideal weekend getaway for backpackers.",
    aboutHighlights: ["Moila Top", "Tiger Waterfall", "Chirmiri Sunset View Point"],
    altitude: "2,118 m",
    season: "Mar – Jun · Sep – Nov",
    location: "Dehradun, Uttarakhand",
    days: [
      {
        day: "Day 0",
        title: "Departure from Delhi",
        content: [
          "Boarding bus / traveler from Delhi.",
          "Pick up point: Akshardham Metro Station at 10:00 PM.",
          "Afterward, you will get a small briefing from the trip coordinator.",
          "Overnight journey from Delhi to Chakrata.",
          "2-3 halt stops for snacks during journey (borne by customer).",
        ],
        highlights: ["Akshardham pickup", "Overnight journey", "Trip briefing"],
        image: "/images/itineraries/chakrata/bus-departure.jpg",
      },
      {
        day: "Day 1",
        title: "Moila Top & Budher Caves",
        subtitle: "Moila Top",
        content: [
          "Reach Chakrata early morning, freshen-up then have breakfast and enjoy beautiful view from resort.",
          "After a little rest, get ready to visit Budher Caves and Moila Top which is an easy trek from Lokhandi Snow View Point.",
          "Reach back to resort in the evening.",
          "Bonfire and Music session at hotel (subject to availability).",
          "Dinner and overnight stay at Chakrata hotel.",
        ],
        highlights: ["Budher Caves", "Moila Top trek", "Bonfire & music", "Resort stay"],
        image: "/images/itineraries/chakrata/moila-top.jpg",
      },
      {
        day: "Day 2",
        title: "Tiger Falls & Chirmiri Sunset",
        subtitle: "Tiger Falls | Chirmiri Sunset View Point",
        content: [
          "Enjoy beautiful morning from the resort and have breakfast.",
          "After breakfast, we will check-out from the resort and visit Tiger Falls which is around 30 km drive and further 1 km trek.",
          "Tiger Falls is the highest and most beautiful waterfall of Uttarakhand.",
          "Visit Chirmiri Sunset Point in the evening and enjoy breathtaking 360-degree landscapes of Himalayas.",
          "Depart back to Delhi, overnight journey from Chakrata to Delhi.",
          "Reach Delhi by 5:00 AM.",
        ],
        highlights: ["Tiger Falls (30km + 1km trek)", "Chirmiri Sunset Point", "360° Himalayan views", "Return to Delhi"],
      },
    ],
    inclusions: [
      "Travel by AC & comfortable traveler / bus",
      "Accommodation for 1 night at Chakrata in hotel / camps",
      "Total 3 meals during the trip (2 breakfast & 1 dinner)",
      "All sightseeing mentioned in the itinerary",
      "Bonfire with music (subject to availability)",
      "Trip captain during whole trip",
      "24x7 help assistance",
    ],
    exclusions: [
      "5% extra GST",
      "Extra drinks, food, tea and snacks",
      "Ticket for any sightseeing or extra activity outside the camp area",
      "Travel insurance and other benefits",
      "Anything which is not mentioned in inclusions",
      "Heater charges extra",
      "Cost escalation due to any unforeseen reason like weather, road condition, landslides etc.",
    ],
    // Sourced from site.ts rather than re-typed literals, so this can't drift
    // out of sync with the rest of the site's contact info.
    contact: {
      phone: site.phone,
      email: site.email,
      website: site.url,
      whatsapp: site.whatsapp,
    },
  },
];

export function getItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}
