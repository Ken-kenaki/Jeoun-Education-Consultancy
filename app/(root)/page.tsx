import React from "react";
import CareerChoicesSection from "@/Components/CarrierChoicesSection";
import StatsCounter from "@/Components/StatsCounter";
import UniversitiesCarousel from "@/Components/Universities";
import StudentSuccessCarousel from "@/Components/StudentSuccess";
import AboutSection from "@/Components/About";
import ContactSection from "@/Components/ContactSection";
import FindUsSection from "@/Components/FindUs";
import StudyDestinations from "@/Components/StudyDestinations";
import HeroTwo from "@/Components/Hero-two";
import Values from "@/Components/Values";
import GallerySlider from "@/Components/GallerySlider";

export default async function page() {
  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw]">
        <HeroTwo />
        <StudyDestinations />
        <Values />
        <CareerChoicesSection />
        <StatsCounter />
        <GallerySlider />
        <UniversitiesCarousel />
        <StudentSuccessCarousel />
        <ContactSection />
        <FindUsSection />
      </div>
    </main>
  );
}
