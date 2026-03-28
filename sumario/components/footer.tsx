// components/Footer.tsx
import { Code, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white font-[Source_Sans_3]">
      {/* Top black border + copyright line */}
      <div className="border-t border-black">
        <div className="px-4 py-3 text-center text-xs sm:text-sm md:text-base text-gray-600">
          © 2026 Sumario. All rights reserved. | 
          <a href="#privacy" className="hover:text-black ml-1">Privacy Policy</a> | 
          <a href="#terms" className="hover:text-black ml-1">Terms of Service</a>
        </div>
      </div>

      {/* Container with left and right parts */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-6 py-6 md:py-8 border-t border-gray-200">
        {/* Right part: personal info */}
        <div className="flex flex-col items-start space-y-2 sm:space-y-3">
          <div className="text-black font-medium text-sm sm:text-base">
            Nikhil Singh Rajpoot
          </div>

          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <a
              href="https://github.com/nikhilrajpoot21/sumario.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-600 hover:text-black"
            >
              Github
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <a
              href="mailto:nikhil.rajpoot.2104@gmail.com"
              className="text-xs sm:text-sm text-gray-600 hover:text-black"
            >
              nikhil.rajpoot.2104@gmail.com
            </a>
          </div>
        </div>

        {/* Left part: essential links */}
        <div className="mt-4 md:mt-0">
          <h4 className="font-semibold text-black text-sm sm:text-base">Essential Links</h4>
          <ul className="mt-2 space-y-1 text-xs sm:text-sm text-gray-600">
            <li><a href="#about" className="hover:text-black">About Us</a></li>
            <li><a href="#privacy" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-black">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
