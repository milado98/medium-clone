import React, { useState } from "react";
import NavBar from "./components/NavBar";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import { posts } from "./data";

export default function App() {

  const [activeTab, setActiveTab] = useState("For You");

  return (
    <div className="min-h-screen text-gray-900">
      <NavBar />
      <main className="pl-4 lg:pl-40 pr-4 sm:pr-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Posts section */}
          <section className="lg:col-span-7 lg:pr-24">
          <div className="sticky top-16 bg-white z-20 border-b border-gray-300 px-2 pt-2 lg:pt-6">
              <div className="flex gap-8 text-xs lg:text-base">
                {/* For You */}
                <button
                  onClick={() => setActiveTab("For You")}
                  className={`pb-3 ${
                    activeTab === "For You"
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500"
                  }`}
                >
                  For You
                </button>

                {/* Featured */}
                <button
                  onClick={() => setActiveTab("Featured")}
                  className={`pb-3 ${
                    activeTab === "Featured"
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500"
                  }`}
                >
                  Featured
                </button>
              </div>
            </div>
            <div className="space-b-6 mt-10">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <section className="lg:col-span-3 border-l border-gray-200 pl-10">
            <Sidebar />
          </section>
        </div>
      </main>
    </div>
  );
}
