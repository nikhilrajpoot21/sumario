"use client";
import { Sparkles } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white flex flex-col items-center justify-center px-4">
      {/* Top badge */}
      <button className="flex items-center gap-2 px-4 py-2 bg-transparent rounded-full text-sm font-medium shadow-md mb-6 border-black border-1 text-black">
        <Sparkles className="w-5 h-5 text text-red-700 animate-pulse bg-transparent"/>
        AI-Powered Content Creation
      </button>

      {/* Hero text */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-black">
        Start Uploading{" "}
        <span className="bg-pink-200 text-black px-2 rounded">Your PDF’s</span>
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Upload Your PDF and let our AI do the magic ✨
      </p>

      {/* Upload form */}
      <form className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="file"
          accept=".pdf"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-auto text-black "
        />
        
        <button
          type="submit"
          className="px-6 py-2 bg-pink-500 text-white rounded-md font-medium shadow-md hover:bg-pink-600 transition"
        >
          Upload Your PDF
        </button>
      </form>
    </div>
  );
}
