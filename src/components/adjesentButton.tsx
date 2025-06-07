import clsx from "clsx";
import { useAppContext } from "../context/useAppContext";
import { useTranslation } from "react-i18next";
export default function AdjacentButton() {
    const { theme } = useAppContext();
    const { t } = useTranslation();
    return (
        <div className={"flex gap-4 mt-4"}>
            <button className={clsx(
                theme === "dark" ? "bg-white border-2 border-white hover:bg-transparent shadow text-[#161513] hover:text-white transition duration-400 " : "bg-[#161513] border-2 border-black hover:bg-transparent hover:text-black  shadow text-white transition duration-400",
                "px-4 py-2 rounded-full shadow hover:cursor-pointer"
            )}>
                {t("contact_me")}
            </button>
            <button className={clsx(
                theme === "dark"
                    ? "border-white hover:text-white"
                    : "border-black hover:text-black",
                "px-4 py-2 rounded-full shadow hover:cursor-pointer",
                "bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text border-2 shadow transition duration-400 hover:bg-clip-border hover:border-0"
            )}>

                {t("download_resume")}
            </button>
        </div>
    );
}