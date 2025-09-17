import React from "react";
import HeroSection from "@/Components/Hero";
// import CareerChoicesSection from "@/Components/CarrierChoicesSection";
// import WhyUs from "@/Components/WhyUs";
// import NewsEventsCarousel from "@/Components/NewsEvents";
import StatsCounter from "@/Components/StatsCounter";
import UniversitiesCarousel from "@/Components/Universities";
import StudentSuccessCarousel from "@/Components/StudentSuccess";
// import CountriesCarousel from "@/Components/Countries";
import AboutSection from "@/Components/About";
// import ContactSection from "@/Components/ContactSection";
import FindUsSection from "@/Components/FindUs";
import StudyDestinations from "@/Components/StudyDestinations";
import HeroTwo from "@/Components/Hero-two";

export default async function page() {
  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw]">
        <HeroTwo />
        {/* <HeroSection /> */}
        {/* <CareerChoicesSection /> */}
        <StudyDestinations />
        <AboutSection />
        {/* <WhyUs /> */}
        {/* <NewsEventsCarousel /> */}
        <StatsCounter />
        <UniversitiesCarousel />
        <StudentSuccessCarousel />
        {/* <CountriesCarousel /> */}
        {/* <ContactSection /> */}
        <FindUsSection />
      
      </div>
    </main>
  );
}
