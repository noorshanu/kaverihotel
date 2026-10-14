import { AboutSection } from "@/components/AboutSection";
import { BanquetSection } from "@/components/BanquetSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { Navbar } from "@/components/Navbar";
import { RoomsSection } from "@/components/RoomsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VideoShowcaseSection } from "@/components/VideoShowcaseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <RoomsSection />
        <ServicesSection />
        <BanquetSection />
        <GallerySection />
        <VideoShowcaseSection />
        <TestimonialsSection />
        <CtaSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
