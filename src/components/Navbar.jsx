import React from "react";
import { FiMenu, FiSearch, FiEdit, FiBell } from "react-icons/fi";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-30">
      <div className="mx-auto px-2 md:px-6 lg:px-8">
        <div className="flex-between h-16">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button className="icon-btn">
              <FiMenu size={20} className="text-gray-500" />
            </button>
            <img
              className="logo"
              alt="logo"
              src={logo}
              width={100}
              height={100}
            />
          </div>

          {/* Search (desktop only) */}
          <div className="flex-1 px-4 hidden sm:flex">
            <div className="hidden sm:flex flex-1 px-4">
              <div className="w-1/4 relative">
                <FiSearch
                  className="absolute mr-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none bg-gray-100"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 lg:gap-6">
            {/* Desktop actions */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-1 hover:bg-gray-100 text-sm">
              <FiEdit size={20} className="text-gray-500" />{" "}
              <span className="text-gray-500">Write</span>
            </button>
            <button className="icon-btn hidden sm:block">
              <FiBell size={20} className="text-gray-500" />
            </button>
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-black items-center justify-center text-xs">
              {/* Profile avatar (desktop only) */}
            </div>

            {/* Mobile icons */}
            <button className="sm:hidden p-2">
              <FiSearch className="text-gray-500" size={18} />
            </button>
            <button className="sm:hidden p-2">
              <div className="w-8 h-8 rounded-full bg-black flex-center text-xs">
                {/* Profile avatar (mobile only) */}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
