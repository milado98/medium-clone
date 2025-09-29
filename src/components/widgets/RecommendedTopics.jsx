import React from "react";

export default function RecommendedTopics({ topics }) {
  return (
    <div className="mb-10">
      <h4 className="section-title">Recommended topics</h4>
      <div className="flex flex-wrap gap-2 mb-3">
        {topics.map((t, i) => (
          <button key={i} className="topic-btn">
            {t}
          </button>
        ))}
      </div>
      <a href="#" className="font-medium text-gray-500 hover:underline">See more topics</a>
    </div>
  );
}
