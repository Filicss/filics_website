import React from "react";
import techStack from "@/data/techStack";
import { Meteors } from "./ui/Meteors";

export default function TechStackGridItem() {
  const renderSkillDots = (skillLevel: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${i < skillLevel
            ? skillLevel > 3
              ? 'bg-green-500'
              : skillLevel === 3
                ? 'bg-yellow-500'
                : 'bg-red-500'
            : 'bg-gray-300'}`}
        />
      ));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pt-1 w-full">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-neutral-200/80 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 rounded-md shadow-md hover:bg-neutral-300/80 dark:hover:bg-neutral-700/80 transition-colors flex flex-col items-center gap-2"
        >
          <span>{tech.name}</span>
          <div className="flex gap-1">
            {renderSkillDots(tech.skllLevel)}
          </div>
        </div>
      ))}
      <Meteors number={30}/>
    </div>
  );
}
