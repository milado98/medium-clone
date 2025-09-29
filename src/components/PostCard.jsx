import React from "react";
import {
  FiMessageCircle,
  FiMinusCircle,
  FiBookmark,
  FiMoreHorizontal,
} from "react-icons/fi";
import { FaHandsClapping } from "react-icons/fa6";
import { PiStarFour } from "react-icons/pi";

export default function PostCard({ post }) {
  return (
    <article className="w-full pb-6">
      <div className="px-2">
        {/* If clapper exists */}
        {post.clapper && (
          <div className="mb-1 lg:mb-2">
            <div className="flex items-center gap-2 meta-text">
              <FaHandsClapping className="text-gray-700" />
              <span>{post.clapper}</span>
              <span>clapped</span>
            </div>
            <div className="mt-3 ml-2 h-5 border-l-2 border-gray-300"></div>
          </div>
        )}

        <div className="flex items-center lg:gap-4">
          {/* Left (Post Details) */}
          <div className="flex-1 sm:mr-10 lg:mr-24">
            <div className="flex items-center my-3">
              <img
                src={post.groupImage}
                alt="group"
                className="avatar-sm mr-1 lg:mr-2"
              />
              {post.group ? (
                <div className="flex items-center gap-1 text-xs lg:text-base">
                  <span className="text-gray-500">In</span>
                  <span className="text-gray-900">{post.group}</span>
                  <span className="text-gray-500">by</span>
                  <span className="text-gray-900">{post.author}</span>
                </div>
              ) : (
                <span className="text-author">
                  {post.author}
                </span>
              )}
            </div>

            <h1 className="post-title">{post.title}</h1>

            {/* Description */}
            <p className="desc line-clamp-2">{post.desc}</p>

            {/* Meta */}
            <div className="hidden lg:flex items-center justify-between my-4 lg:my-5 meta-text">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-5">
                  <PiStarFour className="text-yellow-500 " />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaHandsClapping />
                  <span>{post.claps}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMessageCircle />
                  <span>{post.comments}</span>
                </div>
              </div>

              {/* Right icons (desktop only) */}
              <div className="hidden lg:flex items-center gap-2">
                <button className="icon-btn">
                  <FiMinusCircle size={20} />
                </button>
                <button className="icon-btn">
                  <FiBookmark size={20} />
                </button>
                <button className="icon-btn">
                  <FiMoreHorizontal size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right (image) */}
          <div className="flex w-20 h-16 sm:w-32 sm:h-24 lg:w-40 lg:h-30 rounded">
            <img
              src={post.image}
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* {Small Screen Meta} */}
        <div className="lg:hidden w-full">
          <div className="flex items-center justify-between my-4 lg:my-5 meta-text">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <PiStarFour className="text-yellow-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaHandsClapping />
                <span>{post.claps}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMessageCircle />
                <span>{post.comments}</span>
              </div>
            </div>

            {/* Right icons (Mobile only) */}
            <div className="flex items-center gap-2">
              <button className="icon-btn-sm">
                <FiMinusCircle size={14} />
              </button>
              <button className="icon-btn-sm">
                <FiMoreHorizontal size={14} />
              </button>
            </div>
          </div>
        </div>

        <hr className="card-divider" />
      </div>
    </article>
  );
}
