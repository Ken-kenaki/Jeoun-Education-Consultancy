"use client";
import React, { useState, useEffect, useMemo } from "react";
import { X, Search, Grid, List, Eye, ArrowRight } from "lucide-react";
import { getImageUrl, appwriteConfig } from "@/utils/appwrite";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

interface GalleryImage {
  name: string;
  url: string;
}

export default function GallerySlider() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "slider">("slider");
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const galleryBucketId = appwriteConfig.buckets.gallery;

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/gallery");
        if (!res.ok) throw new Error("Failed to fetch gallery");
        const data = await res.json();

        const formatted = data.map((img: any) => ({
          name: img.title || "Untitled",
          url: getImageUrl(img.imageId, galleryBucketId),
        }));
        setImages(formatted);
      } catch (error) {
        console.error("Gallery fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [galleryBucketId]);

  const filteredImages = useMemo(() => {
    if (searchTerm.trim() === "") return images;
    return images.filter((img) =>
      img.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [images, searchTerm]);

  const firstSliderImages = useMemo(() => {
    const half = Math.ceil(filteredImages.length / 2);
    return filteredImages.slice(0, half);
  }, [filteredImages]);

  const secondSliderImages = useMemo(() => {
    const half = Math.ceil(filteredImages.length / 2);
    return filteredImages.slice(half);
  }, [filteredImages]);

  const openModal = (url: string) => setSelectedImage(url);
  const closeModal = (e?: React.MouseEvent | KeyboardEvent) => {
    if (e) e.stopPropagation();
    setSelectedImage(null);
  };

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }
    if (selectedImage) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#D9F1F1]">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 rounded-full border-4 border-[#232E2F] border-t-transparent mx-auto mb-4" />
          <p className="text-[#232E2F] text-lg">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <div className="w-full max-w-[100vw] min-h-screen pt-28 md:pt-40 bg-[#D9F1F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* View Mode Toggle - Responsive Layout */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#232E2F] pb-1.5">Our Journey in Images</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#232E2F] text-sm md:text-base"
                />
              </div>
              <div className="flex bg-white rounded-full p-1 shadow self-end sm:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full ${viewMode === "grid" ? "bg-[#232E2F] text-white" : "text-gray-600"}`}
                  aria-label="Grid view"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("slider")}
                  className={`p-2 rounded-full ${viewMode === "slider" ? "bg-[#232E2F] text-white" : "text-gray-600"}`}
                  aria-label="Slider view"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Images Display */}
          {filteredImages.length === 0 ? (
            <div
              className="text-center py-20 bg-white rounded-xl shadow"
              role="status"
              aria-live="polite"
            >
              <Search
                className="w-10 h-10 text-gray-300 mx-auto mb-2"
                aria-hidden="true"
              />
              <p className="text-lg text-[#232E2F]">
                No images found
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {filteredImages.map((img) => (
                <article
                  key={img.url}
                  tabIndex={0}
                  role="button"
                  onClick={() => openModal(img.url)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(img.url);
                    }
                  }}
                  className="cursor-pointer group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#232E2F] bg-white rounded-xl overflow-hidden shadow hover:scale-105"
                  aria-label={`View image ${img.name}`}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={img.url}
                      alt={img.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.jpg";
                      }}
                    />
                  </div>
                  <div className="p-2 text-center">
                    <p className="text-xs md:text-sm font-medium truncate text-[#232E2F]">
                      {img.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Two Sliders View - Responsive */
            <div className="space-y-10 md:space-y-16">
              {/* First Slider */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
                className="relative"
              >
                <h2 className="text-xl md:text-2xl font-bold text-[#232E2F] mb-4 md:mb-6">Collection 1</h2>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={isMobile ? 15 : 30}
                  slidesPerView={1}
                  breakpoints={{
                    480: { slidesPerView: isMobile ? 1.2 : 1 },
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  navigation={!isMobile}
                  autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                  className="!pb-10 md:!pb-12"
                >
                  {firstSliderImages.map((img) => (
                    <SwiperSlide key={img.url}>
                      <motion.div
                        whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="group relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openModal(img.url)}
                      >
                        {/* Image */}
                        <div className="absolute inset-0 bg-gray-200">
                          <Image
                            src={img.url}
                            alt={img.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/placeholder.jpg";
                            }}
                          />
                        </div>

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6 transition-all duration-300 group-hover:bg-black/70">
                          <div className="mb-1 md:mb-2">
                            <h3 className="text-base md:text-xl font-bold text-white line-clamp-1">
                              {img.name}
                            </h3>
                          </div>

                          {/* Hidden Details - Reveals on Hover/Click */}
                          <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            whileHover={isMobile ? {} : { maxHeight: 200, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 md:pt-4 border-t border-white/30">
                              <p className="text-white/90 text-xs md:text-sm">Click to view full size</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* Second Slider */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
                className="relative"
              >
                <h2 className="text-xl md:text-2xl font-bold text-[#232E2F] mb-4 md:mb-6">Collection 2</h2>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={isMobile ? 15 : 30}
                  slidesPerView={1}
                  breakpoints={{
                    480: { slidesPerView: isMobile ? 1.2 : 1 },
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  navigation={!isMobile}
                  autoplay={{ delay: 5000, pauseOnMouseEnter: true, reverseDirection: true }}
                  className="!pb-10 md:!pb-12"
                >
                  {secondSliderImages.map((img) => (
                    <SwiperSlide key={img.url}>
                      <motion.div
                        whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="group relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => openModal(img.url)}
                      >
                        {/* Image */}
                        <div className="absolute inset-0 bg-gray-200">
                          <Image
                            src={img.url}
                            alt={img.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/placeholder.jpg";
                            }}
                          />
                        </div>

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6 transition-all duration-300 group-hover:bg-black/70">
                          <div className="mb-1 md:mb-2">
                            <h3 className="text-base md:text-xl font-bold text-white line-clamp-1">
                              {img.name}
                            </h3>
                          </div>

                          {/* Hidden Details - Reveals on Hover/Click */}
                          <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            whileHover={isMobile ? {} : { maxHeight: 200, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 md:pt-4 border-t border-white/30">
                              <p className="text-white/90 text-xs md:text-sm">Click to view full size</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          )}
        </div>

        {/* Modal - Responsive */}
        {selectedImage && (
          <aside
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 md:p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Selected image preview"
            tabIndex={-1}
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full mx-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Close image preview"
                className="absolute -top-10 right-0 md:top-4 md:right-4 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X className="text-white" />
              </button>
              <div className="relative h-[70vh] md:h-auto">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  fill
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}