"use client"
import React from "react";

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h1>

      {/* Cards wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Free Plan */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col justify-between p-6">
          {/* Upper info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Free Plan</h2>
            <p className="text-gray-600 mb-4">Perfect for individuals who want to try Sumario.</p>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Summarize up to 3 PDFs/month</li>
              <li>✔ Basic AI summarization</li>
              <li>✔ Email support</li>
            </ul>
          </div>
          {/* Button */}
          <button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Try Now
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col justify-between p-6">
          {/* Upper info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Pro Plan</h2>
            <p className="text-gray-600 mb-4">Best for professionals and teams.</p>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Unlimited PDF summaries</li>
              <li>✔ Advanced AI insights</li>
              <li>✔ Priority support</li>
            </ul>
            <p className="text-2xl font-bold text-red-600 mt-4">$10/month</p>
          </div>
          {/* Button */}
          <button className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:opacity-90 transition">
            Try Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
