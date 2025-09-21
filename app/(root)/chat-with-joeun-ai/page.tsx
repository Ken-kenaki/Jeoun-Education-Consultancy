// app/chat/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { playNotificationSound } from "@/lib/sound/sound";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// Predefined questions about the consultancy
const suggestedQuestions = [
  "What services do you offer?",
  "Tell me about studying in South Korea",
  "What are the requirements for D2 visa?",
  "How can I contact you?",
  "Do you offer Korean language classes?",
  "What is the D4 Language Visa?",
  "When is the next intake for South Korea?",
  "Do you provide scholarship information?",
];



export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);




  // Add welcome message on first load
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! I'm Joeun AI, here to help you with information about studying abroad, especially in South Korea. How can I assist you today?",
        },
      ]);
    }
  }, [messages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);

      // Play sound when AI responds
      playNotificationSound();
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    // Auto-submit the question
    setTimeout(() => {
      const submitEvent = new Event("submit", {
        bubbles: true,
        cancelable: true,
      });
      const form = document.querySelector("form");
      if (form) {
        form.dispatchEvent(submitEvent);
      }
    }, 100);
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <div className="min-h-screen mt-30 bg-gray-100 pt-16 pb-10">
      {/* Header - Fixed to top on mobile */}
      <header className="bg-[#2e7777] text-white p-3 shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 md:h-6 md:w-6 md:mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center mr-2 md:mr-3">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image
                  src="/notification-avatar.png"
                  alt="Joeun Education Consultancy"
                  fill
                  className="rounded-full"
                />
              </div>
            </div>
            <h1 className="text-lg md:text-xl font-bold">Joeun AI Assistant</h1>
          </div>
          <div className="w-6 md:w-6"></div> {/* Spacer for balance */}
        </div>
      </header>

      <div className="container mx-auto px-3 md:p-4 max-w-4xl mt-4">
        {/* Info Panel */}
        <div className="bg-[#f0f7f7] p-4 md:p-6 rounded-lg mb-4 md:mb-6 border border-[#2e7777] shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#2e7777]">
            About Joeun Education Consultancy
          </h2>
          <p className="text-[#2e7777] mb-3 md:mb-4 text-sm md:text-base">
            We help students achieve their dreams of studying abroad with a
            special focus on South Korea.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
            <div>
              <h3 className="font-semibold text-[#2e7777]">Our Services</h3>
              <ul className="list-disc list-inside text-[#2e7777] pl-1 md:pl-2">
                <li>Study Abroad Consulting</li>
                <li>Visa Assistance</li>
                <li>Test Preparation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#2e7777]">Study Destinations</h3>
              <ul className="list-disc list-inside text-[#2e7777] pl-1 md:pl-2">
                <li>South Korea</li>
                <li>Australia</li>
                <li>United Kingdom</li>
              </ul>
            </div>
            <div className="mt-2 md:mt-0">
              <h3 className="font-semibold text-[#2e7777]">Contact Nepal</h3>
              <p className="text-[#2e7777]">+977 9808085693</p>
              <p className="text-[#2e7777]">+977-9862358543</p>
            </div>
            <div className="mt-2 md:mt-0">
              <h3 className="font-semibold text-[#2e7777]">Contact Korea</h3>
              <p className="text-[#2e7777]">+82 106 787 4320</p>
              <p className="text-[#2e7777] text-xs md:text-sm">
                joeuneducationconsultancy@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Chat container */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col h-[70vh] min-h-[400px] max-h-[600px]">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] md:max-w-xs px-3 py-2 md:px-4 md:py-2 rounded-lg flex ${
                    message.role === "user"
                      ? "bg-[#2e7777] text-white"
                      : "bg-gray-100 text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="mr-2 flex-shrink-0">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center">
                        <div className="relative w-4 h-4 md:w-5 md:h-5">
                          <Image
                            src="/notification-avatar.png"
                            alt="Joeun Education Consultancy"
                            fill
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="break-words">
                    {message.role === "assistant" && (
                      <div className="font-bold text-xs text-[#2e7777]">
                        Joeun AI
                      </div>
                    )}
                    <div className="text-sm md:text-base">{message.content}</div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 md:px-4 md:py-2 rounded-lg flex items-center border border-gray-200 max-w-[85%] md:max-w-xs">
                  <div className="mr-2 flex-shrink-0">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="relative w-4 h-4 md:w-5 md:h-5">
                        <Image
                          src="/notification-avatar.png"
                          alt="Joeun Education Consultancy"
                          fill
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#2e7777]">
                      Joeun AI
                    </div>
                    <div className="flex items-center text-sm md:text-base">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-[#2e7777]"
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
                      Thinking...
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions with toggle */}
          <div className="bg-gray-100 border-t">
            <button
              onClick={toggleSuggestions}
              className="w-full py-2 px-3 flex items-center justify-between text-xs md:text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              aria-expanded={showSuggestions}
            >
              <span className="font-medium">Suggested questions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-3 w-3 md:h-4 md:w-4 transition-transform ${
                  showSuggestions ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showSuggestions && (
              <div className="p-2 border-t">
                <div className="flex flex-wrap gap-1 md:gap-2 max-h-20 overflow-y-auto">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs bg-white border border-gray-300 rounded-full px-2 py-1 md:px-3 md:py-1 hover:bg-[#f0f7f7] hover:border-[#2e7777] transition-colors whitespace-nowrap overflow-hidden text-ellipsis max-w-[95%]"
                      title={question}
                    >
                      {question.length > 30 ? `${question.substring(0, 30)}...` : question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about studying abroad..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7777] text-sm md:text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-3 py-2 md:px-4 md:py-2 bg-[#2e7777] text-white rounded-md hover:bg-[#235e5e] focus:outline-none focus:ring-2 focus:ring-[#2e7777] disabled:opacity-50 transition-colors text-sm md:text-base whitespace-nowrap"
                disabled={isLoading || !input.trim()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}