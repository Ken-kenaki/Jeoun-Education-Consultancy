"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Clock,
  Briefcase,
  DollarSign,
  FileText,
  Calendar,
  MapPin,
  GraduationCap,
  Users,
  Globe,
  ChevronRight,
  Check,
  Home,
  Plane,
  ScrollText,
  Landmark,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInSouthKorea() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const universities = [
    "Seoul National University",
    "Korea Advanced Institute of Science & Technology (KAIST)",
    "Pohang University of Science & Technology (POSTECH)",
    "Yonsei University",
    "Korea University",
    "Sungkyunkwan University",
    "Hanyang University",
    "Ewha Womans University",
    "Kyung Hee University",
    "Sogang University",
    "Pusan National University",
    "Chung-Ang University",
    "Seoul National University of Science & Technology",
    "Inha University",
  ];

  const studyBenefits = [
    {
      icon: Globe,
      title: "Academic Excellence",
      description: "Korean institutions rank among Asia's best with cutting-edge facilities and globally recognized degree programs.",
    },
    {
      icon: Briefcase,
      title: "Work While Studying",
      description: "International students can work part-time (up to 20 hours weekly) during academic sessions to gain professional experience.",
    },
    {
      icon: MapPin,
      title: "Cultural Immersion",
      description: "Experience the unique blend of ancient traditions and modern pop culture in one of the world's most technologically advanced societies.",
    },
  ];

  const studyRequirements = [
    {
      icon: FileText,
      title: "University Admission",
      description: "Secure an acceptance letter from an accredited Korean educational institution before applying for your student visa.",
    },
    {
      icon: DollarSign,
      title: "Financial Documentation",
      description: "Provide evidence of sufficient funds to cover tuition fees and living expenses throughout your study period.",
    },
    {
      icon: BookOpen,
      title: "Language Proficiency",
      description: "Depending on your program, demonstrate Korean or English language proficiency through recognized tests.",
    },
    {
      icon: Briefcase,
      title: "Visa Requirements",
      description: "Submit all necessary documentation for the D-2 Student Visa application, including health check results if required.",
    },
  ];

  const intakes = [
    {
      name: "March Intake",
      timeframe: "March to June",
      application: "September to November (previous year)",
    },
    {
      name: "September Intake",
      timeframe: "September to December",
      application: "May to June (same year)",
    },
  ];

  const faqs = [
    {
      question: "What are the tuition fees for studying in South Korea?",
      answer: "Annual tuition costs vary by institution and program: Undergraduate: $4,000 – $15,000, Postgraduate: $5,000 – $18,000. Monthly living expenses average $800 – $1,500 depending on location and lifestyle.",
    },
    {
      question: "Can international students work during their studies in Korea?",
      answer: "Yes! Student visa holders can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. This helps offset living costs while gaining valuable work experience.",
    },
    {
      question: "What scholarship opportunities are available for international students?",
      answer: "Numerous scholarships exist including the Korean Government Scholarship Program (KGSP), university-specific awards, and research grants that cover tuition, living expenses, and even airfare for qualified students.",
    },
    {
      question: "When are the main intake periods for Korean universities?",
      answer: "Korean universities typically have two main intakes: March (application period Sept-Nov) and September (application period May-June). Some institutions may offer additional intake options.",
    },
    {
      question: "What documents are needed for a Korean student visa application?",
      answer: "Required documents include: University acceptance letter, valid passport, financial proof, academic transcripts, language proficiency results, completed visa application form, and passport photographs.",
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#232E2F]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/south-korea-hero.jpg"
            alt="South Korea University Campus"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Study in <span className="text-[#D9F1F1]">South Korea</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-xl text-[#D9F1F1]"
              >
                Experience cutting-edge education in Asia's technological powerhouse with a unique blend of tradition and innovation.
              </motion.p>
            </div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-2xl border border-[#D9F1F1]"
            >
              <h3 className="text-xl font-semibold text-[#232E2F] mb-6 text-center">
                Begin Your Application
              </h3>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#232E2F] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-[#D9F1F1] focus:border-[#D9F1F1]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-[#232E2F] mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-[#D9F1F1] focus:border-[#D9F1F1]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#232E2F] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-[#D9F1F1] focus:border-[#D9F1F1]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-[#232E2F] mb-2"
                  >
                    Preferred Destination
                  </label>
                  <select
                    id="destination"
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-[#D9F1F1] focus:border-[#D9F1F1]"
                  >
                    <option>South Korea</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Canada</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#232E2F] hover:bg-[#1a2425] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D9F1F1] transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-[#D9F1F1] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="#benefits"
              className="flex items-center text-base font-medium text-[#232E2F] hover:text-[#1a2425]"
            >
              <Globe className="w-5 h-5 mr-2" />
              Benefits
            </a>
            <a
              href="#universities"
              className="flex items-center text-base font-medium text-[#232E2F] hover:text-[#1a2425]"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Top Universities
            </a>
            <a
              href="#requirements"
              className="flex items-center text-base font-medium text-[#232E2F] hover:text-[#1a2425]"
            >
              <FileText className="w-5 h-5 mr-2" />
              Study Requirements
            </a>
            <a
              href="#intakes"
              className="flex items-center text-base font-medium text-[#232E2F] hover:text-[#1a2425]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Intake Periods
            </a>
            <a
              href="#faq"
              className="flex items-center text-base font-medium text-[#232E2F] hover:text-[#1a2425]"
            >
              <Users className="w-5 h-5 mr-2" />
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
            Advantages of <span className="text-[#369494]">Korean Education</span>
          </h2>
          <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
            Discover why South Korea has become a premier destination for international students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studyBenefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#D9F1F1]/30 p-6 rounded-2xl border border-[#D9F1F1]"
            >
              <div className="bg-[#232E2F] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#D9F1F1]" />
              </div>
              <h3 className="text-xl font-semibold text-[#232E2F] mb-3">{benefit.title}</h3>
              <p className="text-[#232E2F]/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
            Experience <span className="text-[#369494]">Korean Education</span>
          </h2>
          <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
            Discover what makes Korean universities among the most innovative in Asia
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-[#D9F1F1]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/Video/south-korea.mp4"
            title="South Korea University Experience"
            controls
            loop
            muted
            playsInline
            autoPlay
          >
            <p>Your browser does not support HTML5 video.</p>
          </video>
        </div>
      </div>

      {/* Top Universities */}
      <div id="universities" className="bg-[#D9F1F1]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
              Premier <span className="text-[#369494]">Universities</span> in South Korea
            </h2>
            <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
              Partner institutions with global recognition and technological innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-[#D9F1F1]"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-[#232E2F] h-10 w-10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-[#D9F1F1]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#232E2F]">
                      {university}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Study Requirements */}
      <div id="requirements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
              Korean Study <span className="text-[#369494]">Requirements</span>
            </h2>
            <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
              Essential criteria for students planning to study in South Korea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studyRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#232E2F] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-[#D9F1F1] h-12 w-12 rounded-full flex items-center justify-center">
                    <requirement.icon className="h-6 w-6 text-[#232E2F]" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-[#232E2F]">
                    {requirement.title}
                  </h3>
                </div>
                <p className="text-[#232E2F]/80">{requirement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Intakes */}
      <div id="intakes" className="bg-[#232E2F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Korean University <span className="text-[#D9F1F1]">Intakes</span>
            </h2>
            <p className="text-lg text-[#D9F1F1] max-w-3xl mx-auto">
              Plan your application according to the intake periods
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {/* Header */}
              <div className="bg-[#D9F1F1] p-4 text-[#232E2F] font-bold text-center">
                Intake
              </div>
              <div className="bg-[#D9F1F1] p-4 text-[#232E2F] font-bold text-center">
                Timeframe
              </div>
              <div className="bg-[#D9F1F1] p-4 text-[#232E2F] font-bold text-center">
                Application Period
              </div>
              <div className="bg-[#D9F1F1] p-4 text-[#232E2F] font-bold text-center">
                Best For
              </div>

              {/* Rows */}
              {intakes.map((intake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contents"
                >
                  <div
                    className={`p-4 text-center ${
                      index % 2 === 0 ? "bg-white" : "bg-[#D9F1F1]/20"
                    }`}
                  >
                    {intake.name}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      index % 2 === 0 ? "bg-white" : "bg-[#D9F1F1]/20"
                    }`}
                  >
                    {intake.timeframe}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      index % 2 === 0 ? "bg-white" : "bg-[#D9F1F1]/20"
                    }`}
                  >
                    {intake.application}
                  </div>
                  <div
                    className={`p-4 text-center ${
                      index % 2 === 0 ? "bg-white" : "bg-[#D9F1F1]/20"
                    }`}
                  >
                    {index === 0
                      ? "Main academic year start"
                      : "Secondary intake option"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
              Frequently Asked <span className="text-[#369494]">Questions</span>
            </h2>
            <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
              Answers to common questions about studying in South Korea
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white border border-[#D9F1F1] rounded-xl shadow-sm overflow-hidden"
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    whileHover={{ backgroundColor: "rgba(217, 241, 241, 0.1)" }}
                    whileTap={{ backgroundColor: "rgba(217, 241, 241, 0.2)" }}
                  >
                    <h3 className="text-lg font-medium text-[#232E2F]">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-[#232E2F]" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: {
                            opacity: { duration: 0.2 },
                            height: { duration: 0.3 },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: {
                            opacity: { duration: 0.2 },
                            height: { duration: 0.3 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-[#232E2F]/80">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2b7b7b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Korean Education Journey?
          </h2>
          <p className="text-xl text-[#D9F1F1] mb-8 max-w-3xl mx-auto">
            Our expert advisors are here to guide you through every step of the application process.
          </p>
          <button className="bg-[#D9F1F1] text-[#232E2F] px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-[#c5e5e5] transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}