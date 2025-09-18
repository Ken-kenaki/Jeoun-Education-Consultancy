"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface CareerCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  countries: string[];
  size: "small" | "medium" | "large";
  color: string;
  tiltDirection: "left" | "right" | "up" | "down";
}

export default function CareerChoicesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // Disable tilt effect on mobile
    if (isMobile) return;
    
    const card = cardRefs.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((y - centerY) / centerY) * -5;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  const careerOptions: CareerCard[] = [
    {
      title: "Study in South Korea",
      description:
        "Top-ranked universities with cutting-edge programs in technology, engineering, and design. Scholarships available for international students.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      countries: ["Seoul National", "KAIST", "POSTECH", "Yonsei"],
      size: "medium",
      color: "bg-[#D9F1F1]",
      tiltDirection: "right"
    },
    {
      title: "UK Universities",
      description:
        "World-renowned institutions with centuries of academic excellence and strong industry connections.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      countries: ["Oxford", "Cambridge", "Imperial", "UCL"],
      size: "medium",
      color: "bg-white",
      tiltDirection: "left"
    },
    {
      title: "Australian Education",
      description:
        "High-quality education system with post-study work opportunities in a vibrant multicultural environment.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      countries: ["Melbourne", "Sydney", "ANU", "Monash"],
      size: "medium",
      color: "bg-white",
      tiltDirection: "up"
    },
    {
      title: "Engineering Programs",
      description:
        "World-class engineering degrees with practical experience and global recognition.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      countries: ["Mechanical", "Electrical", "Software", "Civil"],
      size: "small",
      color: "bg-[#D9F1F1]",
      tiltDirection: "down"
    },
    {
      title: "Business Degrees",
      description:
        "Accelerate your career with internationally recognized business and management programs.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      countries: ["MBA", "Finance", "Marketing", "Management"],
      size: "small",
      color: "bg-[#D9F1F1]",
      tiltDirection: "up"
    },
  ];

  return (
    <section className="bg-[#D9F1F1] py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#232E2F] mb-4">
            Global Education Opportunities
          </h2>
          <p className="text-[#232E2F]/80 max-w-2xl mx-auto text-base md:text-lg">
            Discover premier academic programs across South Korea, Australia, 
            and the United Kingdom tailored to your career aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-5 mb-8 md:mb-12">
          {/* For mobile: all cards stack vertically */}
          {/* For desktop: first row with 3 medium cards */}
          
          {/* Study in South Korea Card */}
          <div
            ref={el => cardRefs.current[0] = el}
            className="md:col-span-2 bg-[#D9F1F1] rounded-2xl p-5 md:p-6 border border-[#232E2F]/10 shadow-sm transition-all duration-500 ease-out flex flex-col"
            onMouseMove={(e) => handleMouseMove(e, 0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <div className="text-[#232E2F] mb-3 md:mb-4">{careerOptions[0].icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-[#232E2F] mb-2 md:mb-3">
              {careerOptions[0].title}
            </h3>
            <p className="text-[#232E2F]/80 mb-4 md:mb-5 flex-grow text-sm md:text-base">
              {careerOptions[0].description}
            </p>
            <div className="mt-auto">
              <div className="text-sm font-medium text-[#232E2F] mb-2">
                Top Universities:
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {careerOptions[0].countries.map((country, i) => (
                  <span
                    key={i}
                    className="bg-[#232E2F]/10 text-[#232E2F] px-2 md:px-3 py-1 rounded-full text-xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* UK Universities Card */}
          <div
            ref={el => cardRefs.current[1] = el}
            className="md:col-span-2 bg-white rounded-2xl p-5 md:p-6 border border-[#232E2F]/10 shadow-sm transition-all duration-500 ease-out flex flex-col"
            onMouseMove={(e) => handleMouseMove(e, 1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div className="text-[#232E2F] mb-3 md:mb-4">{careerOptions[1].icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-[#232E2F] mb-2 md:mb-3">
              {careerOptions[1].title}
            </h3>
            <p className="text-[#232E2F]/80 mb-4 md:mb-5 flex-grow text-sm md:text-base">
              {careerOptions[1].description}
            </p>
            <div className="mt-auto">
              <div className="text-sm font-medium text-[#232E2F] mb-2">
                Top Universities:
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {careerOptions[1].countries.map((country, i) => (
                  <span
                    key={i}
                    className="bg-[#232E2F]/10 text-[#232E2F] px-2 md:px-3 py-1 rounded-full text-xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Australian Education Card */}
          <div
            ref={el => cardRefs.current[2] = el}
            className="md:col-span-2 bg-white rounded-2xl p-5 md:p-6 border border-[#232E2F]/10 shadow-sm transition-all duration-500 ease-out flex flex-col"
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div className="text-[#232E2F] mb-3 md:mb-4">{careerOptions[2].icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-[#232E2F] mb-2 md:mb-3">
              {careerOptions[2].title}
            </h3>
            <p className="text-[#232E2F]/80 mb-4 md:mb-5 flex-grow text-sm md:text-base">
              {careerOptions[2].description}
            </p>
            <div className="mt-auto">
              <div className="text-sm font-medium text-[#232E2F] mb-2">
                Top Universities:
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {careerOptions[2].countries.map((country, i) => (
                  <span
                    key={i}
                    className="bg-[#232E2F]/10 text-[#232E2F] px-2 md:px-3 py-1 rounded-full text-xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Engineering Programs Card */}
          <div
            ref={el => cardRefs.current[3] = el}
            className="md:col-span-3 bg-[#D9F1F1] rounded-2xl p-5 md:p-6 border border-[#232E2F]/10 shadow-sm transition-all duration-500 ease-out flex flex-col"
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseLeave={() => handleMouseLeave(3)}
          >
            <div className="text-[#232E2F] mb-3 md:mb-4">{careerOptions[3].icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-[#232E2F] mb-2 md:mb-3">
              {careerOptions[3].title}
            </h3>
            <p className="text-[#232E2F]/80 mb-4 md:mb-5 flex-grow text-sm md:text-base">
              {careerOptions[3].description}
            </p>
            <div className="mt-auto">
              <div className="text-sm font-medium text-[#232E2F] mb-2">
                Popular Specializations:
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {careerOptions[3].countries.map((country, i) => (
                  <span
                    key={i}
                    className="bg-[#232E2F]/10 text-[#232E2F] px-2 md:px-3 py-1 rounded-full text-xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Business Degrees Card */}
          <div
            ref={el => cardRefs.current[4] = el}
            className="md:col-span-3 bg-[#D9F1F1] rounded-2xl p-5 md:p-6 border border-[#232E2F]/10 shadow-sm transition-all duration-500 ease-out flex flex-col"
            onMouseMove={(e) => handleMouseMove(e, 4)}
            onMouseLeave={() => handleMouseLeave(4)}
          >
            <div className="text-[#232E2F] mb-3 md:mb-4">{careerOptions[4].icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-[#232E2F] mb-2 md:mb-3">
              {careerOptions[4].title}
            </h3>
            <p className="text-[#232E2F]/80 mb-4 md:mb-5 flex-grow text-sm md:text-base">
              {careerOptions[4].description}
            </p>
            <div className="mt-auto">
              <div className="text-sm font-medium text-[#232E2F] mb-2">
                Popular Programs:
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {careerOptions[4].countries.map((country, i) => (
                  <span
                    key={i}
                    className="bg-[#232E2F]/10 text-[#232E2F] px-2 md:px-3 py-1 rounded-full text-xs"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="group flex items-center justify-center space-x-2 bg-[#232E2F] text-[#D9F1F1] px-5 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#2C4E4F] hover:shadow-lg transition-all duration-300 shadow-md mx-auto text-sm md:text-base"
          >
            <Link href="/universities">
              <span>EXPLORE ALL Universities</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}