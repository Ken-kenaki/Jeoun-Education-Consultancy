"use client";

import FacebookVideoEmbed from "@/Components/FacebookVideoEmbeded";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FacebookEmbed } from 'react-social-media-embed';
import { FiChevronDown, FiChevronUp, FiExternalLink, FiCalendar, FiAward, FiGlobe, FiBook, FiDollarSign } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StudentSuccessCarousel from "@/Components/StudentSuccess";
import 'flag-icon-css/css/flag-icons.min.css';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STUDY_PROGRAMS = [
  {
    country: "South Korea",
    countryCode: "kr",
    intake: "March 2026",
    visaType: "D2 Visa (Degree Programs)",
    requirements: [
      "Passout Year: Up to 2023 (3-year gap acceptable)",
      "GPA Requirement: 3.0 or above",
      "English Proficiency: IELTS 5.5",
      "Admission Deadline: September 1, 2025"
    ],
    universities: ["Seoul National University", "Korea University", "Yonsei University", "Hanyang University"],
    scholarship: "Up to 50% tuition waiver available",
    duration: "4 years (Bachelor's)",
    estimatedCost: "$8,000 - $15,000 per year"
  },
  {
    country: "South Korea",
    countryCode: "kr",
    intake: "March 2026",
    visaType: "D4 Visa (Language Training)",
    requirements: [
      "Passout Year: Up to 2023 (3-year gap acceptable)",
      "GPA Requirement: 2.8 or above",
      "English Proficiency: IELTS 5.5"
    ],
    universities: ["Sogang University", "Ewha Womans University", "Kyung Hee University"],
    scholarship: "30% discount for top performers",
    duration: "1-2 years (Language program)",
    estimatedCost: "$5,000 - $8,000 per year"
  },
  {
    country: "South Korea",
    countryCode: "kr",
    intake: "Master's Programs",
    visaType: "D2 Visa (Master's Degree)",
    requirements: [
      "Passout Year: 2023 (3-year gap acceptable)",
      "GPA Requirement: 3.2",
      "English Proficiency: IELTS 5.5"
    ],
    universities: ["KAIST", "POSTECH", "Sungkyunkwan University"],
    scholarship: "Full tuition + stipend for research students",
    duration: "2 years",
    estimatedCost: "$10,000 - $18,000 per year"
  },
  {
    country: "Japan",
    countryCode: "jp",
    intake: "April 2026",
    visaType: "Various Programs",
    requirements: [
      "Passout Year: 2019 (5-6 years gap acceptable)",
      "GPA Requirement: 1.9",
      "Language Requirement: JLPT N5 (Basic Japanese)",
      "Current Status: Interviews are ongoing!"
    ],
    universities: ["University of Tokyo", "Kyoto University", "Osaka University", "Waseda University"],
    scholarship: "MEXT Scholarship available",
    duration: "4 years (Bachelor's)",
    estimatedCost: "$7,000 - $12,000 per year"
  }
];

const FREE_COURSES = [
  {
    title: "Free IELTS Classes",
    description: "Comprehensive preparation for IELTS exam with mock tests and speaking practice",
    icon: "📝",
    link: "/test-preparations/ielts"
  },
  {
    title: "Free Korean Classes",
    description: "Learn basic to intermediate Korean with TOPIK preparation",
    icon: <span className="flag-icon flag-icon-kr text-4xl"></span>,
    link: "/test-preparations/korean-language"
  },
  {
    title: "Free Japanese Classes",
    description: "JLPT N5 preparation course with cultural immersion",
    icon: <span className="flag-icon flag-icon-jp text-4xl"></span>,
    link: "/test-preparations/japanese-language"
  }
];

const FAQS = [
  {
    question: "What's the minimum budget required to study in South Korea?",
    answer: "For undergraduate programs, you should budget approximately $12,000-$18,000 per year including tuition and living expenses. Many universities offer scholarships that can reduce this cost significantly."
  },
  {
    question: "Can I work part-time while studying?",
    answer: "Yes! South Korea allows international students to work up to 20 hours per week during semesters and full-time during vacations. Japan permits up to 28 hours per week with proper authorization."
  },
  {
    question: "How long does the application process take?",
    answer: "The complete process from application to visa typically takes 4-6 months. We recommend starting at least 8 months before your intended intake to allow time for language tests and document preparation."
  },
  {
    question: "Is accommodation provided by universities?",
    answer: "Most universities offer dormitory options for international students at reasonable rates (typically $300-$600 per month). We also assist students in finding off-campus housing if preferred."
  }
];

export default function StudyAbroadBlogPage() {
  const [expandedProgram, setExpandedProgram] = useState(null);
  const [activeTab, setActiveTab] = useState("korea");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProgram(expandedProgram === index ? null : index);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main className="overflow-x-hidden bg-white">
      {/* Centered Hero Section - Made larger on big screens */}
      <section className="relative py-16 md:py-24 lg:py-32 w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative h-96 md:h-[32rem] lg:h-[40rem] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/blog-3.jpg"
              alt="Students studying abroad"
              fill
              className="object-cover object-center"
              priority
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
            
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Study Abroad March 2026 Intake
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xl lg:text-2xl text-white mb-6 max-w-2xl lg:max-w-3xl"
              >
                South Korea & Japan Admissions Open Now
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#C73D43] hover:bg-[#A53238] text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2"
                >
                  <Link href="tel:01-5916232" className="flex items-center">
                    Call Now <FiExternalLink className="ml-1" />
                  </Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/90 hover:bg-white text-blue-800 px-6 py-3 rounded-lg font-bold shadow-lg transition-all"
                >
                  <Link href="/south-korea">Explore Korea</Link>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Courses Section */}
      <section id="free-courses" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4 text-blue-800"
          >
            <span className="text-[#C73D43]">FREE</span> Language & Test Preparation
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Our free courses have helped hundreds of students achieve their study abroad dreams
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {FREE_COURSES.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4 text-center flex justify-center">
                  {typeof course.icon === 'string' ? course.icon : course.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-[#C73D43]">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{course.description}</p>
                
                <div className="mt-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#C73D43] hover:bg-[#A53238] text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    <Link href={course.link} target="_blank" rel="noopener noreferrer">
                      Enroll Now
                    </Link>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-800"
          >
            Why Choose Our Services?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl border border-blue-100"
            >
              <div className="bg-[#C73D43] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiGlobe className="text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#C73D43]">Global Network</h3>
              <p className="text-gray-600">Direct partnerships with 50+ universities in Korea and Japan ensure smooth admissions.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl border border-blue-100"
            >
              <div className="bg-[#C73D43] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiBook className="text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#C73D43]">Comprehensive Support</h3>
              <p className="text-gray-600">From application to visa and pre-departure, we guide you at every step.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl border border-blue-100"
            >
              <div className="bg-[#C73D43] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiDollarSign className="text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#C73D43]">Scholarship Assistance</h3>
              <p className="text-gray-600">Our students have secured over ₹1.2 crore in scholarships last year.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-800"
          >
            Study Abroad Programs
          </motion.h2>
          
          {/* Country Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("korea")}
                className={`px-4 py-2 rounded-md font-medium ${activeTab === "korea" ? 'bg-[#C73D43] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                South Korea
              </button>
              <button
                onClick={() => setActiveTab("japan")}
                className={`px-4 py-2 rounded-md font-medium ${activeTab === "japan" ? 'bg-[#C73D43] text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Japan
              </button>
            </div>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {STUDY_PROGRAMS.filter(program => 
              activeTab === "korea" ? program.country === "South Korea" : program.country === "Japan"
            ).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#C73D43]/10 flex items-center justify-center mr-4">
                      <span className={`flag-icon flag-icon-${program.countryCode} text-2xl`}></span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#C73D43]">{program.visaType}</h3>
                      <p className="text-gray-600 flex items-center">
                        <FiCalendar className="mr-1" /> {program.intake}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-[#C73D43] hover:text-[#A53238] flex items-center text-sm font-medium"
                  >
                    {expandedProgram === index ? (
                      <>
                        <span>Show Less</span>
                        <FiChevronUp className="ml-1" />
                      </>
                    ) : (
                      <>
                        <span>View Details</span>
                        <FiChevronDown className="ml-1" />
                      </>
                    )}
                  </button>
                </div>
                
                {expandedProgram === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <h4 className="font-bold text-gray-700 mb-2">Featured Universities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.universities.map((uni, i) => (
                          <span key={i} className="bg-[#C73D43]/10 text-[#C73D43] px-3 py-1 rounded-full text-sm">
                            {uni}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-gray-700 mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {program.requirements.map((req, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#C73D43] mr-2">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-700 mb-2">Program Details:</h4>
                        <div className="space-y-2">
                          <p className="flex items-start">
                            <span className="text-[#C73D43] mr-2">•</span>
                            <span><strong>Duration:</strong> {program.duration}</span>
                          </p>
                          <p className="flex items-start">
                            <span className="text-[#C73D43] mr-2">•</span>
                            <span><strong>Scholarship:</strong> {program.scholarship}</span>
                          </p>
                          <p className="flex items-start">
                            <span className="text-[#C73D43] mr-2">•</span>
                            <span><strong>Estimated Cost:</strong> {program.estimatedCost}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#C73D43] hover:bg-[#A53238] text-white px-6 py-2 rounded-lg font-medium"
                      >
                        <Link href="tel:01-5916232" >
                        Apply for this Program
                        </Link>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <StudentSuccessCarousel />

      {/* Facebook Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-800"
          >
            Student Life Abroad
          </motion.h2>
          
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <FacebookVideoEmbed reelIds={
              [
                "1752305145675845",
                "1046945374307935",
                "1426397148628436"
              ]
            } />
          </div>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <h3 className="font-bold text-lg text-[#C73D43] mb-3">Campus Life</h3>
              <p className="text-gray-700">
                Experience vibrant campus cultures with student clubs, festivals, and cutting-edge facilities. 
                Korean universities boast high-tech campuses while Japanese schools blend tradition with innovation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <h3 className="font-bold text-lg text-[#C73D43] mb-3">Career Opportunities</h3>
              <p className="text-gray-700">
                Both countries offer post-study work visas. Korea has programs like K-Move for job placement, 
                while Japan's shrinking workforce creates high demand for skilled international graduates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now with toggle functionality */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-800"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="font-bold text-lg text-[#C73D43] mb-2">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <FiChevronUp className="text-[#C73D43]" />
                  ) : (
                    <FiChevronDown className="text-[#C73D43]" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-[#C73D43] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            
            <p className="text-xl mb-8">
              Limited seats available for 2026 intake. Apply now to secure your spot!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#C73D43] px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">Book Free Consultation</Link>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                <Link href="/south-korea">Explore Korea</Link>
              </motion.button>
            </div>
            
            <p className="mt-8 text-blue-200">
              Have questions? Call us at 01-5916232 or email info@gurukuleduc.com
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}