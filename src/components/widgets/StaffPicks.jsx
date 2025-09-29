import React from "react";
import { PiStarFour } from "react-icons/pi";

export default function StaffPicks({ items }) {
  return (
    <div className="mb-10">
      <h4 className="section-title">Staff picks</h4>
      <ul className="space-y-4">
        {items.map((it, i) => (
          <li key={i} className="space-y-2 pb-4 last:border-b-0">
            {/* Group image + Text */}
            <div className="flex items-center text-sm text-gray-600">
              <img
                src={it.groupImage}
                alt="group"
                className="avatar-sm mr-2"
              />

              {it.group ? (
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">In</span>
                  <span>{it.group}</span>
                  <span className="text-gray-500">by</span>
                  <span>{it.author}</span>
                </div>
              ) : (
                <p>{it.author}</p>
              )}
            </div>

            {/* Title */}
            <h2 className="staff-title">{it.title}</h2>

            {/* Meta info */}
            <div className="flex items-center gap-5 text-sm text-gray-500">
              {it.star && <PiStarFour className="text-yellow-500" />}
              <span>{it.date}</span>
            </div>
          </li>
        ))}
      </ul>

      <a href="#" className="font-medium text-gray-500 hover:underline">
        See the full list
      </a>
    </div>
  );
}
