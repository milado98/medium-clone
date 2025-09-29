import React from "react";

export default function WhoToFollow({ people }) {
  return (
    <div className="mb-10">
      <h4 className="section-title">Who to follow</h4>
      <ul className="space-y-5">
        {people.map((p, i) => (
          <li key={i} className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="avatar-md flex-center">
                <img
                  src={p.image}
                  alt="DP"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                {/* Name */}
                <div className="text-base font-bold">{p.name}</div>

                {/* Category (only if exists) */}
                {p.category && (
                  <div className="text-sm text-gray-700 pb-2">{p.category}</div>
                )}

                {/* Description */}
                <div className="text-muted pr-2">{p.desc}</div>
              </div>
            </div>

            {/* Follow button */}
            <button className="pill-btn">
              Follow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
