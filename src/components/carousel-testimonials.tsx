import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import useWindowDimensions from "../utility/WindowSizes";
import type { Testimonial, Theme } from "../utility/types";
import TestimonialCard from "./testimonialCard";

const TestimonialCarousel = ({ testimonials, theme }: { testimonials: Testimonial[], theme: Theme }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const { width } = useWindowDimensions();


    if (width < 768) {
        return (
            <div
                className={clsx(
                    theme === "dark"
                        ? "bg-[#161513] text-white"
                        : "bg-white text-[#161513]",
                        "flex flex-col justify-center"
                )}
            >
                <div className="flex-col p-12 flex items-center justify-center relative overflow-hidden">
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
                            <TestimonialCard testimonial={{
                                name: testimonials[currentIndex].name,
                                role: testimonials[currentIndex].role,
                                message: testimonials[currentIndex].message,
                                avatarUrl: testimonials[currentIndex].avatarUrl
                            }} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 my-12">
                    <AnimatePresence mode="wait">
                        {testimonials.map((_, indx) => {
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
            </div>
        )
    }

    return (
        <div
            className={clsx(
                theme === "dark"
                    ? "bg-[#161513] text-white"
                    : "bg-white text-[#161513]",
                "flex flex-col justify-center items-center"
            )}
        >
            <div className="flex flex-col items-center justify-between w-[75%] relative  overflow-hidden">
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
                        <TestimonialCard testimonial={{
                            name: testimonials[currentIndex].name,
                            role: testimonials[currentIndex].role,
                            message: testimonials[currentIndex].message,
                            avatarUrl: testimonials[currentIndex].avatarUrl
                        }} />
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-center gap-2 my-12">
                    <AnimatePresence mode="wait">
                        {testimonials.map((_, indx) => {
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
            </div>
            </div>
            );
};

            export default TestimonialCarousel;
