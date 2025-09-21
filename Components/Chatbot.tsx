// components/Chatbot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { playNotificationSound } from "@/lib/sound/sound";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatbotProps {
  isOpenByDefault?: boolean;
  showToggle?: boolean;
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

export default function Chatbot({
  isOpenByDefault = false,
  showToggle = true,
}: ChatbotProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(isOpenByDefault);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message on first load when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! I'm Joeun AI, here to help you with information about studying abroad, especially in South Korea. How can I assist you today?",
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    setShowSuggestions(false); // Hide suggestions after user sends a message

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

      // Play sound when AI responds - now uses your custom sound
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowSuggestions(true);
    }
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <>
      {/* Chat toggle button for layout */}
      {showToggle && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-[#2e7777] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#235e5e] transition-colors md:bottom-6 md:right-6"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          )}
        </button>
      )}

      {/* Chat container */}
      <div
        className={`${
          showToggle
            ? "fixed bottom-20 right-4 z-40 md:bottom-24 md:right-6"
            : "relative"
        } ${
          isOpen ? "block" : "hidden"
        } w-[calc(100vw-2rem)] max-w-sm md:w-96 md:max-w-md h-96 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col`}
      >
        {/* Chat header */}
        <div className="bg-[#2e7777] text-white p-3 rounded-t-lg flex justify-between items-center">
          <div className="font-semibold flex items-center">
            {/* Logo avatar */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
              <Image
                src="/notification-avatar.png"
                alt="Joeun Education Consultancy"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
            </div>
            Joeun AI
          </div>
          {showToggle && (
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] px-4 py-2 rounded-lg flex ${
                  message.role === "user"
                    ? "bg-[#2e7777] text-white"
                    : "bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="mr-2 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Image
                        src="/notification-avatar.png"
                        alt="Joeun Education Consultancy"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                )}
                <div>
                  {message.role === "assistant" && (
                    <div className="font-bold text-xs text-[#2e7777]">
                      Joeun AI
                    </div>
                  )}
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center border border-gray-200 max-w-[85%]">
                <div className="mr-2 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Image
                      src="/notification-avatar.png"
                      alt="Joeun Education Consultancy"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xs text-[#2e7777]">
                    Joeun AI
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#2e7777]"
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
            className="w-full py-2 px-3 flex items-center justify-between text-sm text-gray-700 hover:bg-gray-200 transition-colors"
            aria-expanded={showSuggestions}
          >
            <span className="font-medium">Suggested questions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform ${
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
              <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-[#f0f7f7] hover:border-[#2e7777] transition-colors whitespace-nowrap overflow-hidden text-ellipsis max-w-[95%]"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="p-3 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about studying abroad..."
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2e7777]"
              disabled={isLoading}
              ref={inputRef}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#2e7777] text-white rounded-md hover:bg-[#235e5e] focus:outline-none focus:ring-2 focus:ring-[#2e7777] disabled:opacity-50 transition-colors"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}