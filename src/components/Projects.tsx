import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/useAppContext";
import clsx from "clsx";
import restaurantImage from "../assets/projects-images/restaurant.jpg";
import blogImage from "../assets/projects-images/blog.jpg";
import attendanceImage from "../assets/projects-images/attendance.jpg";
import CarouselViewer from "./Carousel";

export default function Projects() {
    const { t } = useTranslation();
    const { theme } = useAppContext();
    const projects = [
        {
            title: t("project_1_title"),
            description: t("project_1_description"),
            link: t("project_1_link"),
            technologies: t("project_1_technologies"),
            image: restaurantImage // Use the imported image directly
        },
        {
            title: t("project_2_title"),
            description: t("project_2_description"),
            link: t("project_2_link"),
            technologies: t("project_2_technologies"),
            image: blogImage // Use the imported image directly
        },
        {
            title: t("project_3_title"),
            description: t("project_3_description"),
            link: t("project_3_link"),
            technologies: t("project_3_technologies"),
            image: attendanceImage // Use the imported image directly
        }
    ];
    return (
        <section id="projects" className={clsx(
            theme === "dark" ? "bg-[#161513] text-white" : "bg-white text-[#161513]",
            "p-16 sm:pl-40 sm:pr-40"
        )}>
            <h2 className="text-3xl pb-2 text-center mt-6 mb-9 font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-orange-600">
                {t("projects")}
            </h2>
            <CarouselViewer projects={projects} theme={theme} key={projects.length} />
        </section>
    );
}