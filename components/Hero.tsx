import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import HeroButton from "./ui/HeroButton";
import { CgProfile } from "react-icons/cg";


const title = "Welcome to Filics's portfolio website!";

export default function Hero() {
    return (
        <div className="pb-20 pt-36 mb-52" id="hero">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="absolute top-0 left-0 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div>
                <TextGenerateEffect className="text-center text-[40px] text-5xl lg:text-6xl" words={title}></TextGenerateEffect>
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

                    <div className="relative z-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                        <h3>
                            Hi, I&apos;m Filics, a web developer. I&apos;m looking for job opportunities.
                        </h3>
                    </div>

                    <div className="mx-auto">
                        <a href="#about">
                            <HeroButton title="About me" icon={<CgProfile />} />
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}
