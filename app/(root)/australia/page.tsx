"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudyInAustralia() {
  const universities = [
    "University of Melbourne",
    "Australian National University (ANU)",
    "University of Sydney",
    "University of Queensland (UQ)",
    "Monash University",
    "UNSW Sydney",
    "Deakin University (popular among Nepali students)",
  ];

  const studyRequirements = [
    {
      icon: FileText,
      title: "Offer Letter Required",
      description:
        "Secure an admission offer from an accredited Australian educational institution while meeting academic and English language criteria.",
    },
    {
      icon: DollarSign,
      title: "Financial Documentation",
      description:
        "Demonstrate capacity to cover tuition expenses, living costs, and health coverage throughout your study period.",
    },
    {
      icon: BookOpen,
      title: "Language Proficiency",
      description:
        "Complete recognized English language assessments such as IELTS, TOEFL, or PTE to fulfill language prerequisites.",
    },
    {
      icon: Briefcase,
      title: "GTE Declaration",
      description:
        "Submit a Genuine Temporary Entrant (GTE) statement outlining your temporary study intentions and post-study return plans.",
    },
  ];

  const intakes = [
    {
      name: "Semester 1",
      timeframe: "February to June",
      application: "August to November (previous year)",
    },
    {
      name: "Semester 2",
      timeframe: "July to November",
      application: "December to April (same year)",
    },
    {
      name: "Summer Intake (limited courses)",
      timeframe: "December to February",
      application: "May to July (same year)",
    },
  ];

  const faqs = [
    {
      question: "What are the financial requirements for studying in Australia?",
      answer:
        "Tuition fees vary by program and institution: Undergraduate: AUD 20,000 – AUD 45,000 annually, Postgraduate: AUD 22,000 – AUD 50,000 per year. Monthly living costs average AUD 1,500 – AUD 2,500, varying by location.",
    },
    {
      question: "Are international students permitted to work during their studies?",
      answer:
        "Yes! Student visa holders can work up to 48 hours biweekly during academic sessions and full-time during designated breaks. This assists with living expenses and provides valuable professional exposure.",
    },
    {
      question: "What scholarship opportunities exist for Nepali students in Australia?",
      answer:
        "Numerous institutions provide merit-based scholarships, alongside Australian Government initiatives including: Australia Awards, Destination Australia Scholarships, and university-specific financial support programs.",
    },
    {
      question: "When are the primary intake periods for Australian universities?",
      answer:
        "Two main intakes occur annually: Semester 1: February – June (application deadline Aug–Nov), Semester 2: July – Nov (application deadline Dec–Apr). Selected institutions additionally provide a Summer Intake in December.",
    },
    {
      question: "Which documents are necessary for an Australian student visa application?",
      answer:
        "Confirmation of Enrollment (CoE), Valid passport, Financial evidence, English language test results (IELTS, TOEFL, etc.), Genuine Temporary Entrant (GTE) statement, Overseas Student Health Cover (OSHC), Visa application and biometric information.",
    },
  ];

  // FAQ Accordion State
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-[#232E2F]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/australia.jpg"
            alt="Australian University Campus"
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
                Study in <span className="text-[#D9F1F1]">Australia</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-xl text-[#D9F1F1]"
              >
                World-class education amidst stunning natural landscapes. Australia provides innovative teaching approaches and internationally recognized qualifications.
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
                    <option>Australia</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>United States</option>
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
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
            Advantages of <span className="text-[#369494]">Australian Education</span>
          </h2>
          <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
            Discover why Australia remains a premier destination for international students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#D9F1F1]/30 p-6 rounded-2xl border border-[#D9F1F1]"
          >
            <div className="bg-[#232E2F] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#D9F1F1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#232E2F] mb-3">Global Recognition</h3>
            <p className="text-[#232E2F]/80">Australian qualifications are respected worldwide, opening doors to international career opportunities.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#D9F1F1]/30 p-6 rounded-2xl border border-[#D9F1F1]"
          >
            <div className="bg-[#232E2F] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-[#D9F1F1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#232E2F] mb-3">Work Opportunities</h3>
            <p className="text-[#232E2F]/80">Gain valuable work experience while studying with flexible work rights for international students.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#D9F1F1]/30 p-6 rounded-2xl border border-[#D9F1F1]"
          >
            <div className="bg-[#232E2F] w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#D9F1F1]" />
            </div>
            <h3 className="text-xl font-semibold text-[#232E2F] mb-3">Post-Study Pathways</h3>
            <p className="text-[#232E2F]/80">Opportunities for post-study work visas and potential pathways to permanent residency.</p>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
            Experience <span className="text-[#369494]">Australian Education</span>
          </h2>
          <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
            Discover what makes Australian universities among the most sought-after globally
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-[#D9F1F1]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/australia.mp4"
            title="Australian University Experience"
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
              Premier <span className="text-[#369494]">Universities</span> in Australia
            </h2>
            <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
              Partner institutions with global recognition and academic distinction
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
              Australia Study <span className="text-[#369494]">Requirements</span>
            </h2>
            <p className="text-lg text-[#232E2F]/80 max-w-3xl mx-auto">
              Essential criteria for students planning to study in Australia
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
              Australian University <span className="text-[#D9F1F1]">Intakes</span>
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
                      ? "Most courses available"
                      : index === 1
                      ? "Mid-year starters"
                      : "Short courses/summer programs"}
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
              Answers to common questions about studying in Australia
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
            Ready to Begin Your Australian Education Journey?
          </h2>
          <p className="text-xl text-[#D9F1F1] mb-8 max-w-3xl mx-auto">
            Our expert advisors at Joeun Education Consultancy are here to guide you through every step of the application process.
          </p>
          <Link href="/contact">
            <button className="bg-[#D9F1F1] text-[#232E2F] px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-[#c5e5e5] transition-colors">
              Contact Us Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}