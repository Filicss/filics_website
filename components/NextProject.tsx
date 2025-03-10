import React from "react";
import Image from "next/image";

export default function NextProject() {
  return (
    <div className="flex flex-col w-full">
      <div className="py-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-purple-600">Next Project</h2>
      </div>
      <div className="relative flex justify-center w-full h-[400px] overflow-hidden">
        <Image
          src="/codesBackground.png"
          alt="Background"
          fill
          className="object-cover"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1))',
          }}
        />
        <div className="relative top-20 flex justify-center text-white">
          <p className="text-2xl font-bold text-center max-w-2xl -mt-12">
          I&apos;m planning to build a mini Telegram to solidify my skills in multi-client communication.
          </p>
        </div>
      </div>
    </div>
  );
}