import Navbar from "@/components/Navbar";
import Hero from "@/sections/HomeHero";
import AboutPreview from "@/sections/AboutPreview";
import EventsPreview from "@/sections/EventsPreview";
import WatchPreview from "@/sections/WatchPreview";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <WatchPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
