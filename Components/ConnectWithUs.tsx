"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ConnectWithUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#232E2F] mb-6">
              <span className="text-[#D9F1F1] bg-[#232E2F] px-2 py-1 rounded">
                Connect
              </span>{" "}
              With Us
            </h2>
            <p className="text-[#232E2F]/80 mb-8 text-lg">
              Stay updated with our latest news, events, and student success
              stories through our social media channels.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=61553837827750"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white p-3 rounded-full hover:bg-[#166FE5] transition-colors"
              >
                {/* Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="instagram.com/joeuneducation%3Figsh%3DMWRsa3AxaDFvZmd6dQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white p-3 rounded-full hover:opacity-90 transition-opacity"
              >
                {/* Instagram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@nextgen.advisors?_t=ZS-8xXmzvxH4Rb&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#232E2F] text-white p-3 rounded-full hover:bg-[#000000] transition-colors"
              >
                {/* TikTok */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-[#D9F1F1] p-3 rounded-full text-[#232E2F]">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:+977-9862358543"
                  className="text-[#232E2F] hover:text-[#000000] transition-colors"
                >
                  +977-9862358543
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#D9F1F1] p-3 rounded-full text-[#232E2F]">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href="mailto:joeuneducationconsultancy@gmail.com"
                  className="text-[#232E2F] hover:text-[#000000] transition-colors"
                >
                  joeuneducationconsultancy@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#D9F1F1] p-3 rounded-full text-[#232E2F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[#232E2F]">Boudha, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/connect.jpeg"
              alt="Connect With Us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
