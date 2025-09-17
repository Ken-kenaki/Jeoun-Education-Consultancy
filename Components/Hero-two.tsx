"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const HeroTwo = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#D9F1F1]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-10">
        <video
          src="hero.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-80"
        ></video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9F1F1]/30 to-[#232E2F]/30 z-20"></div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 md:px-8 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#232E2F] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Abroad Journey{" "}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#232E2F] mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover innovative solutions that transform your ideas into reality
          with our cutting-edge platform.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-[#232E2F] text-[#D9F1F1] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1">
            <Link href="apply-now">
                Apply Now
            </Link>
          </button>
          <button className="border-2 border-[#232E2F] text-[#232E2F] px-8 py-3 rounded-full font-medium hover:bg-[#232E2F] hover:text-[#D9F1F1] transition-all duration-300">
            <Link href="tel:+1234567890">
                Call Now
            </Link>
          </button>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto text-[#232E2F]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTwo;
