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

export default function Values() {


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

  
  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw] min-h-screen pt-12 bg-white">
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
