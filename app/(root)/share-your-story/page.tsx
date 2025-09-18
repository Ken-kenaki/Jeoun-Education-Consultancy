"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, User } from "lucide-react";
import Link from "next/link";

interface FormData {
  name: string;
  program: string;
  university: string;
  content: string;
  rating: number;
  file: File | null;
}

export default function ShareYourStoryPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    program: "",
    university: "",
    content: "",
    rating: 5,
    file: null,
  });

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files?.[0] || null,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("program", formData.program);
        formDataToSend.append("university", formData.university);
        formDataToSend.append("content", formData.content);
        formDataToSend.append("rating", formData.rating.toString());

        if (formData.file) {
          formDataToSend.append("file", formData.file);
        }

        const response = await fetch("/api/stories", {
          method: "POST",
          body: formDataToSend,
        });

        if (!response.ok) throw new Error("Failed to submit story");

        setFormData({
          name: "",
          program: "",
          university: "",
          content: "",
          rating: 5,
          file: null,
        });
        alert("Thank you! Your story has been submitted for review.");
      } catch (error) {
        alert("Failed to submit story. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <div className="bg-[#D9F1F1] mt-25 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/success-stories"
            className="inline-flex items-center text-[#232E2F] hover:text-opacity-80 mb-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Success Stories
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#232E2F] mb-4">
            Share Your Success Story
          </h1>
          <p className="text-[#232E2F]/80 text-lg max-w-3xl">
            Inspire others by sharing your journey to international education
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[#232E2F] mb-2 font-medium"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#232E2F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232E2F] transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="program"
                className="block text-[#232E2F] mb-2 font-medium"
              >
                Program
              </label>
              <input
                id="program"
                type="text"
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                placeholder="e.g., MSc Computer Science"
                className="w-full px-4 py-3 border border-[#232E2F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232E2F] transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="university"
                className="block text-[#232E2F] mb-2 font-medium"
              >
                University
              </label>
              <input
                id="university"
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="e.g., University of Toronto"
                className="w-full px-4 py-3 border border-[#232E2F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232E2F] transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-[#232E2F] mb-2 font-medium"
              >
                Your Photo (Optional)
              </label>
              <input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#D9F1F1] file:text-[#232E2F] hover:file:bg-[#c5e8e8]"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-[#232E2F] mb-2 font-medium"
              >
                Your Story
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={6}
                placeholder="Share your experience with us..."
                className="w-full px-4 py-3 border border-[#232E2F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232E2F] transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-[#232E2F] mb-2 font-medium"
              >
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#232E2F]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232E2F] transition-all"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    {num} Star{num !== 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#232E2F] text-[#D9F1F1] px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 text-lg"
              aria-label="Submit your story"
            >
              {isSubmitting ? "Submitting..." : "Share Your Story"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}