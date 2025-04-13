import React from "react";
import techStack from "@/data/techStack";
import { Meteors } from "./ui/Meteors";

export default function TechStackGridItem() {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pt-1 w-full">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="px-4 py-2 bg-neutral-200/80 dark:bg-purple-900 text-neutral-800 dark:text-neutral-200 rounded-md shadow-md hover:bg-neutral-300/80 dark:hover:bg-neutral-700/80 transition-colors flex flex-col items-center gap-2"
        >
          <span className="text-m">{tech.name}</span>          
        </div>
      ))}
      <Meteors number={30}/>
    </div>
  );
}
