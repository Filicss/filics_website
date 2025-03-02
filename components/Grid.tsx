import React from "react";
import { cn } from "@/lib/utils";
import {  
  IconClipboardCopy,  
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/gridItems";
const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
 
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};


// const items = [
//   {
//     title: "AI Content Generation",
//     description: (
//       <span className="text-sm">
//         Experience the power of AI in generating unique content.
//       </span>
//     ),
//     className: "md:col-span-1",
//     header: <SkeletonOne />,    
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Automated Proofreading",
//     description: (
//       <span className="text-sm">
//         Let AI handle the proofreading of your documents.
//       </span>
//     ),
//     className: "md:col-span-1",
//     header: <SkeletonOne />,    
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Contextual Suggestions",
//     description: (
//       <span className="text-sm">
//         Get AI-powered suggestions based on your writing context.
//       </span>
//     ),
//     className: "md:col-span-1",
//     header: <SkeletonOne />,    
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Sentiment Analysis",
//     description: (
//       <span className="text-sm">
//         Understand the sentiment of your text with AI analysis.
//       </span>
//     ),
//     className: "md:col-span-2",
//     header: <SkeletonOne />,    
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
 
//   {
//     title: "Text Summarization",
//     description: (
//       <span className="text-sm">
//         Summarize your lengthy documents with AI technology.
//       </span>
//     ),
//     className: "md:col-span-1",
//     header: <SkeletonOne />,    
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
// ];

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => { return (<BentoGridItem 
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        className={item.className}
        img={item.img}
        imgClassName={item.imgClassName}
        titleClassName={item.titleClassName}
        spareImg={item.spareImg}
        ></BentoGridItem>) })}
      </BentoGrid>
    </section>
  )
}
