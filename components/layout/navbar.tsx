"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);

      // Encode URL query to handle special characters
      const encodedQuery = encodeURIComponent(searchQuery.trim());
      router.push(`/search?q=${encodedQuery}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* --- Logo --- */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#2b80ffbb] p-1.5 rounded-lg">
              <Gamepad2 className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white">
                GAME<span className="text-blue-500">LIST</span>
              </span>
              <p className="text-[#768ea5] text-sm md:text-md">
                [A Frontend Developer Assignment]
              </p>
            </div>
          </Link>

          {/* --- Search Bar  --- */}
          <div className="hidden md:block w-1/3 max-w-sm">
            <form onSubmit={handleSearch} className="relative group">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#232323] text-gray-200 text-sm rounded-full pl-10 pr-4 py-2 border border-transparent focus:border-blue-500 focus:bg-[#2a2a2a] focus:outline-none transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 group-focus-within:text-blue-500" />
            </form>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden bg-[#121212] border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <form onSubmit={handleSearch} className="relative mt-4">
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#232323] text-gray-200 text-sm rounded-lg pl-10 pr-4 py-3 border border-transparent focus:border-blue-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          </form>

          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
