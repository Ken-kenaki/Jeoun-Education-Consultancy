"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, X, Star, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { appwriteConfig, getImageUrl } from "@/utils/appwrite"; // Keep your original import
import Link from "next/link";

interface Story {
  $id: string;
  name: string;
  program: string;
  university: string;
  content: string;
  rating: number;
  imageId?: string;
  status: string;
}

interface FormData {
  name: string;
  program: string;
  university: string;
  content: string;
  rating: number;
  file: File | null;
}

export default function StudentSuccessCarousel(): JSX.Element {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    program: "",
    university: "",
    content: "",
    rating: 5,
    file: null,
  });

  const STORIES_BUCKET = appwriteConfig.buckets.stories;

  // PRESERVING YOUR ORIGINAL IMAGE HANDLING CODE EXACTLY AS YOU HAD IT
  const getStoryImageUrl = (imageId?: string) => {
    if (!imageId) return null;
    return getImageUrl(imageId, STORIES_BUCKET, 200, 200);
  };

  const fetchStories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/stories?status=approved&t=${Date.now()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Request failed with status ${response.status}`
        );
      }

      const data = await response.json();
      setStories(Array.isArray(data?.documents) ? data.documents : []);
    } catch (error) {
      console.error("Fetch Stories Error:", error);
      setStories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

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

        setIsPopupOpen(false);
        setFormData({
          name: "",
          program: "",
          university: "",
          content: "",
          rating: 5,
          file: null,
        });
        alert("Thank you! Your story has been submitted for review.");
        await fetchStories();
      } catch (error) {
        alert("Failed to submit story. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, fetchStories]
  );

  if (loading) {
    return (
      <div className="bg-[#F5F4F5] py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C73D43] mx-auto" />
            <p className="mt-4 text-[#2C3C81]">Loading success stories...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="stories" className="bg-[#F5F4F5] py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1aa7a7] mb-4">
            Student Success Stories
          </h2>
          <p className="text-[#232E2F] text-lg max-w-3xl mx-auto">
            Hear from our students who achieved their international education
            dreams
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={story.$id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                      {/* KEEPING YOUR ORIGINAL IMAGE HANDLING CODE EXACTLY AS YOU HAD IT */}
                      {story.imageId ? (
                        <img
                          src={getStoryImageUrl(story.imageId) || ""}
                          alt={story.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/placeholder.jpg";
                          }}
                        />
                      ) : (
                        <User className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2a9f9f]">{story.name}</h3>
                      <p className="text-sm text-[#2a9f9f]/80">
                        {story.program}
                      </p>
                      <p className="text-xs text-[#232E2F]/60">
                        {story.university}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < story.rating
                            ? "text-[#2a9f9f] fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-[#232E2F]/90 mb-6 flex-grow line-clamp-4">
                    &quot;{story.content}&quot;
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Add Your Story Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPopupOpen(true)}
            className="group inline-flex items-center bg-[#2a9f9f] text-[#F5F4F5] px-8 py-3 rounded-lg font-semibold hover:bg-[#2C3C81] transition-colors"
            aria-label="Share your success story"
          >
            <Link href="/share-your-story">
            Share Your Story
            </Link>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

       
      </div>
    </div>
  );
}
