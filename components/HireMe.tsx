"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/3D-Pin";
import { Globe } from "./ui/Globe";
import { GlobeDemo } from "./ui/GlobeDemo";
import InOfficeWork from "./InOfficeWork";

const HireMeSection = () => {
  return (
    <div className="py-20" id="work">
      <h1 className="heading mb-10">
        Everything You Need to Know{" "}
        <span className="text-purple-500">About me</span>
      </h1>
      <div className="grid grid-cols-2 auto-rows-[15rem]">
        <div className="row-span-3 overflow-hidden">
          <GlobeDemo />
        </div>
        <div className="flex row-span-3 flex-col h-screen justify-between">
          <InOfficeWork />
        </div>
      </div>
    </div>
  );
};

export default HireMeSection;
