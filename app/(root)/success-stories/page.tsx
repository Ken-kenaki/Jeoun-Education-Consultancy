"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, X, Star, User, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { appwriteConfig, getImageUrl } from "@/utils/appwrite";
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

export default function SuccessStoriesPage(): JSX.Element {
  const [stories, setStories] = useState<Story[]>([]);
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    program: "",
    university: "",
    content: "",
    rating: 5,
    file: null,
  });

  const STORIES_BUCKET = appwriteConfig.buckets.stories;

  const getStoryImageUrl = (imageId?: string, width?: number, height?: number) => {
    if (!imageId) return null;
    return getImageUrl(imageId, STORIES_BUCKET, width || 200, height || 200);
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
      const approvedStories = Array.isArray(data?.documents) ? data.documents : [];
      setStories(approvedStories);
      setFilteredStories(approvedStories);
    } catch (error) {
      console.error("Fetch Stories Error:", error);
      setStories([]);
      setFilteredStories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = stories.filter(
        (story) =>
          story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          story.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
          story.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
          story.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStories(filtered);
    } else {
      setFilteredStories(stories);
    }
  }, [searchTerm, stories]);

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

  const openStoryModal = (story: Story) => {
    setSelectedStory(story);
  };

  const closeStoryModal = () => {
    setSelectedStory(null);
  };

  const openImageViewer = (e: React.MouseEvent, story: Story) => {
    e.stopPropagation(); // Prevent opening the story modal
    setSelectedStory(story);
    setImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setImageViewerOpen(false);
  };

  if (loading) {
    return (
      <div className="bg-[#D9F1F1] min-h-screen mt-25 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#232E2F] mx-auto" />
            <p className="mt-4 text-[#232E2F]">Loading success stories...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#D9F1F1] mt-25 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#232E2F] mb-4">
            Student Success Stories
          </h1>
          <p className="text-[#232E2F]/80 text-lg max-w-3xl mx-auto">
            Discover inspiring journeys of our students who achieved their international education dreams
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#232E2F]/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search stories by name, program, university or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#232E2F]/20 focus:outline-none focus:ring-2 focus:ring-[#232E2F] bg-white"
            />
          </div>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.$id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col cursor-pointer"
              onClick={() => openStoryModal(story)}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center"
                  onClick={(e) => openImageViewer(e, story)}
                >
                  {story.imageId ? (
                    <img
                      src={getStoryImageUrl(story.imageId) || ""}
                      alt={story.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.jpg";
                      }}
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#232E2F]">{story.name}</h3>
                  <p className="text-sm text-[#232E2F]/80">{story.program}</p>
                  <p className="text-xs text-[#232E2F]/60">{story.university}</p>
                </div>
              </div>

              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < story.rating
                        ? "text-[#232E2F] fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-[#232E2F]/90 mb-6 flex-grow line-clamp-4">
                &quot;{story.content}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>

        {filteredStories.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-[#232E2F] text-lg">
              {searchTerm
                ? "No stories match your search criteria."
                : "No success stories available yet."}
            </p>
          </div>
        )}
        
        {/* Add Your Story Button - Update to use Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/share-your-story">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center bg-[#232E2F] text-[#D9F1F1] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              aria-label="Share your success story"
            >
              Share Your Story
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

      </div>

      {/* Story Detail Modal */}
      <AnimatePresence>
        {selectedStory && !imageViewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={closeStoryModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div 
                      className="w-20 h-20 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        closeStoryModal();
                        openImageViewer(e, selectedStory);
                      }}
                    >
                      {selectedStory.imageId ? (
                        <img
                          src={getStoryImageUrl(selectedStory.imageId, 80, 80) || ""}
                          alt={selectedStory.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.jpg";
                          }}
                        />
                      ) : (
                        <User className="w-10 h-10 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-[#232E2F]">{selectedStory.name}</h3>
                      <p className="text-lg text-[#232E2F]/80">{selectedStory.program}</p>
                      <p className="text-md text-[#232E2F]/60">{selectedStory.university}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeStoryModal}
                    className="text-[#232E2F] hover:text-red-500 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < selectedStory.rating
                          ? "text-[#232E2F] fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[#232E2F]/90 text-lg leading-relaxed mb-6">
                  &quot;{selectedStory.content}&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {imageViewerOpen && selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeImageViewer}
          >
            <div className="relative max-w-4xl w-full max-h-full p-4">
              <button
                onClick={closeImageViewer}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col items-center">
                {selectedStory.imageId ? (
                  <img
                    src={getStoryImageUrl(selectedStory.imageId, 800, 800) || ""}
                    alt={selectedStory.name}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.jpg";
                    }}
                  />
                ) : (
                  <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-32 h-32 text-gray-400" />
                  </div>
                )}
                
                <div className="mt-4 text-center text-white">
                  <h3 className="text-xl font-bold">{selectedStory.name}</h3>
                  <p className="text-lg">{selectedStory.program}</p>
                  <p className="text-md">{selectedStory.university}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}