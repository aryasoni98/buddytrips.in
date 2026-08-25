import { JsonLd } from "@/components/seo/JsonLd";
import { Destinations } from "@/components/sections/Destinations";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { MetricsBand } from "@/components/sections/MetricsBand";
import { RegionExplorer } from "@/components/sections/RegionExplorer";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { getTravelAgencyJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getTravelAgencyJsonLd()} />
      <main>
        <Hero />
        <Marquee />
        <Destinations />
        <RegionExplorer />
        <FeaturedTours />
        <WhyChooseUs />
        <MetricsBand />
        <Testimonials />
        <FinalCTA />
      </main>
    </>
  );
}
