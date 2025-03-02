import React from "react";

export default function HeroButton(
    { title, icon, handleClick, otherClasses }:
        { title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses: string; }) {
    return (
        <div>
            <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div className="inline-flex items-center gap-2 px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                    <span className="text-xl">{icon} </span>
                    {title}
                </div>
            </button>
        </div>
    )
}