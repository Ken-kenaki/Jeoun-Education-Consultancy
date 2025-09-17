"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

interface DestinationItem {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  buttonText: string;
  buttonLink: string;
}

export default function StudyDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(entry.target.querySelectorAll(".animate-item"), {
              y: 50,
              opacity: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const sections = sectionRef.current.querySelectorAll(".destination-section");
      sections.forEach((section) => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  const destinations: DestinationItem[] = [
    {
      title: "Study in South Korea",
      description:
        "With March 2026 intake open, study in South Korea with GPA as low as 2.5, IELTS 5.5, and gap years accepted. Choose from degree programs, language training, or vocational programs. Free IELTS and Korean language preparation available.",
      image: "/south-korea.jpg",
      imagePosition: "left",
      buttonText: "EXPLORE KOREA PROGRAMS",
      buttonLink: "/south-korea",
    },
    {
      title: "Study in Australia",
      description:
        "Australia offers world-class education with top universities like Melbourne, ANU, and Sydney. Intakes in February and July. Requirements include offer letter, proof of funds, English proficiency, and GTE statement. Work opportunities while studying.",
      image: "/australia.jpg",
      imagePosition: "right",
      buttonText: "EXPLORE AUSTRALIA PROGRAMS",
      buttonLink: "/australia",
    },
    {
      title: "Study in the UK",
      description:
        "The UK is home to prestigious universities like Oxford, Cambridge, and UCL. Main intakes in September/October with a secondary intake in January/February. Requirements include CAS, English proficiency, and financial proof.",
      image: "/uk.jpg",
      imagePosition: "left",
      buttonText: "EXPLORE UK PROGRAMS",
      buttonLink: "/uk",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-[#D9F1F1] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232E2F] mb-4 animate-item">
            Abroad Study Destinations
          </h2>
          <p className="text-lg text-[#232E2F]/80 max-w-2xl mx-auto mb-6 animate-item">
            Explore our premier study destinations with expert guidance for your international education journey
          </p>
          <div className="w-20 h-1 bg-[#232E2F] mx-auto animate-item"></div>
        </div>

        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`destination-section mb-24 last:mb-0 flex flex-col ${
              destination.imagePosition === "right"
                ? "lg:flex-row-reverse"
                : "lg:flex-row"
            } items-center gap-8 lg:gap-12`}
          >
            {/* Image Section */}
            <div
              ref={(el) => (imageRefs.current[index] = el)}
              className={`w-full lg:w-1/2 h-80 md:h-96 relative rounded-xl overflow-hidden shadow-xl animate-item`}
            >
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-[#D9F1F1]/90 backdrop-blur px-4 py-2 rounded-md text-sm shadow border border-[#232E2F]/30">
                <span className="font-semibold text-[#232E2F]">
                  {destination.title.split(" ")[2]}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`w-full lg:w-1/2 space-y-6 animate-item ${
                destination.imagePosition === "right" ? "lg:pr-8" : "lg:pl-8"
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#232E2F]">
                {destination.title}
              </h3>
              <p className="text-[#232E2F]/80 text-lg leading-relaxed">
                {destination.description}
              </p>
              <Link
                href={destination.buttonLink}
                className="group inline-flex items-center bg-[#232E2F] text-[#D9F1F1] px-6 py-3 rounded-lg font-semibold hover:bg-[#232E2F]/90 hover:shadow-lg transition-all duration-300 shadow-md"
              >
                <span>{destination.buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}