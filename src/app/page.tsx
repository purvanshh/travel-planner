import TravelHero from "@/components/travel-hero";
import Navbar from "@/components/navbar";
import ParallaxBackground from "@/components/ui/parallax-background";
import {
  Features,
  HowItWorks,
  Destinations,
  ItineraryPreview,
  Testimonials,
  Pricing,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <ParallaxBackground>
      <main>
        <Navbar />
        <TravelHero />
        <div className="relative bg-black/60 backdrop-blur-sm">
          <Features />
          <HowItWorks />
          <Destinations />
          <ItineraryPreview />
          <Testimonials />
          <Pricing />
          <CTA />
        </div>
        <Footer />
      </main>
    </ParallaxBackground>
  );
}
