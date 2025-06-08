import clsx from "clsx";
import { useAppContext } from "../context/useAppContext";
// import testImage from "../assets/projects-images/restaurant.jpg"; // Replace with actual image import
export default function ProjectCard({ title, description, link, technologies, image }: { title: string; description: string; link: string; technologies: string, image: string }) {
    const { theme } = useAppContext();
    return (
        <div className={clsx(
            "shadow-lg rounded-lg mb-6 max-w-96",
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-[#161513]",
            "flex flex-col items-start justify-between transition-all duration-300 hover:shadow-xl hover:scale-105"
        )}>
            {/* Image Container with Hover Effect */}
            <div className="relative w-full h-48 rounded-md mb-4 overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className={clsx(
                        "w-full object-cover transition-all duration-300",
                        "group-hover:blur-sm group-hover:brightness-50"
                    )}
                />

                {/* Technologies Overlay (shown on hover) */}
                <div className={clsx(
                    "absolute inset-0 flex flex-col items-center justify-center",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "p-4 text-center"
                )}>
                    <h4 className={clsx(
                        "font-semibold mb-2 lg:text-lg text-sm ",
                        "text-white"
                    )}>Technologies Used:</h4>
                    <p className={clsx(
                        "text-sm lg:text-xs",
                        theme === "dark" ? "text-gray-300" : "text-gray-100"
                    )}>{technologies}</p>
                </div>
            </div>

            {/* Rest of your card content */}
            <h3 className="text-lg font-bold pl-3 pr-3 mb-1">{title}</h3>
            <p className={clsx(
                "text-gray-700 mb-2 text-sm pl-3 pr-3",
                theme === "dark" ? "dark:text-gray-300" : "text-gray-600"
            )}>{description}</p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                    "text-blue-500 hover:text-blue-700 pl-3 pb-3 pr-3",
                    theme === "dark" ? "dark:text-blue-400" : "text-blue-600"
                )}
            >
                View Project
            </a>
        </div>
    );
}