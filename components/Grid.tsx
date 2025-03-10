import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/gridItems";
import TechStackGridItem from "./TechStackGridItem";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "I am passionate about crafting responsive and user-friendly web experiences with a focus on clean code and effective collaboration",
    description: "",
    header: null,
    className: "relative bg-cover bg-center bg-[url('/coding_laptop.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/50 flex items-center justify-center",
  },
  {
    title: "My tech stack",
    description: "I constantly try to improve myself",
    header: <TechStackGridItem/>,
  },
  {
    title: "A self-taught beginner web developer and a quick learner",
    description: "",
    header: null,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    className: "relative flex items-center justify-center"
  },  
];

export default function Grid() {
  return (
    <section id="about" className="pt-2">
      <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(
            item.className,
            i === 0 ? "md:col-span-3 md:row-span-4" : "",
            i === 1 ? "md:col-span-2 md:row-span-3" : "",
            i === 2 ? "md:col-span-2 md:row-span-1" : "",
          )}
        />
      ))}
    </BentoGrid>
    </section>
  )
}
