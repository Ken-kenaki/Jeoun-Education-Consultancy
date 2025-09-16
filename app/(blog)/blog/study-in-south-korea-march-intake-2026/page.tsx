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
    country: "South Korea",
    code: "kr",
    title: "March 2026 Intake (Degree Programs)",
    visaType: "D2 Visa (Government Regional Visa)",
    highlights: [
      "GPA accepted up to 2.6",
      "Study gap accepted up to 3 years (2023 passouts eligible)",
      "IELTS 5.5 or equivalent accepted",
      "Free IELTS and Korean language preparation",
    ],
    featured: ["Seoul National University", "Korea University", "Yonsei University", "Hanyang University"],
    duration: "4 years (Bachelor's) or 2 years (Master's)",
    scholarship: "Up to 50% tuition waiver available",
    estimatedCost: "$8,000–$15,000 per year",
    cta: "Apply for March 2026 (Korea Degree)",
    note: "Ideal for students seeking full degree programs in South Korea.",
  },
  {
    country: "South Korea",
    code: "kr",
    title: "Language Training 2026",
    visaType: "D4 Visa",
    highlights: [
      "GPA accepted as low as 2.8",
      "Study gap accepted up to 3 years",
      "IELTS 5.5 or equivalent accepted",
      "Free intensive Korean language classes",
    ],
    featured: ["Sogang University", "Ewha Womans University", "Kyung Hee University"],
    duration: "1–2 years (Language program)",
    scholarship: "Performance-based discounts available",
    estimatedCost: "$5,000–$8,000 per year",
    cta: "Start D4 Language Program",
    note: "Perfect foundation before degree studies.",
  },
  {
    country: "South Korea",
    code: "kr",
    title: "Vocational & Technical Programs",
    visaType: "Master E-Visa",
    highlights: [
      "GPA accepted as low as 2.5 (50%)",
      "Study gap accepted up to 4-5 years",
      "IELTS 5.5 overall score",
      "Specialized technical training",
    ],
    featured: ["Korea Polytechnic", "Seoul Institute of the Arts", "Youngsan University"],
    duration: "2–3 years (Vocational program)",
    scholarship: "Various technical program scholarships",
    estimatedCost: "$6,000–$10,000 per year",
    cta: "Explore Vocational Programs",
    note: "Focus on practical skills and employment readiness.",
  },
];

const FREE_TRACKS = [
  {
    title: "Free IELTS Preparation",
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
    accent: "from-red-500 to-pink-500",
  },
  {
    title: "Visa Consultation",
    description: "Personalized guidance on D2, D4, and E-visa requirements.",
    icon: <FiAward className="text-3xl" />,
    link: "/contact",
    accent: "from-purple-500 to-indigo-500",
  },
];

const FAQS = [
  {
    q: "Can I study in South Korea with a GPA of 2.6?",
    a: "Yes! With a GPA of 2.6 (around 55%), you are eligible to apply for regional universities in South Korea under the D-2 visa. Most regional universities have more flexible requirements compared to top Seoul universities.",
  },
  {
    q: "Is IELTS 5.5 enough for studying in South Korea?",
    a: "Yes! Many regional universities in South Korea accept IELTS 5.5 under the D-2 visa category. However, some programs may require a higher score (6.0+), so it’s best to confirm with the university.",
  },
  {
    q: "What if I graduated in 2021? Is my gap acceptable?",
    a: "Absolutely. For D-2 and D-4 visas, study gaps of up to 3 years are accepted (2023 passouts are eligible). For E-Visa programs, gaps of up to 4-5 years are acceptable.",
  },
  {
    q: "Do I need to know Korean before applying?",
    a: "Not necessarily. Many programs are available in English, and we provide free Korean language classes to help you prepare. For D-2 degree programs, IELTS 5.5 is typically sufficient.",
  },
  {
    q: "Can I work while studying in South Korea?",
    a: "Yes. Student visa holders can work part-time up to 20 hours per week during semesters and full-time during vacation periods with proper authorization.",
  },
  {
    q: "What is the D-2 regional visa in South Korea?",
    a: "The D-2 visa is for students pursuing Bachelor’s, Master’s, or PhD programs. Under the regional track, students with GPA 2.6+ and IELTS 5.5 can apply to universities outside Seoul and major cities.",
  },
  {
    q: "Are regional universities in South Korea good?",
    a: "Yes! Regional universities offer quality education, lower tuition fees, and higher acceptance rates. They are ideal for students with GPAs between 2.6–3.0 and IELTS 5.5–6.0.",
  },
  {
    q: "Can I transfer to a Seoul university later?",
    a: "Yes! Many students start at regional universities with a D-2 visa and later transfer to higher-ranked universities in Seoul once they improve their GPA and language skills.",
  },
];


export default function March2026KoreaBlog() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative grid lg:grid-cols-2 gap-8 items-center py-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#2C3C81]"
              >
                <FiCalendar /> March 2026 Intake – South Korea
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b2556]"
              >
                Study in South Korea: March 2026 Intake Open
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-4 text-gray-700 leading-relaxed"
              >
                Admissions are now open for March 2026 intake! Study in South Korea with a GPA as low as 2.5, IELTS 5.5, and gap years accepted. Free IELTS and Korean language classes available to prepare you for success.
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
                  href="/test-preparations/korean-language"
                  className="inline-flex items-center gap-2 bg-white border border-[#C73D43]/30 hover:border-[#C73D43] text-[#C73D43] px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  <FiTarget /> Join Free Korean Class
                </Link>
              </motion.div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-[#2C3C81]/20 hover:border-[#2C3C81]/40 transition-colors">
                  <p className="text-sm text-gray-500">GPA Flexibility</p>
                  <p className="font-semibold text-[#1b2556]">As low as 2.5</p>
                </div>
                <div className="p-4 rounded-lg border border-[#2C3C81]/20 hover:border-[#2C3C81]/40 transition-colors">
                  <p className="text-sm text-gray-500">Study Gap</p>
                  <p className="font-semibold text-[#1b2556]">3-5 years</p>
                </div>
                <div className="p-4 rounded-lg border border-[#2C3C81]/20 hover:border-[#2C3C81]/40 transition-colors">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-semibold text-[#1b2556]">Applications Open</p>
                </div>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#2C3C81]/10">
              <Image
                src="/korea-march-2.jpg" // You'll need to add an appropriate image
                alt="Study in South Korea - March 2026"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-md text-sm shadow border border-[#C73D43]/30">
                <span className="inline-flex items-center gap-2 text-[#C73D43] font-semibold">
                  <span className="flag-icon flag-icon-kr" /> March 2026 Admissions
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
                Gurukul Education: Your Gateway to South Korea Since 2010
              </h2>
              <p className="mt-3 text-gray-700">
                With over a decade of experience, Gurukul Education has established itself as a trusted partner for Nepali students aspiring to study in South Korea. We understand the unique challenges and opportunities of Korean education system and provide end-to-end support.
              </p>
              <p className="mt-3 text-gray-700">
                Our comprehensive services include program selection, application assistance, visa guidance, and pre-departure orientation. We maintain strong relationships with universities across South Korea to ensure our students have access to the best opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#2C3C81]/15 hover:border-[#2C3C81]/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C73D43]/10 flex items-center justify-center">
                  <FiAward className="text-[#C73D43]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Korean Partnerships</p>
                  <p className="font-semibold text-[#1b2556]">20+ university connections</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2C3C81]/10 flex items-center justify-center">
                  <FiUsers className="text-[#2C3C81]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Student Support</p>
                  <p className="font-semibold text-[#1b2556]">Visa, language, cultural training</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <FiCheckCircle className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="font-semibold text-[#1b2556]">95% visa approval</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEO badges */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg border border-[#C73D43]/25 p-4 bg-white hover:border-[#C73D43]/45 transition-colors">
              <p className="text-xs text-gray-500">Keyword Focus</p>
              <p className="font-semibold text-[#1b2556]">Study in South Korea from Nepal</p>
            </div>
            <div className="rounded-lg border border-[#2C3C81]/25 p-4 bg-white hover:border-[#2C3C81]/45 transition-colors">
              <p className="text-xs text-gray-500">Visa Track</p>
              <p className="font-semibold text-[#1b2556]">D2, D4, E-Visa South Korea</p>
            </div>
            <div className="rounded-lg border border-[#C73D43]/25 p-4 bg-white hover:border-[#C73D43]/45 transition-colors">
              <p className="text-xs text-gray-500">Language Support</p>
              <p className="font-semibold text-[#1b2556]">Free Korean & IELTS classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Classes */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556]">Free Preparation Services</h2>
            <p className="mt-3 text-gray-700">
              We provide comprehensive preparation to ensure your success in South Korean university applications.
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

          <div className="mt-6 rounded-xl bg-gradient-to-r from-[#C73D43] to-[#2C3C81] text-white p-5 text-center shadow-sm">
            <p className="font-semibold">
              New Korean language batches for March 2026: TOPIK preparation, cultural orientation, and interview practice included.
            </p>
          </div>
        </div>
      </section>

      {/* Program Listings */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556] text-center mb-8">South Korea Program Options</h2>

          <div className="space-y-6 max-w-5xl mx-auto">
            {PROGRAMS.map((p, i) => (
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

      {/* Video & Student Life */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1b2556]">Life in South Korea</h2>
            <p className="mt-3 text-gray-700">
              Discover the unique blend of traditional culture and cutting-edge technology that makes South Korea an ideal study destination.
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl ring-1 ring-[#2C3C81]/10">
            <FacebookVideoEmbed reelIds={["1133675382158863", "3645968702371779"]} />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl bg-gray-50 p-6 border border-[#2C3C81]/15">
              <h3 className="font-semibold text-[#C73D43]">Campus Experience</h3>
              <p className="mt-2 text-gray-700">
                South Korean universities offer state-of-the-art facilities, vibrant student clubs, and a supportive environment for international students.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6 border border-[#2C3C81]/15">
              <h3 className="font-semibold text-[#C73D43]">Career Opportunities</h3>
              <p className="mt-2 text-gray-700">
                South Korea's thriving economy offers excellent job prospects for graduates, especially in technology, engineering, and business fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
          <h2 className="text-3xl font-bold">Secure Your March 2026 South Korea Admission</h2>
          <p className="mt-3 text-lg text-white/90">
            Limited seats available. Free Korean language and IELTS preparation classes ongoing.
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