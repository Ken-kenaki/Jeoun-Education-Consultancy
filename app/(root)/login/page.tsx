"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin");
      } else {
        const errorData = await response.json();
        setError(
          errorData.error || "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-inter text-[#231F20] bg-gradient-to-br from-[#F5F4F5] via-white to-[#B2ACCE]/20 overflow-hidden py-8 px-4">
      {/* Background elements - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E3F4FF] z-0 hidden md:block"></div>
      <svg
        className="absolute top-1/2 left-0 w-full h-[150px] z-[1] hidden md:block"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path d="M0,96 C360,0 1080,200 1440,96 L1440,0 L0,0 Z" fill="#E3F4FF" />
      </svg>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#BBE4FF] z-0 hidden md:block"></div>

      {/* Mobile background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E3F4FF] to-[#BBE4FF] md:hidden z-0"></div>

      {/* Login container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[400px] md:max-w-[850px] relative z-10 mx-4"
      >
        {/* Left Panel - hidden on mobile, shown on desktop */}
        <div className="hidden md:flex md:w-[40%] bg-[#F9FAFB] p-8 flex-col items-center justify-center border-r border-[#E5E7EB]">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center flex flex-col items-center justify-center"
          >
            <Image
              src="/logo.png"
              width="220"
              height="220"
              alt="Joeun Education Consultancy"
              className="w-[120px] h-auto mb-4"
            />
            <div className="text-[1.8rem] font-bold text-[#4374BA]">Joeun Education Consultancy</div>

          </motion.div>
        </div>

        {/* Mobile header - shown only on mobile */}
        <div className="md:hidden p-6 bg-[#F9FAFB] border-b border-[#E5E7EB] flex flex-col items-center">
          <Image
            src="/logo.png"
            width="120"
            height="120"
            alt="Joeun Education Consultancy"
            className="w-[80px] h-auto mb-3"
          />
          <div className="text-xl font-bold text-[#4374BA] text-center">Joeun Education Consultancy</div>
          <div className="text-sm mt-1 text-[#3DB878] text-center">
            Elevate your dream to study abroad
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[60%] p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-[1.5rem] m-0 mb-2 text-[#2C3C81] font-bold">
              Welcome Back
            </h2>
            <p className="text-[#6B7280] text-sm md:text-[0.95rem] mb-6 md:mb-8">
              Sign in to your admin account
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2C3C81] mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B2ACCE]"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-3 border border-[#B2ACCE]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C73D43] focus:border-transparent transition-all duration-200 text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#2C3C81] mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B2ACCE]"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-10 py-3 border border-[#B2ACCE]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C73D43] focus:border-transparent transition-all duration-200 text-sm md:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B2ACCE] hover:text-[#2C3C81] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#C73D43] hover:bg-[#2C3C81] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C73D43] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Sign in
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </motion.button>

              <p className="mt-4 text-sm text-[#6B7280] text-center">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#3DB878] font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}