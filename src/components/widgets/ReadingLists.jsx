import React from "react";
import { FiBookmark } from "react-icons/fi";

export default function ReadingLists() {
  return (
    <div className="mb-6">
      <h4 className="section-title">Reading lists</h4>
      <p className="text-muted pr-2 leading-7">Click the <FiBookmark size={18} className="inline align-text-bottom" /> on any story to easily add it to your reading list or a custom list that you can share. </p>
    </div>
  );
}
