"use client";

import {
  BookOpen,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Award,
  ChevronLeft,
  Calendar,
  FileText,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Type definitions
type SyllabusItem = {
  title: string;
  items: string[];
};

type TestPreparation = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  longDescription: string;
  duration: string;
  students: string;
  rating: number;
  features: string[];
  syllabus: SyllabusItem[];
  image: string;
  color: string;
};

const testPreparations = {
  ielts: {
    id: "ielts",
    name: "IELTS",
    fullName: "International English Language Testing System",
    description:
      "Excel in the IELTS examination through our structured preparation course tailored to help you reach your desired band score.",
    longDescription:
      "Our IELTS preparation course is carefully crafted to assist learners in attaining their target band scores. We deliver extensive training across all four test components: Listening, Reading, Writing, and Speaking. Our experienced educators offer customized guidance and techniques based on your individual needs. Through regular practice exams and detailed progress evaluation, we guarantee your complete readiness for the official test.",
    duration: "8-12 weeks",
    students: "500+",
    rating: 4.8,
    features: [
      "Conversation practice with native English speakers",
      "Personalized writing task evaluations",
      "Listening comprehension activities",
      "Effective reading strategies",
      "Simulated examinations with score estimates",
      "Hybrid learning options (online and in-person)",
    ],
    syllabus: [
      {
        title: "Listening Section",
        items: [
          "Recognizing various English accents",
          "Effective note-taking methods",
          "Anticipating responses",
          "Efficient time utilization",
        ],
      },
      {
        title: "Reading Section",
        items: [
          "Rapid reading and scanning approaches",
          "Interpreting complex passages",
          "Time allocation tactics",
          "Addressing diverse question formats",
        ],
      },
      {
        title: "Writing Section",
        items: [
          "Task 1 (Academic/General) framework",
          "Task 2 composition skills",
          "Vocabulary expansion",
          "Grammar accuracy and flow",
        ],
      },
      {
        title: "Speaking Section",
        items: [
          "Fluency and logical flow",
          "Word choice variety",
          "Grammar diversity",
          "Articulation practice",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    color: "from-[#232E2F] to-[#2C4E4F]",
  },
  "korean-language": {
    id: "korean-language",
    name: "Korean",
    fullName: "Test of Proficiency in Korean (TOPIK)",
    description:
      "Develop Korean language proficiency with our complete program encompassing all TOPIK examination elements.",
    longDescription:
      "Our Korean language course is structured to facilitate success in the TOPIK test while building practical communication abilities. We address all language components including Hangul, grammatical rules, vocabulary building, reading, writing, listening, and conversation. Our program follows TOPIK levels (I and II) with particular focus on examination techniques and efficient time use. Cultural integration experiences deepen your comprehension of the language in authentic situations.",
    duration: "12-20 weeks",
    students: "250+",
    rating: 4.8,
    features: [
      "Complete Hangul writing system mastery",
      "Grammatical structures and patterns",
      "Listening and reading understanding",
      "Conversation and composition practice",
      "TOPIK I and II exam readiness",
      "Korean cultural integration",
    ],
    syllabus: [
      {
        title: "Hangul & Fundamentals",
        items: [
          "Hangul literacy skills",
          "Essential pronunciation",
          "Basic salutations",
          "Numerical systems",
        ],
      },
      {
        title: "Grammar & Vocabulary",
        items: [
          "Sentence formation",
          "Verb transformations",
          "Particle applications",
          "TOPIK-focused terminology",
        ],
      },
      {
        title: "Reading & Composition",
        items: [
          "Text comprehension",
          "Written composition",
          "Formal and informal styles",
          "Document interpretation",
        ],
      },
      {
        title: "Listening & Conversation",
        items: [
          "Interactive dialogue",
          "Audio comprehension",
          "Pronunciation improvement",
          "Presentation techniques",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=500&fit=crop",
    color: "from-[#232E2F] to-[#2C4E4F]",
  },
} as const;

type TestId = keyof typeof testPreparations;

interface PageProps {
  params: {
    id: string;
  };
}

export default function TestPreparationDetailPage({ params }: PageProps) {
  const test = testPreparations[params.id as TestId];

  if (!test) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-[#D9F1F1]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#232E2F] mb-4">
            Course not available
          </h1>
          <Link
            href="/test-preparations"
            className="text-[#232E2F] hover:underline font-medium"
          >
            Return to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 bg-[#D9F1F1]">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/test-preparations"
            className="flex items-center text-[#232E2F] hover:text-[#2C4E4F] transition-colors font-medium"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to All Courses
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-80 rounded-2xl overflow-hidden mb-12 shadow-lg"
        >
          <img
            src={test.image}
            alt={test.name}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${test.color} opacity-90`}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {test.name} Preparation Course
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/90 max-w-3xl mx-auto"
              >
                {test.fullName}
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12 bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
                Course Overview
              </h2>
              <p className="text-[#232E2F]/80 mb-6 leading-relaxed">
                {test.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#D9F1F1] p-4 rounded-xl border border-[#232E2F]/10">
                  <div className="flex items-center mb-2">
                    <Clock size={20} className="text-[#232E2F] mr-2" />
                    <span className="font-medium text-[#232E2F]">Duration</span>
                  </div>
                  <p className="text-[#232E2F]/70">{test.duration}</p>
                </div>
                <div className="bg-[#D9F1F1] p-4 rounded-xl border border-[#232E2F]/10">
                  <div className="flex items-center mb-2">
                    <Users size={20} className="text-[#232E2F] mr-2" />
                    <span className="font-medium text-[#232E2F]">Students</span>
                  </div>
                  <p className="text-[#232E2F]/70">{test.students}</p>
                </div>
                <div className="bg-[#D9F1F1] p-4 rounded-xl border border-[#232E2F]/10">
                  <div className="flex items-center mb-2">
                    <Star size={20} className="text-[#232E2F] mr-2" />
                    <span className="font-medium text-[#232E2F]">Rating</span>
                  </div>
                  <p className="text-[#232E2F]/70">{test.rating}/5</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12 bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
                Key Learning Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {test.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-[#D9F1F1] p-4 rounded-xl border border-[#232E2F]/10"
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#232E2F] mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-[#232E2F]/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12 bg-white rounded-2xl p-6 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#232E2F] mb-4">
                Curriculum Outline
              </h2>
              <div className="space-y-4">
                {test.syllabus.map((section, index) => (
                  <div
                    key={index}
                    className="bg-[#D9F1F1] rounded-xl border border-[#232E2F]/10 overflow-hidden"
                  >
                    <div className="bg-[#232E2F] text-white px-4 py-3 font-medium">
                      {section.title}
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-[#232E2F] mr-2">•</span>
                            <span className="text-[#232E2F]/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8 mb-8 border border-[#232E2F]/10"
            >
              <h3 className="text-xl font-bold text-[#232E2F] mb-4">
                Enrollment Details
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <BookOpen size={20} className="text-[#232E2F] mr-3" />
                  <span className="text-[#232E2F]/80">
                    Complete {test.name} curriculum
                  </span>
                </div>
                <div className="flex items-center">
                  <Target size={20} className="text-[#232E2F] mr-3" />
                  <span className="text-[#232E2F]/80">
                    Examination-focused approach
                  </span>
                </div>
                <div className="flex items-center">
                  <Award size={20} className="text-[#232E2F] mr-3" />
                  <span className="text-[#232E2F]/80">
                    Accredited instructors
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="text-[#232E2F] mr-3" />
                  <span className="text-[#232E2F]/80">
                    Flexible scheduling options
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#232E2F] text-white py-3 rounded-xl hover:bg-[#2C4E4F] transition-colors mb-4 flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                <Link href="/contact">Schedule Consultation</Link>
              </button>

              <button className="w-full border border-[#232E2F] text-[#232E2F] py-3 rounded-xl hover:bg-[#232E2F] hover:text-white transition-colors flex items-center justify-center">
                <FileText size={20} className="mr-2" />
                <Link href="/resources"> Download Full Syllabus </Link>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-[#232E2F]/10"
            >
              <h3 className="text-xl font-bold text-[#232E2F] mb-4">
                Have Questions?
              </h3>
              <p className="text-[#232E2F]/80 mb-4">
                Our educational advisors are available to answer your questions
                about this course and help you determine if it's the right fit
                for your goals.
              </p>
              <button className="w-full bg-[#D9F1F1] text-[#232E2F] py-3 rounded-xl hover:bg-[#232E2F] hover:text-white transition-colors">
                <Link href="/contact">Contact an Advisor</Link>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}