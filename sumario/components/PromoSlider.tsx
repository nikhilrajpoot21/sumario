"use client"
import React, { useState } from "react";

const slides = [
  {
    title: "Watch how Sumario transforms this Intro to Sumario PDF into an easy-to-read summary!",
    subtitle: "✨ Sumario: Intelligent PDF Summarization 🚀",
    content: [
      "Sumario is a cutting-edge AI-powered SaaS platform engineered to revolutionize how individuals and organizations engage with information.",
      "We transform lengthy, complex documents into concise, actionable summaries, driving efficiency and informed decision-making."
    ]
  },
  {
    title: "Why Sumario?",
    subtitle: "Efficiency Meets Clarity",
    content: [
      "No more wasting hours reading dense PDFs.",
      "Get the key insights in seconds, so you can focus on decisions instead of decoding text."
    ]
  },
  {
    title: "Who Benefits?",
    subtitle: "For Teams and Individuals",
    content: [
      "Students, researchers, and professionals streamline their workflow.",
      "Organizations save time and boost productivity with instant summaries."
    ]
  },
  {
    title: "How It Works",
    subtitle: "Simple, Fast, Reliable",
    content: [
      "Upload your PDF.",
      "Sumario’s AI processes it instantly.",
      "Receive a clean, actionable summary."
    ]
  },
  {
    title: "Get Started Today",
    subtitle: "Your Productivity Partner",
    content: [
      "Sign up and experience the future of intelligent summarization.",
      "Sumario makes information accessible, clear, and actionable."
    ]
  }
];

const PromoSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white pt-12">
      <div className="text-sm text-gray-500 mb-4">
        Slide {current + 1} of {slides.length}
      </div>

      {/* Gradient border wrapper */}
      <div className="bg-gradient-to-r from-teal-200 via-pink-300 via-blue-200 to-white p-1 rounded-xl shadow-lg w-full max-w-[700px]">
        {/* Inner card */}
        <div className="bg-white rounded-lg flex flex-col justify-between p-4 sm:p-6 min-h-[350px]">
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto text-center px-2 sm:px-4">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{slide.title}</h1>
            <div className="w-12 sm:w-16 h-1 bg-red-600 mx-auto mb-4"></div>
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-400">{slide.subtitle}</h2>
            {slide.content.map((line, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mt-2 text-sm sm:text-base">
                {line}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-4 flex-wrap">
            <button
              onClick={prevSlide}
              className="px-3 sm:px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition text-sm sm:text-base"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded hover:opacity-90 transition text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSlider;
