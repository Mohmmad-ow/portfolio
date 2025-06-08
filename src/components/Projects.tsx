import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/useAppContext";
import clsx from "clsx";
// import CarouselViewer from "./Carousel";
import ProjectCard from "./ProjectCard";
import restaurantImage from "../assets/projects-images/restaurant.jpg";
import blogImage from "../assets/projects-images/blog.jpg";
import attendanceImage from "../assets/projects-images/attendance.jpg";
import CarouselViewer from "./Carousel";

export default function Projects() {
    const {t} = useTranslation();
    const {theme} = useAppContext();
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
        <section className={clsx(
            theme === "dark" ? "bg-[#161513] text-white" : "bg-white text-[#161513]",
            "p-16 sm:pl-40 sm:pr-40 shadow-lg"
        )}>
            {/* {projects.map((project, index) => (
                <ProjectCard key={index} image={project.image} title={project.title} i18nIsDynamicList description={project.description} link={project.link} technologies={project.technologies} />
            ))} */}
            <CarouselViewer projects={projects} i18nIsDynamicList key={projects.length} />
        </section>
    );
}