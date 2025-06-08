import React from "react";
import { useAppContext } from "../context/useAppContext";
import type { Experience } from "../utility/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function ExperienceCard({ experience }: {experience: Experience}) {
    const {theme} = useAppContext() 

    return (
        <div className={clsx(
            "flex flex-col shadow-2xl  rounded-xl p-4 justify-center w-full",
            theme === "dark" ? " shadow-gray-800 bg-[#161513] text-white" : " bg-white text-black"
        )}>
            <div className={clsx(
                "flex justify-between p-4  items-center"
            )}>
                <div className="flex justify-between gap-4 items-center">
                    <FontAwesomeIcon icon={experience.icon} size={"2xl"} color={theme === "dark" ? "white" : "black"} />
                    <h3 className="text-2xl">{experience.title}</h3>
                </div>
                <span>{experience.date}</span>
            </div>
            <p className="text-sm p-4">{experience.description}</p>
        </div>
    )
};

