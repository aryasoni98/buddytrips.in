export interface Destination {
  name: string;
  image: string;
  listings: number;
}

export const destinations: Destination[] = [
  {
    name: "Himachal Pradesh",
    image: "/images/destinations/himachal_pradesh.png",
    listings: 8,
  },
  {
    name: "Uttarakhand",
    image: "/images/destinations/uttarakhand.png",
    listings: 12,
  },
  {
    name: "Jammu & Kashmir",
    image: "/images/destinations/jammu_kashmir.png",
    listings: 5,
  },
  {
    name: "Rajasthan",
    image: "/images/destinations/rajasthan.png",
    listings: 6,
  },
  {
    name: "Meghalaya",
    image: "/images/destinations/meghalaya.png",
    listings: 4,
  },
  {
    name: "Goa",
    image: "/images/destinations/goa.png",
    listings: 3,
  },
];
