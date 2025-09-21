"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Admission() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const statsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      const data = await response.json();
      setShowSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setTimeout(() => setError(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation setup - simplified for mobile
  useEffect(() => {
    if (statsRef.current) {
      const children = statsRef.current.children;
      Array.from(children).forEach((child: HTMLElement, index: number) => {
        child.style.opacity = "0";
        child.style.transform = isMobile
          ? "translateY(20px)"
          : "translateY(30px)";

        setTimeout(() => {
          child.style.transition =
            "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
          child.style.opacity = "1";
          child.style.transform = "translateY(0)";
        }, index * 200 + 500);
      });
    }
  }, [isMobile]);

  const stats = [
    { number: "2000+", label: "Students Abroad" },
    { number: "12+", label: "Years Experience" },
    { number: "95%", label: "Visa Success Rate" },
  ];

  return (
    <main className="overflow-x-hidden mt-38">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1
            className="text-3xl md:text-5xl font-bold mb-3 md:mb-4"
            style={{ color: "#232E2F" }}
          >
            Study Abroad Consultation
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto px-2"
            style={{ color: "#666" }}
          >
            Turn your dream of studying abroad into reality with Nepal's
            trusted education consultancy
          </p>
        </div>

        {/* Consultation Form - Mobile optimized */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden max-w-2xl mx-auto"
          style={{ border: "2px solid #D9F1F1" }}
        >
          <div className="p-6 sm:p-8 md:p-10">
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#232E2F" }}
            >
              Free Consultation
            </h2>
            <p
              className="mb-6 md:mb-8 text-sm md:text-base"
              style={{ color: "#666" }}
            >
              Get expert guidance on your study abroad journey
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-1 md:mb-2"
                    style={{ color: "#232E2F" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg transition focus:outline-none focus:ring-2 text-sm md:text-base"
                    style={{
                      borderColor: "#D9F1F1",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#232E2F")}
                    onBlur={(e) => (e.target.style.borderColor = "#D9F1F1")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 md:mb-2"
                    style={{ color: "#232E2F" }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg transition focus:outline-none focus:ring-2 text-sm md:text-base"
                    style={{
                      borderColor: "#D9F1F1",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#232E2F")}
                    onBlur={(e) => (e.target.style.borderColor = "#D9F1F1")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1 md:mb-2"
                  style={{ color: "#232E2F" }}
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg transition focus:outline-none focus:ring-2 text-sm md:text-base"
                  style={{
                    borderColor: "#D9F1F1",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#232E2F")}
                  onBlur={(e) => (e.target.style.borderColor = "#D9F1F1")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 md:mb-2"
                  style={{ color: "#232E2F" }}
                >
                  Tell us about your study abroad goals (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Which country are you interested in? What course would you like to pursue?"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg transition focus:outline-none focus:ring-2 text-sm md:text-base"
                  style={{
                    borderColor: "#D9F1F1",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#232E2F")}
                  onBlur={(e) => (e.target.style.borderColor = "#D9F1F1")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white py-3 md:py-4 px-6 rounded-lg font-bold text-base md:text-lg transition transform hover:scale-[1.02] shadow-md disabled:opacity-70"
                style={{
                  backgroundColor: "#232E2F",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1A2323")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#232E2F")
                }
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Request Free Consultation"
                )}
              </button>
            </div>
          </div>

          <div
            className="p-4 md:p-6 text-center"
            style={{ backgroundColor: "#D9F1F1" }}
          >
            <p className="text-sm md:text-base" style={{ color: "#232E2F" }}>
              Ready to start your journey? Call us at{" "}
              <a
                href="tel:01-5916232"
                className="font-semibold hover:underline"
                style={{ color: "#232E2F" }}
              >
                +977-9862358543

              </a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}