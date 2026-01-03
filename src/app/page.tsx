import TravelHero from "@/components/travel-hero";
import Navbar from "@/components/navbar";
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
    <main>
      <Navbar />
      <TravelHero />
      <Features />
      <HowItWorks />
      <Destinations />
      <ItineraryPreview />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
