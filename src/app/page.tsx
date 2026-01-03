"use client";

import TravelHero from "@/components/travel-hero";
import ParallaxBackground from "@/components/ui/parallax-background";
import LoadingScreen from "@/components/loading-screen";
import CustomCursor from "@/components/ui/custom-cursor";
import UniqueTestimonials from "@/components/ui/unique-testimonials";
import {
  Features,
  HowItWorks,
  Destinations,
  ItineraryPreview,
  Pricing,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <LoadingScreen duration={2000}>
        <ParallaxBackground>
          <main>
            <TravelHero />
            <div className="relative bg-black/70">
              <Features />
              <HowItWorks />
              <Destinations />
              <ItineraryPreview />
              <UniqueTestimonials />
              <Pricing />
              <CTA />
            </div>
            <Footer />
          </main>
        </ParallaxBackground>
      </LoadingScreen>
    </>
  );
}
