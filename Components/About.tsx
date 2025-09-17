"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Globe,
  BookOpen,
  Target,
  Heart,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [stats, setStats] = useState([
    { icon: Users, number: "5,000+", label: "Students Guided" },
    { icon: Globe, number: "10+", label: "Countries" },
    { icon: BookOpen, number: "200+", label: "Universities" },
    { icon: Award, number: "95%", label: "Success Rate" },
  ]);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We deliver exceptional service with meticulous attention to detail, ensuring the best outcomes for our students.",
    },
    {
      icon: Heart,
      title: "Dedication",
      description:
        "We're deeply committed to each student's success, providing personalized guidance throughout their educational journey.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description:
        "We open doors to international education opportunities, helping students access world-class institutions worldwide.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Establishment",
      description:
        "Joeun Education Consultancy was founded with a mission to provide quality education consulting services.",
    },
    {
      year: "2020",
      title: "Growth",
      description:
        "Expanded our services to include comprehensive test preparation and specialized visa assistance.",
    },
    {
      year: "2022",
      title: "Recognition",
      description:
        "Gained recognition as a trusted education consultancy with strong university partnerships.",
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Strengthened our network with 200+ universities across 10+ countries.",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw] min-h-screen pt-32 bg-gradient-to-br from-[#D9F1F1] via-white to-[#D9F1F1]/50">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#232E2F] mb-6">
              About Joeun Education Consultancy
            </h1>
            <p className="text-xl text-[#232E2F]/80 max-w-3xl mx-auto">
              Empowering students to achieve their international education dreams through expert guidance and personalized support.
            </p>
          </div>
        </motion.section>


        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#232E2F] mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-[#232E2F]/80">
                  <p className="text-lg">
                    Established in 2018, Joeun Education Consultancy was founded with a clear vision: 
                    to provide exceptional guidance and support to students aspiring to study abroad. 
                    Our name "Joeun" reflects our commitment to goodness and excellence in education consulting.
                  </p>
                  <p>
                    We understand that pursuing international education is a significant decision, 
                    and we're dedicated to making this journey smooth and successful for every student. 
                    Our team of experienced consultants provides personalized guidance tailored to each 
                    student's academic background, interests, and career aspirations.
                  </p>
                  <p>
                    With partnerships across {stats[1].number} countries and connections with over {stats[2].number} 
                    universities worldwide, we continue to expand opportunities while maintaining 
                    the personalized approach that defines our service.
                  </p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    fill
                    src="/consulting-office.jpg"
                    alt="Education consulting office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232E2F]/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-[#D9F1F1]"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232E2F] text-center mb-12">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#232E2F]/30"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-[#232E2F] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-[#232E2F] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-[#232E2F]/80">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-[#232E2F] rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 px-4 bg-white"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232E2F] text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center p-8 rounded-xl bg-[#D9F1F1] hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-[#232E2F]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#232E2F] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#232E2F]/80">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

       
       
      </div>
    </main>
  );
}