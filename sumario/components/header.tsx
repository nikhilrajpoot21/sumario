"use client";
import { FileText, Sparkles } from "lucide-react";
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="flex items-center justify-between px-4 py-4 md:py-6 border-b bg-white font-[Source_Sans_3]">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2 md:ml-4 group">
        <FileText className="w-7 h-7 text-red-600 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-semibold text-black text-sm md:text-2xl">Sumario</span>
      </div>

      {/* Middle: Nav */}
      {isSignedIn ? (
        <div className="flex items-center space-x-2 md:ml-6 gap-5 ">
          <nav className="hidden md:block">
          <Link href="#Dashboard" className="text-black font-medium md:text-[1.1rem]">
            Dashboard
          </Link>
        </nav>
        <nav className="">
          <Link href="/upload" className="text-black font-medium md:text-[1.1rem]">
            Upload
          </Link>
        </nav>
        </div>
        
      ) : (
        <nav className="hidden md:block">
          <a href="#pricing" className="text-black font-medium md:text-[1.2rem]">
            Price
          </a>
        </nav>
      )}

      {/* Right: Auth buttons */}
      <div className="flex items-center space-x-3 md:mr-6">
        {isSignedIn ? (
          <UserButton
          appearance={{
        elements: {
          avatarBox: "w-12 h-12", // increase avatar size
        },
      }}
          />
        ) : (
          <>
            <SignInButton>
              <button className="px-3 py-1.5 bg-red-600 text-white rounded-md font-medium text-xs md:text-sm">
                Login
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 bg-black text-white rounded-md font-medium text-sm">
                <span>Get Started</span>
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              </button>
            </SignUpButton>
          </>
        )}
      </div>
    </header>
  );
}
