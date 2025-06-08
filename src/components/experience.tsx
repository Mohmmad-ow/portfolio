import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/useAppContext";
import clsx from "clsx";
import type { Experience } from "../utility/types"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ExperienceCard from "./experienceCard";


export default function Experience() {
    const { theme } = useAppContext()
    const { t } = useTranslation()
    const experiences: Experience[] = [
        {
            date: t("experience_1_date"),
            description: t("experience_1_description"),
            title: t("experience_1_title"),
            icon: faGoogle
        },
        {
            date: t("experience_2_date"),
            description: t("experience_2_description"),
            title: t("experience_2_title"),
            icon: faGithub
        }
    ]

    return (
        <div className={clsx(
            theme === "dark" ? "bg-[#161513]  text-white" : "bg-white text-[#161513]",
            "p-16 sm:pl-40 w-full sm:pr-40 shadow-lg"
        )}>
            <h2 className="text-3xl pb-2 text-center mt-6 mb-9 font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-200 to-blue-600">
                {t("experience")}
            </h2>

            <div className={clsx(
                "flex flex-col gap-12 justify-between items-center"
            )}>
                {experiences.map((e, idx) => (
                    <ExperienceCard
                        key={idx}
                        experience={{
                            title: e.title,
                            description: e.description,
                            icon: e.icon,
                            date: e.date
                        }}
                    />
                ))}
            </div>

        </div>
    )
}