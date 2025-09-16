"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiCalendar,
  FiMapPin,
  FiTarget,
  FiPhone,
  FiChevronDown,
  FiChevronUp,
  FiBookOpen,
  FiAward,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import StudentSuccessCarousel from "@/Components/StudentSuccess";
import FacebookVideoEmbed from "@/Components/FacebookVideoEmbeded";
import "flag-icon-css/css/flag-icons.min.css";

const PROGRAMS = [
  {
    country: "Japan",
    code: "jp",
    title: "April 2026 Intake (Language + Pathway)",
    visaType: "Student Visa",
    highlights: [
      "GPA accepted up to 1.9",
      "Study gap accepted up to 5–6 years",
      "JLPT N5/N4 preferred (Free foundation classes)",
      "Interviews ongoing—limited slots",
    ],
    featured: ["Waseda University", "Osaka University", "Kyoto University", "University of Tokyo"],
    duration: "4 years (Bachelor’s) or Language→College",
    scholarship: "MEXT and school-based aid",
    estimatedCost: "$7,000–$12,000 per year",
    cta: "Apply for April 2026 (Japan)",
    note: "Best for Nepali students targeting Japan with flexible academic profiles.",
  },
  {
    country: "South Korea",
    code: "kr",
    title: "March 2026 Intake (Degree Programs)",
    visaType: "D2 Visa",
    highlights: [
      "GPA 3.0+ (typical), IELTS 5.5",
      "3-year gap acceptable",
      "Application till Sep 1, 2025",
      "Scholarship up to 50%",
    ],
    featured: ["Seoul National", "Korea University", "Yonsei University", "Hanyang University"],
    duration: "4 years (Bachelor’s)",
    scholarship: "Up to 50% tuition waiver",
    estimatedCost: "$8,000–$15,000 per year",
    cta: "Explore Korea Degree Pathway",
    note: "For strong academics and research-focused applicants.",
  },
  {
    country: "South Korea",
    code: "kr",
    title: "Language Training 2026",
    visaType: "D4 Visa",
    highlights: [
      "GPA 2.8+, IELTS 5.5",
      "3-year gap acceptable",
      "1–2 years structured Korean",
      "Top performer discounts",
    ],
    featured: ["Sogang", "Ewha", "Kyung Hee"],
    duration: "1–2 years (Language program)",
    scholarship: "30% discount for top performers",
    estimatedCost: "$5,000–$8,000 per year",
    cta: "Start D4 Language Route",
    note: "Ideal for skill-building before a degree.",
  },
];

const FREE_TRACKS = [
  {
    title: "Free Japanese Classes",
    description: "JLPT N5 foundation with culture & interview polish (April 2026 focus).",
    icon: <span className="flag-icon flag-icon-jp text-3xl" />,
    link: "/test-preparations/japanese-language",
    accent: "from-red-500 to-pink-500",
  },
  {
    title: "Free IELTS Classes",
    description: "8–12 week structured prep with mock tests and scoring insights.",
    icon: <FiBookOpen className="text-3xl" />,
    link: "/test-preparations/ielts",
    accent: "from-blue-500 to-blue-700",
  },
  {
    title: "Free Korean Classes",
    description: "TOPIK basics with Hangul mastery and conversation skills.",
    icon: <span className="flag-icon flag-icon-kr text-3xl" />,
    link: "/test-preparations/korean-language",
    accent: "from-purple-500 to-indigo-500",
  },
];

const FAQS = [
  {
    q: "Can I study in Japan from Nepal with a low GPA?",
    a: "Yes. Profiles with GPA up to 1.9 are considered with strong documentation, JLPT progress, and interview performance. Gap up to 5–6 years is also acceptable with proper justification.",
  },
  {
    q: "Do I need Japanese language for April 2026?",
    a: "JLPT N5 is recommended for smooth interviews and COE processing. We run free foundation classes and intensive batches focused on April 2026.",
  },
  {
    q: "What’s the overall timeline for Japan April intake?",
    a: "Start now: counseling, language foundation, and documents (weeks 1–4), interviews and COE (weeks 4–8+), then visa filing and pre-departure once COE is issued.",
  },
  {
    q: "Can I work part-time in Japan or Korea?",
    a: "Japan typically permits up to 28 hours/week with the right authorization. Korea allows up to 20 hours/week during semesters and full-time in breaks.",
  },
];

export default function April2026JapanBlog() {
  const [activeTab, setActiveTab] = useState<"japan" | "korea">("japan");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = PROGRAMS.filter((p) =>
    activeTab === "japan" ? p.country === "Japan" : p.country === "South Korea"
  );

  return (
    <main className="bg-white">
      {/* Hero – split layout with subtle motion */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative grid lg:grid-cols-2 gap-8 items-center py-16">
            <div className="order-2 lg:order-1">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#2C3C81]"
              >
                <FiCalendar /> April 2026 Intake – Japan
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b2556]"
              >
                Study in Japan from Nepal: Final Call for April 2026
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-4 text-gray-700 leading-relaxed"
              >
                Interviews are ongoing now. GPA up to 1.9 considered and study gaps up to 5–6 years accepted. Free Japanese language foundation and interview preparation running weekly to help secure the Certificate of Eligibility and student visa smoothly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Link
                  href="tel:01-5916232"
                  className="inline-flex items-center gap-2 bg-[#C73D43] hover:bg-[#A53238] text-white px-5 py-3 rounded-lg font-semibold shadow-sm transition-colors"
                >
                  <FiPhone /> Call Gurukul Education
                </Link>
                <Link
                  href="/test-preparations/japanese-language"
                  className="inline-flex items-center gap-2 bg-white border border-[#C73D43]/30 hover:border-[#C73D43] text-[#C73D43] px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  <FiTarget /> Join Free JLPT Class
                </Link>
              </motion.div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-[#2C3C81]/20 hover:border-[#2C3C81]/40 transition-colors">
                  <p className="text-sm text-gray-500">GPA Flexibility</p>
                  <p className="font-semibold text-[#1b2556]">Up to 1.9</p>
                </div>
                <div className="p-4 rounded-lg border border-[#2C3C81]/20 hover:border-[#2C3C81]/40 transition-colors">
                  <p className="text-sm text-gray-500">Study Gap</p>
                  <p className="font-semibold text-[#1b2556]">5–6 years</p>
                </div>
                <div className="p-4 rounded-lg border border-[#2C3C81]/20 hover:border-[#2C3C81]/40 transition-colors">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-semibold text-[#1b2556]">Interviews Ongoing</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#2C3C81]/10">
              <Image
                src="/blog-4.jpg"
                alt="Study in Japan from Nepal - April 2026"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-md text-sm shadow border border-[#C73D43]/30">
                <span className="inline-flex items-center gap-2 text-[#C73D43] font-semibold">
                  <span className="flag-icon flag-icon-jp" /> April 2026 Admissions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + About Gurukul */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556]">
                Gurukul Education Foundation: Nepal’s Trusted Partner Since 2010
              </h2>
              <p className="mt-3 text-gray-700">
                Founded in 2010, Gurukul Education Foundation was built to make international education accessible to every deserving student. What began as a small consultancy is now a comprehensive guidance hub helping Nepali students study in Japan and South Korea with end-to-end support—from course selection and language training to interviews, COE, student visa filing, and pre-departure.
              </p>
              <p className="mt-3 text-gray-700">
                Our team understands the realities of studying abroad and provides personalized mentoring at each step. With deep relationships across multiple countries and universities, we combine scale with a human touch to deliver results for diverse profiles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2C3C81]/15 hover:border-[#2C3C81]/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C73D43]/10 flex items-center justify-center">
                  <FiAward className="text-[#C73D43]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Admissions & Partnerships</p>
                  <p className="font-semibold text-[#1b2556]">Expanding across countries & universities</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2C3C81]/10 flex items-center justify-center">
                  <FiUsers className="text-[#2C3C81]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Comprehensive Support</p>
                  <p className="font-semibold text-[#1b2556]">Applications, language, interview, visa</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <FiCheckCircle className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Student Outcomes</p>
                  <p className="font-semibold text-[#1b2556]">Placement-focused with ethical guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO badges with themed borders */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg border border-[#C73D43]/25 p-4 bg-white hover:border-[#C73D43]/45 transition-colors">
              <p className="text-xs text-gray-500">Keyword Focus</p>
              <p className="font-semibold text-[#1b2556]">Study in Japan from Nepal</p>
            </div>
            <div className="rounded-lg border border-[#2C3C81]/25 p-4 bg-white hover:border-[#2C3C81]/45 transition-colors">
              <p className="text-xs text-gray-500">Visa Track</p>
              <p className="font-semibold text-[#1b2556]">Japan student visa Nepal (COE + interview)</p>
            </div>
            <div className="rounded-lg border border-[#C73D43]/25 p-4 bg-white hover:border-[#C73D43]/45 transition-colors">
              <p className="text-xs text-gray-500">Language</p>
              <p className="font-semibold text-[#1b2556]">Free JLPT classes (N5→N4)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Classes */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556]">Free Language & Test Preparation</h2>
            <p className="mt-3 text-gray-700">
              Kickstart readiness for interviews, COE, and scholarships with foundation tracks designed for Nepal-to-Japan and Nepal-to-Korea journeys.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FREE_TRACKS.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-[#2C3C81]/15 hover:border-[#2C3C81]/35 shadow-sm hover:shadow-md p-6 overflow-hidden bg-white transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C73D43] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ring-1 ring-[#C73D43]/15">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#C73D43]">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{item.description}</p>
                <div className="mt-5">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#C73D43] hover:bg-[#A53238] px-4 py-2 rounded-lg transition-colors"
                  >
                    Enroll Free
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* JLPT focus ribbon */}
          <div className="mt-6 rounded-xl bg-gradient-to-r from-[#C73D43] to-[#2C3C81] text-white p-5 text-center shadow-sm">
            <p className="font-semibold">
              New JLPT batches for April 2026: Interview drills, SOP review, and cultural etiquette modules included.
            </p>
          </div>
        </div>
      </section>

      {/* Program Tabs */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex p-1 bg-white rounded-xl shadow border border-[#2C3C81]/15">
              <button
                onClick={() => setActiveTab("japan")}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === "japan"
                    ? "bg-[#C73D43] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Japan
              </button>
              <button
                onClick={() => setActiveTab("korea")}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === "korea"
                    ? "bg-[#2C3C81] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                South Korea
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-6 max-w-5xl mx-auto">
            {filtered.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#2C3C81]/15 hover:border-[#2C3C81]/35 shadow-sm hover:shadow-md p-6 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ring-1 ring-[#C73D43]/15">
                      <span className={`flag-icon flag-icon-${p.code} text-2xl`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1b2556]">{p.title}</h3>
                      <p className="text-sm text-gray-600 inline-flex items-center gap-1">
                        <FiMapPin /> {p.country} • {p.visaType}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="tel:01-5916232"
                    className="inline-flex items-center gap-2 bg-[#C73D43] hover:bg-[#A53238] text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>

                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-[#2C3C81] mb-2">Key Highlights</h4>
                    <ul className="space-y-2">
                      {p.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#C73D43] mt-1">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm text-gray-600">{p.note}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-[#2C3C81]/15">
                    <p className="text-sm">
                      <span className="font-semibold">Duration:</span> {p.duration}
                    </p>
                    <p className="text-sm mt-1">
                      <span className="font-semibold">Scholarship:</span> {p.scholarship}
                    </p>
                    <p className="text-sm mt-1">
                      <span className="font-semibold">Estimated Cost:</span> {p.estimatedCost}
                    </p>
                    <div className="mt-3">
                      <button
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="text-[#C73D43] font-semibold inline-flex items-center gap-1 hover:underline"
                      >
                        {expanded === i ? (
                          <>
                            Show less <FiChevronUp />
                          </>
                        ) : (
                          <>
                            View universities <FiChevronDown />
                          </>
                        )}
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="mt-3 overflow-hidden"
                        >
                          <div className="flex flex-wrap gap-2">
                            {p.featured.map((u, j) => (
                              <span
                                key={j}
                                className="px-3 py-1 rounded-full text-xs bg-white border border-[#C73D43]/30"
                              >
                                {u}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-4">
                  <Link
                    href="tel:01-5916232"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C73D43] hover:underline"
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Carousel */}
      <StudentSuccessCarousel />

      {/* Facebook Video & Student Life */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556]">Student Life, Culture, and Careers</h2>
            <p className="mt-3 text-gray-700">
              Discover how Japanese tradition and innovation blend on campus, and how Korean universities’ tech-forward ecosystems foster research and entrepreneurship.
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl ring-1 ring-[#2C3C81]/10">
            <FacebookVideoEmbed reelId="1821495802132758" />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl bg-gray-50 p-6 border border-[#2C3C81]/15">
              <h3 className="font-semibold text-[#C73D43]">Campus Experience</h3>
              <p className="mt-2 text-gray-700">
                Active clubs, seasonal festivals, labs, libraries, and respectful academic environments make settling in smoother for Nepali students.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 border border-[#2C3C81]/15">
              <h3 className="font-semibold text-[#C73D43]">Work Opportunities</h3>
              <p className="mt-2 text-gray-700">
                Japan’s part-time work permissions and career demand for global talent align well with JLPT progress. Korea offers campus jobs and structured programs aiding placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs – smoother accordion with themed borders */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556] text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl border p-0 overflow-hidden transition-all ${
                    isOpen ? "border-[#C73D43]/40 shadow-sm" : "border-[#2C3C81]/15 hover:border-[#2C3C81]/35"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left px-5 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C73D43] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[#C73D43]">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="shrink-0"
                    >
                      <FiChevronDown className="text-[#C73D43]" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="px-5"
                      >
                        <div className="pb-4 text-gray-700">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2C3C81] to-[#C73D43] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Secure Your April 2026 Japan Seat</h2>
          <p className="mt-3 text-lg text-white/90">
            Interview preparation classes running now. Free Japanese foundation for JLPT N5 and SOP polishing included.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#C73D43] px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              Book Free Consultation
            </Link>
            <Link
              href="tel:01-5916232"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Call: 01-5916232
            </Link>
          </div>
          <p className="mt-6 text-white/80">Email: info@gurukuleduc.com</p>
        </div>
      </section>
    </main>
  );
}
