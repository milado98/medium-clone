import React from "react";
import StaffPicks from "./widgets/StaffPicks";
import RecommendedTopics from "./widgets/RecommendedTopics";
import WhoToFollow from "./widgets/WhoToFollow";
import ReadingLists from "./widgets/ReadingLists";
import { staffPicks, topics, whoToFollow, links } from "../data";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block my-6 sticky top-16">
      <div className="w-80">
        <StaffPicks items={staffPicks} />
        <RecommendedTopics topics={topics} />
        <WhoToFollow people={whoToFollow} />
        <ReadingLists />

        {/* {Footer} */}
        <ul className="flex flex-wrap gap-x-2 gap-y-2 text-xs text-gray-500 leading-relaxed">
          {links.map((link, i) => (
            <li key={i}>
              <a href="#" className="hover:underline">
                {link}
              </a>
            </li>
          ))}
      </ul>
      </div>
    </aside>
  );
}
