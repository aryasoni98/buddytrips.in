export interface Tour {
  slug: string;
  title: string;
  image: string;
  offer: string;
  price: string;
  rating: string;
  reviewCount: number;
  location: string;
  description: string;
}

export const tours: Tour[] = [
  {
    slug: "kashmir-paradise",
    title: "Kashmir Paradise",
    image: "/images/tours/kashmir_paradise.png",
    offer: "30% off",
    price: "₹18,999",
    rating: "5.0",
    reviewCount: 623,
    location: "Jammu & Kashmir",
    description:
      "Shikara rides on Dal Lake, meadow walks in Gulmarg and pine-valley drives through Pahalgam and Sonamarg - the most photographed corner of the Himalayas.",
  },
  {
    slug: "manali-kasol-adventure",
    title: "Manali & Kasol Adventure",
    image: "/images/tours/manali_kasol.png",
    offer: "15% off",
    price: "₹12,999",
    rating: "4.8",
    reviewCount: 324,
    location: "Himachal Pradesh",
    description:
      "Solang Valley adventure sports, the high pass at Rohtang and riverside cafés in Kasol and Old Manali - the classic Himachal loop for first-timers and repeat regulars alike.",
  },
  {
    slug: "meghalaya-abode-of-clouds",
    title: "Meghalaya - Abode of Clouds",
    image: "/images/tours/meghalaya.png",
    offer: "25% off",
    price: "₹19,999",
    rating: "4.9",
    reviewCount: 567,
    location: "Meghalaya",
    description:
      "Living root bridges near Cherrapunji, glass-clear waters at Dawki and Asia's cleanest village, Mawlynnong - the lush northeast at its most magical after the monsoon.",
  },
  {
    slug: "chopta-tungnath-trek",
    title: "Chopta & Tungnath Trek",
    image: "/images/tours/chopta_tungnath.png",
    offer: "20% off",
    price: "₹8,999",
    rating: "4.9",
    reviewCount: 456,
    location: "Uttarakhand",
    description:
      "A high-altitude trek to the Tungnath temple through Chopta's rhododendron forests - the 'mini Switzerland of India,' without the crowds.",
  },
  {
    slug: "udaipur-city-of-lakes",
    title: "Udaipur - City of Lakes",
    image: "/images/tours/udaipur_city.png",
    offer: "18% off",
    price: "₹15,999",
    rating: "4.9",
    reviewCount: 445,
    location: "Rajasthan",
    description:
      "Lake palaces, the City Palace's marble courtyards and a golden-hour desert safari toward the Sam Dunes - royal Rajasthan at its most cinematic.",
  },
  {
    slug: "kedarkantha-winter-trek",
    title: "Kedarkantha Winter Trek",
    image: "/images/tours/kedarkantha.png",
    offer: "25% off",
    price: "₹9,999",
    rating: "4.7",
    reviewCount: 289,
    location: "Uttarakhand",
    description:
      "A snow-covered summit trek to 3,810m with 360° Himalayan views - one of India's most accessible winter treks, guided gear and camping included.",
  },
];
