// app/contact/page.tsx  (ya app/page.tsx)

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPopup(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-3xl">
          <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-14">
            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Get in Touch
              </h1>
              <p className="text-gray-400 text-lg">
                Have a project in mind? Let's talk!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                    <FaUser className="w-5 h-5 text-blue-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-700/40 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                    <FaEnvelope className="w-5 h-5 text-blue-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 bg-gray-700/40 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <FaCommentDots className="w-5 h-5 text-blue-400" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hi! I'd like to discuss a project..."
                  className="w-full px-5 py-4 bg-gray-700/40 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 text-lg tracking-wide cursor-pointer"
              >
                <FaPaperPlane className="w-6 h-6" />
                Send Message
              </button>
            </form>

            <p className="text-center text-gray-500 mt-8 text-sm md:text-base">
              We typically reply within a few hours
            </p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60  px-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fade-in">
            <FaCheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Message Sent Successfully
            </h2>
            <p className="text-gray-400 mb-6 font-semibold">
              Thank you for reaching out. We have received your message and will
              get back to you shortly.
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 h-12 bg-linear-to-r from-blue-600 to-purple-600 cursor-pointer hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition"
              >
                Close
              </button>

              <button
                onClick={() => router.push("/")}
                className="flex-1 h-12 bg-linear-to-r from-blue-600 to-purple-600 cursor-pointer hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
