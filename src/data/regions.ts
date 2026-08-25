export interface Region {
  key: "himachal" | "uttarakhand" | "kashmir" | "rajasthan" | "meghalaya";
  name: string;
  image: string;
  tag: string;
  altitude: string;
  season: string;
  days: string;
  blurb: string;
  spots: string[];
  /** 12 values (Jan–Dec), 0–100 scale, drives the monthly visit chart. */
  months: number[];
}

export const regions: Region[] = [
  {
    key: "himachal",
    name: "Himachal Pradesh",
    image: "/images/destinations/himachal_pradesh.png",
    tag: "Snow peaks & pine valleys",
    altitude: "2,050 m",
    season: "Mar – Jun",
    days: "5–7 days",
    blurb:
      "Alpine meadows, riverside cafés and high mountain passes - the classic Himalayan escape for first-timers and repeat trekkers alike.",
    spots: ["Solang Valley", "Rohtang Pass", "Kasol", "Old Manali", "Jibhi"],
    months: [35, 40, 62, 80, 88, 70, 45, 42, 58, 75, 66, 48],
  },
  {
    key: "uttarakhand",
    name: "Uttarakhand",
    image: "/images/destinations/uttarakhand.png",
    tag: "Trekker's paradise",
    altitude: "3,810 m",
    season: "Apr – Jun · Dec – Feb",
    days: "6–8 days",
    blurb:
      "From summer alpine treks to powder-snow winter trails, the Garhwal Himalayas pack the widest range of high-altitude adventure in India.",
    spots: ["Chopta", "Tungnath", "Kedarkantha", "Kuari Pass", "Nainital"],
    months: [70, 72, 60, 78, 84, 66, 40, 38, 55, 72, 68, 82],
  },
  {
    key: "kashmir",
    name: "Jammu & Kashmir",
    image: "/images/destinations/jammu_kashmir.png",
    tag: "Paradise on earth",
    altitude: "2,730 m",
    season: "Mar – Oct",
    days: "6–8 days",
    blurb:
      "Shikara rides on Dal Lake, meadows in Gulmarg and pine valleys in Pahalgam - the most photographed landscapes in the country.",
    spots: ["Gulmarg", "Pahalgam", "Sonamarg", "Dal Lake", "Betaab Valley"],
    months: [30, 38, 58, 76, 86, 84, 70, 68, 72, 66, 44, 34],
  },
  {
    key: "rajasthan",
    name: "Rajasthan",
    image: "/images/destinations/rajasthan.png",
    tag: "Royal desert heritage",
    altitude: "Plains",
    season: "Oct – Mar",
    days: "5–7 days",
    blurb:
      "Lake palaces, golden forts and camel safaris under desert stars - the warmth of India's most regal state, best savoured in winter.",
    spots: ["Udaipur", "Jaisalmer", "City Palace", "Desert Safari", "Sam Dunes"],
    months: [82, 76, 58, 38, 24, 18, 22, 28, 46, 80, 90, 86],
  },
  {
    key: "meghalaya",
    name: "Meghalaya",
    image: "/images/destinations/meghalaya.png",
    tag: "Abode of clouds",
    altitude: "1,496 m",
    season: "Oct – Apr",
    days: "6–8 days",
    blurb:
      "Living root bridges, turquoise rivers and Asia's cleanest village - the lush, misty northeast at its most magical after the monsoon.",
    spots: ["Living Root Bridges", "Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
    months: [66, 70, 72, 68, 44, 28, 24, 30, 52, 84, 82, 74],
  },
];
