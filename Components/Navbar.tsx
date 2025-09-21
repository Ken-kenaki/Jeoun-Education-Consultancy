"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  BookOpen,
  Trophy,
  Share2,
  LogIn,
  Camera,
  BookAIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "flag-icon-css/css/flag-icons.min.css";

interface Destination {
  name: string;
  route: string;
  countryCode: string;
}

interface TestPreparation {
  name: string;
  route: string;
  iconType: "emoji" | "flag";
  icon: string;
}

interface Service {
  name: string;
  route: string;
  icon: string;
}

interface NewsEvent {
  id: string;
  title: string;
  type: string;
  content: string;
  date: string;
  status: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const destinations: Destination[] = [
    { name: "South Korea", route: "/south-korea", countryCode: "kr" },
    { name: "Australia", route: "/australia", countryCode: "au" },
    { name: "UK", route: "/uk", countryCode: "gb" },
  ];

  const testPreparations: TestPreparation[] = [
    {
      name: "IELTS Preparation",
      route: "/test-preparations/ielts",
      iconType: "emoji",
      icon: "📝",
    },
    {
      name: "Korean Language",
      route: "/test-preparations/korean-language",
      iconType: "flag",
      icon: "kr",
    },
  ];

  useEffect(() => {
    const fetchNewsEvents = async () => {
      try {
        const response = await fetch("/api/news-events?limit=5");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched news events:", data);

          // Handle the specific response structure with documents property
          if (data.documents && Array.isArray(data.documents)) {
            setNewsEvents(data.documents);
          } else if (Array.isArray(data)) {
            setNewsEvents(data);
          } else if (data.newsEvents && Array.isArray(data.newsEvents)) {
            setNewsEvents(data.newsEvents);
          } else if (data.data && Array.isArray(data.data)) {
            setNewsEvents(data.data);
          } else {
            console.error("Unexpected API response structure:", data);
            setDefaultNews();
          }
        } else {
          console.error("Failed to fetch news events:", response.status);
          setDefaultNews();
        }
      } catch (error) {
        console.error("Failed to fetch news events:", error);
        setDefaultNews();
      }
    };

    const setDefaultNews = () => {
      setNewsEvents([
        {
          id: "default-1",
          title: "Welcome to Joeun Education Consultancy",
          type: "news",
          content: "We help students achieve their study abroad dreams",
          date: new Date().toISOString(),
          status: "published",
        },
      ]);
    };

    fetchNewsEvents();
  }, []);
  // Auto-rotate news events
  useEffect(() => {
    if (newsEvents.length > 1) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prevIndex) =>
          prevIndex === newsEvents.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [newsEvents]);

  // Handle click outside mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setIsSideNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const sideNavVariants = {
    hidden: {
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mobileDropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      {/* Top Header Bar - Desktop Only with News Slider */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:flex bg-[#232E2F] text-[#D9F1F1] py-2 px-4 text-sm fixed w-full z-60 items-center justify-center"
        style={{ top: 0 }}
      >
        <div className="container mx-auto flex items-center justify-center relative">
          {newsEvents.length > 0 ? (
            <div className="overflow-hidden h-6 w-full text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNewsIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Link
                    href="/news-offer"
                    className="hover:text-white cursor-pointer transition-colors truncate"
                    aria-label="Latest news and offers"
                  >
                    {newsEvents[currentNewsIndex]?.title ||
                      "Welcome to Joeun Education Consultancy"}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              Welcome to Joeun Education Consultancy
            </div>
          )}
        </div>
      </motion.div>
      {/* Main Navigation */}
      <motion.nav
        ref={navbarRef}
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#eaf8f8] shadow-lg fixed lg:top-[40px] top-0 z-30 w-full"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Link
                href="/"
                className="text-2xl md:text-3xl font-bold"
                aria-label="Home"
              >
                <Image
                  alt="Joeun Education Consultancy"
                  width={110}
                  height={110}
                  className="w-26 md:w-40 lg:w-[120px]"
                  src="/logo.png"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6">
              {/* Study Destinations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("destinations")}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors py-4"
                  aria-label="Study destinations"
                >
                  <Link href="/countries" className="whitespace-nowrap">
                    ABROAD DESTINATIONS
                  </Link>
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "destinations" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "destinations" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="w-[30vw] absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                    >
                      <div className="flex gap-3 justify-center space-y-1 px-4">
                        {destinations.map((destination, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={destination.route}
                              className="flex justify-center items-center gap-6 px-4 py-3 rounded-lg hover:bg-[#D9F1F1] transition-colors group"
                              aria-label={`Study in ${destination.name}`}
                            >
                              <span className="flex flex-col items-center gap-4">
                                <span
                                  className={`flag-icon flag-icon-${destination.countryCode} text-7xl`}
                                ></span>
                                <span className="text-lg font-[600] text-gray-700 group-hover:text-[#232E2F]">
                                  {destination.name}
                                </span>
                              </span>
                              {/* <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#232E2F] group-hover:translate-x-1 transition-all ml-auto" /> */}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/universities"
                  className="text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors whitespace-nowrap"
                  aria-label="Universities"
                >
                  UNIVERSITIES
                </Link>
              </motion.div>

              {/* Test Preparations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("testprep")}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors py-4"
                  aria-label="Test preparations"
                >
                  <Link href="/test-preparations" className="whitespace-nowrap">
                    TEST PREPARATIONS
                  </Link>
                  <motion.div
                    animate={{
                      rotate: activeDropdown === "testprep" ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "testprep" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-[20vw] mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                    >
                      <div className="flex justify-center items-center gap-2.5 space-y-1 px-4">
                        {testPreparations.map((prep, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={prep.route}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#D9F1F1] transition-colors group"
                              aria-label={`${prep.name} test preparation`}
                            >
                              {prep.iconType === "flag" ? (
                                <span
                                  className={`flag-icon flag-icon-${prep.icon} text-xl`}
                                ></span>
                              ) : (
                                <span className="text-xl">{prep.icon}</span>
                              )}
                              <span className="text-sm font-medium text-gray-700 group-hover:text-[#232E2F]">
                                {prep.name}
                              </span>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#232E2F] group-hover:translate-x-1 transition-all ml-auto" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/about"
                  className="text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors whitespace-nowrap"
                  aria-label="About us"
                >
                  OUR STORY
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/blog"
                  className="text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors whitespace-nowrap"
                  aria-label="Blog"
                >
                  BLOG
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-[#232E2F] text-[#D9F1F1] px-4 xl:px-6 py-2 rounded font-medium hover:bg-[#2C3C81] transition-all duration-300 whitespace-nowrap"
                  aria-label="Get consultation"
                >
                  GET CONSULTATION
                </Link>
              </motion.div>

              {/* Side Nav Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:scale-110 transition-transform duration-200"
                onClick={toggleSideNav}
                aria-label={
                  isSideNavOpen ? "Close side menu" : "Open side menu"
                }
              >
                <Menu className="w-6 h-6 text-[#232E2F]" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              ref={hamburgerButtonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden hover:scale-110 transition-transform duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                ref={mobileMenuRef}
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="lg:hidden fixed top-0 right-0 w-full max-w-xs bg-white h-screen z-50 shadow-xl overflow-y-auto"
              >
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 hover:scale-110 transition-transform duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col space-y-6 mt-12"
                  >
                    {/* Mobile Top Nav Items */}
                    <div className="border-b pb-4 space-y-2">
                      <Link
                        href="/news-offer"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                        aria-label="News and offers"
                      >
                        NEWS & OFFER
                      </Link>
                      <Link
                        href="/gallery"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                        aria-label="Gallery"
                      >
                        GALLERY
                      </Link>
                      <Link
                        href="/login"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                        aria-label="Login"
                      >
                        LOGIN
                      </Link>
                    </div>

                    {/* Mobile Main Nav Items */}
                    <div className="space-y-4">
                      {/* Study Destinations Mobile Dropdown */}
                      <div className="border-b pb-2">
                        <div className="flex items-center justify-between w-full">
                          <Link
                            href="/countries"
                            className="py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            ABROAD DESTINATIONS
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMobileDropdown("destinations");
                            }}
                            aria-label="Toggle destinations dropdown"
                            className="p-2"
                          >
                            <motion.div
                              animate={{
                                rotate:
                                  mobileDropdown === "destinations" ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileDropdown === "destinations" && (
                            <motion.div
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-2">
                                {destinations.map((destination, index) => (
                                  <Link
                                    key={index}
                                    href={destination.route}
                                    className="flex items-center gap-3 py-2 text-[#232E2F] hover:text-[#2C3C81] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                    aria-label={`Study in ${destination.name}`}
                                  >
                                    <span
                                      className={`flag-icon flag-icon-${destination.countryCode}`}
                                    ></span>
                                    <span>{destination.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <Link
                        href="/universities"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Universities"
                      >
                        UNIVERSITIES
                      </Link>

                      {/* Test Preparations Mobile Dropdown */}
                      <div className="border-b pb-2">
                        <div className="flex items-center justify-between w-full">
                          <Link
                            href="/test-preparations"
                            className="py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            TEST PREPARATIONS
                          </Link>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMobileDropdown("testprep");
                            }}
                            aria-label="Toggle test preparations dropdown"
                            className="p-2"
                          >
                            <motion.div
                              animate={{
                                rotate: mobileDropdown === "testprep" ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileDropdown === "testprep" && (
                            <motion.div
                              variants={mobileDropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-2">
                                {testPreparations.map((prep, index) => (
                                  <Link
                                    key={index}
                                    href={prep.route}
                                    className="flex items-center gap-3 py-2 text-[#232E2F] hover:text-[#2C3C81] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                    aria-label={`${prep.name} test preparation`}
                                  >
                                    {prep.iconType === "flag" ? (
                                      <span
                                        className={`flag-icon flag-icon-${prep.icon}`}
                                      ></span>
                                    ) : (
                                      <span>{prep.icon}</span>
                                    )}
                                    <span>{prep.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <Link
                        href="/about"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="About us"
                      >
                        OUR STORY
                      </Link>

                      <Link
                        href="/blog"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Blog"
                      >
                        BLOG
                      </Link>

                      {/* Additional Mobile Menu Items */}
                      <Link
                        href="/resources"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Resources"
                      >
                        RESOURCES
                      </Link>

                      <Link
                        href="/success-stories"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Success Stories"
                      >
                        SUCCESS STORIES
                      </Link>

                      <Link
                        href="/share-your-story"
                        className="block py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Share Your Story"
                      >
                        SHARE YOUR STORY
                      </Link>

                      <Link
                        href="/chat-with-joeun-ai"
                        className="flex items-center gap-2 py-2 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                        onClick={() => setIsOpen(false)}
                        aria-label="Chat with Jeon AI"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>CHAT WITH JOEUN AI</span>
                      </Link>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className="w-full bg-[#232E2F] text-[#D9F1F1] px-6 py-3 rounded font-medium hover:bg-[#2C3C81] transition-all duration-300 text-center block"
                        onClick={() => setIsOpen(false)}
                        aria-label="Get consultation"
                      >
                        GET CONSULTATION
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
      // Side Navigation for Desktop
      <AnimatePresence>
        {isSideNavOpen && (
          <motion.div
            ref={sideNavRef}
            variants={{
              hidden: {
                x: "100%",
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
              visible: {
                x: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="hidden lg:block fixed top-0 right-0 w-80 bg-white h-screen z-50 shadow-xl overflow-y-auto"
          >
            <div className="p-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 hover:scale-110 transition-transform duration-200"
                onClick={() => setIsSideNavOpen(false)}
                aria-label="Close side menu"
              >
                <X className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col space-y-6 mt-12"
              >
                <h3 className="text-xl font-bold text-[#232E2F] border-b pb-2">
                  Additional Menu
                </h3>

                <div className="space-y-4">
                  <Link
                    href="/resources"
                    className="flex items-center gap-3 py-3 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                    onClick={() => setIsSideNavOpen(false)}
                    aria-label="Resources"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>RESOURCES</span>
                  </Link>

                  <Link
                    href="/success-stories"
                    className="flex items-center gap-3 py-3 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                    onClick={() => setIsSideNavOpen(false)}
                    aria-label="Success Stories"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>SUCCESS STORIES</span>
                  </Link>

                  <Link
                    href="/share-your-story"
                    className="flex items-center gap-3 py-3 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                    onClick={() => setIsSideNavOpen(false)}
                    aria-label="Share Your Story"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>SHARE YOUR STORY</span>
                  </Link>

                  <Link
                    href="/chat-with-joeun-ai"
                    className="flex items-center gap-3 py-3 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                    onClick={() => setIsSideNavOpen(false)}
                    aria-label="Chat with Joeun AI"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>CHAT WITH JOEUN AI</span>
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-3 py-3 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                    onClick={() => setIsSideNavOpen(false)}
                    aria-label="Gallery"
                  >
                    <Camera className="w-5 h-5" />
                    <span>Gallery</span>
                  </Link>

                  <Link
                    href="/login"
                    className="flex items-center gap-3 py-3 text-[#232E2F] hover:text-[#2C3C81] font-medium transition-colors border-b"
                    onClick={() => setIsSideNavOpen(false)}
                    aria-label="Login"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>LOGIN</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
