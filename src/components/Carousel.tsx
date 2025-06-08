import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import ProjectCard from "./ProjectCard"; // Adjust path based on your project
import useWindowDimensions from "../utility/WindowSizes";
import type { Project, Theme } from "../utility/types";

const ProjectCarousel = ({ projects, theme }: { projects: Project[], theme: Theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { width } = useWindowDimensions();


    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    if (width < 768) {
        return (
            <div
                className={clsx(
                    theme === "dark"
                        ? "bg-[#161513] text-white"
                        : "bg-white text-[#161513]"
                )}
            >
                <div className="flex items-center justify-center px-2 relative  overflow-hidden">
                    {/* Current project */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({
                                    x: dir > 0 ? "100%" : "-100%",
                                    opacity: 0,
                                    scale: 0.9,
                                }),
                                center: {
                                    x: "0%",
                                    opacity: 1,
                                    scale: 1,
                                },
                                exit: (dir: number) => ({
                                    x: dir < 0 ? "100%" : "-100%",
                                    opacity: 0,
                                    scale: 0.9,
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="z-10"
                        >
                            <ProjectCard {...projects[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 my-12">
                    <AnimatePresence mode="wait">
                        {projects.map((_, indx) => {
                            const isActive = currentIndex === indx;
                            return (
                                <motion.button
                                    key={`position-${indx}`}
                                    initial={{ scale: 0.0, opacity: 0.5 }}
                                    animate={{
                                        opacity: 1,
                                        scale: isActive ? 1.2 : 1,
                                        rotate: 0,
                                    }}
                                    exit={{ scale: 0.0, rotate: 90, opacity: 0.7 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    onClick={() => {
                                        if (!isActive) {
                                            setDirection(indx > currentIndex ? -1 : 1);
                                            setCurrentIndex(indx);
                                        }
                                    }}
                                    className={clsx(
                                        isActive
                                            ? theme === "dark"
                                                ? "bg-white"
                                                : "bg-black"
                                            : theme === "dark"
                                                ? "bg-gray-600"
                                                : "bg-gray-300",
                                        "h-1 rounded-4xl cursor-pointer",

                                        isActive ? "w-8" : "w-4"
                                    )}
                                />
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-between rtl:flex-row-reverse items-center mt-8 px-12">
                    <motion.button
                        onClick={goToPrev}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={clsx(
                            "pl-3 pr-3 p-2 rounded-full cursor-pointer",
                            theme === "dark"
                                ? "border border-white hover:border-none hover:bg-white hover:text-black"
                                : "border border-black hover:border-none hover:bg-black hover:text-white"
                        )}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </motion.button>

                    <motion.button
                        onClick={goToNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={clsx(
                            "pl-3 pr-3 p-2 rounded-full cursor-pointer",
                            theme === "dark"
                                ? "border border-white hover:border-none hover:bg-white hover:text-black"
                                : "border border-black hover:border-none hover:bg-black hover:text-white"
                        )}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </motion.button>
                </div>
            </div>
        )
    }

    return (
        <div
            className={clsx(
                theme === "dark"
                    ? "bg-[#161513] text-white"
                    : "bg-white text-[#161513]"
            )}
        >
            <div className="flex items-center justify-center px-24 relative  overflow-hidden">
                {/* Previous project */}
                <motion.div
                    onClick={goToPrev}
                    key={`prev-${prevIndex}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 0.9 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 blur-xs, mt-12 hover:cursor-pointer"
                >
                    <ProjectCard {...projects[prevIndex]} />
                </motion.div>

                {/* Current project */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={{
                            enter: (dir: number) => ({
                                x: dir > 0 ? "100%" : "-100%",
                                opacity: 0,
                                scale: 0.9,
                            }),
                            center: {
                                x: "0%",
                                opacity: 1,
                                scale: 1,
                            },
                            exit: (dir: number) => ({
                                x: dir < 0 ? "100%" : "-100%",
                                opacity: 0,
                                scale: 0.9,
                            }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="z-10"
                    >
                        <ProjectCard {...projects[currentIndex]} />
                    </motion.div>
                </AnimatePresence>

                {/* Next project */}
                <motion.div
                    onClick={goToNext}
                    key={`next-${nextIndex}-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.4, scale: 0.9 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 blur-xs, mt-12 hover:cursor-pointer"
                >
                    <ProjectCard {...projects[nextIndex]} />
                </motion.div>
            </div>
            <div className="flex justify-center gap-2 my-12">
                <AnimatePresence mode="wait">
                    {projects.map((_, indx) => {
                        const isActive = currentIndex === indx;
                        return (
                            <motion.button
                                key={`position-${indx}`}
                                initial={{ scale: 0.0, opacity: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    scale: isActive ? 1.2 : 1,
                                    rotate: 0,
                                }}
                                exit={{ scale: 0.0, rotate: 90, opacity: 0.7 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                onClick={() => {
                                    if (!isActive) {
                                        setDirection(indx > currentIndex ? -1 : 1);
                                        setCurrentIndex(indx);
                                    }
                                }}
                                className={clsx(
                                    isActive
                                        ? theme === "dark"
                                            ? "bg-white"
                                            : "bg-black"
                                        : theme === "dark"
                                            ? "bg-gray-600"
                                            : "bg-gray-300",
                                    "h-1 rounded-4xl cursor-pointer",

                                    isActive ? "w-8" : "w-4"
                                )}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-between rtl:flex-row-reverse items-center mt-8 px-12">
                <motion.button
                    onClick={goToPrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={clsx(
                        "pl-3 pr-3 p-2 rounded-full cursor-pointer",
                        theme === "dark"
                            ? "border border-white hover:border-none hover:bg-white hover:text-black"
                            : "border border-black hover:border-none hover:bg-black hover:text-white"
                    )}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </motion.button>

                <motion.button
                    onClick={goToNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={clsx(
                        "pl-3 pr-3 p-2 rounded-full cursor-pointer",
                        theme === "dark"
                            ? "border border-white hover:border-none hover:bg-white hover:text-black"
                            : "border border-black hover:border-none hover:bg-black hover:text-white"
                    )}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </motion.button>
            </div>
        </div>
    );
};

export default ProjectCarousel;
