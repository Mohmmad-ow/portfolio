import { useState } from "react";
import type { Project } from "../utility/types";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/useAppContext";
import ProjectCard from "./ProjectCard";
import useWindowDimensions from "../utility/WindowSizes";
export default function CarouselViewer({ projects }: { projects: Project[] }) {
    const { t } = useTranslation();
    const { theme } = useAppContext();
    const { width } = useWindowDimensions()
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const nextProject = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % projects.length);
    };
    const prevProject = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    const currentProject = projects[currentIndex];
    if (width < 768) {
        return (
            <div className="carousel">
                <div className="carousel-item ">
                    <h3>{currentProject.title}</h3>
                    <p>{currentProject.description}</p>
                    <a href={currentProject.link}>View Project</a>
                    <p>Technologies: {currentProject.technologies}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={clsx(
            theme === "dark" ? "bg-[#161513] text-white" : "bg-white text-[#161513]"
            // "shadow-lg"
        )}>
            <div className="flex items-center justify-center pl-12 pr-12">
                <div className={clsx(
                    "flex justify-center items-center opacity-75 scale-50"
                )}>
                    <ProjectCard description={projects[prevIndex].description} image={projects[prevIndex].image} link={projects[prevIndex].link} technologies={projects[prevIndex].technologies} title={projects[prevIndex].title} i18nIsDynamicList />
                </div>
                <ProjectCard description={projects[currentIndex].description} image={projects[currentIndex].image} link={projects[currentIndex].link} technologies={projects[currentIndex].technologies} title={projects[currentIndex].title} i18nIsDynamicList />
                <div className={clsx(
                    "flex justify-center items-center opacity-75 scale-50"
                )}>
                    <ProjectCard description={projects[nextIndex].description} image={projects[nextIndex].image} link={projects[nextIndex].link} technologies={projects[nextIndex].technologies} title={projects[nextIndex].title} i18nIsDynamicList />
                </div>
            </div>


        </div >
    )
}