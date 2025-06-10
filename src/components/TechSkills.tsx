import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/useAppContext";
import { SVGs } from "../assets/SVGs/SVG";
import clsx from "clsx";
import TechSkillModal from "./TechSkillsModal";
export default function TechnicalSkills() {
    const { t } = useTranslation();
    const { theme } = useAppContext();
    const skills = SVGs(theme)
    console.log(skills);
    return (
        <section id="technicalSkills" className={clsx(
            theme === "dark" ? "bg-[#161513] text-white" : "bg-white text-[#161513]",
            "pl-[15%] flex flex-col justify-center gap-4 pr-[15%] md:pl-[30%] md:pr-[30%] sm:pl-[25%] sm:pr-[25%] pt-8 pb-8"
        )}>
            <h4 className={clsx(
                theme === "dark" ? "text-white" : "text-[#161513]",
                "text-center p-6 font-semibold text-xl sm:text-2xl"
            )}>{t("Experience_With")}</h4>
            <ul className="grid grid-cols-5 place-items-center pl-[0] pr-[0] sm:pl-[4%] gap-x-0 sm:pr-[4%] gap-y-8 text-white">
                <li className="flex justify-center w-full">
                    {skills.JS}
                </li>
                <li className="flex justify-center w-full">
                    {skills.Next}
                </li>
                <li className="flex justify-center w-full">
                    {skills.HTML5}
                </li>
                <li className="flex justify-center w-full">
                    {skills.CSS3}
                </li>
                <li className="flex justify-center w-full">
                    {skills.React}
                </li>
                <li className="flex justify-center w-full">
                    {skills.TS}
                </li>
                <li className="flex justify-center w-full">
                    {skills.Golang}
                </li>
                <li className="flex justify-center w-full">
                    {skills.Database}
                </li>
                <li className="flex justify-center w-full">
                    {skills.tailwindcss}
                </li>
                <li className="flex justify-center w-full">
                    {skills.ElectronJs}
                </li>
            </ul>
            <TechSkillModal />
        </section>
    );
}