
import { Sparkles } from "lucide-react";

export default function Herosection() {
  return (
    <section className="bg-gradient-to-b from-teal-100 to-white px-6 py-20 text-center font-[Source_Sans_3]">
      {/* Powered by AI badge */}
      <div className="inline-flex items-center space-x-2 px-4 py-2 border rounded-full text-md font-medium text-gray-700 mb-6">
        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
        <span>Powered by AI</span>
      </div>

      {/* Main heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-black max-w-3xl mx-auto leading-tight">
        Transform PDFs into{" "}
        <span className="bg-pink-200 px-2 rounded">concise</span> summaries
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
        Get a beautiful summary reel of the document in seconds.
      </p>

      {/* CTA button */}
      <div className="mt-8">
        <a
          href="#try"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-4xl text-white font-semibold bg-gradient-to-r from-purple-700 to-red-600 hover:opacity-90 transition"
        >
          <span>Try Sumario</span>
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}
