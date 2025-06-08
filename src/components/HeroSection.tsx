import clsx from "clsx"
import { useAppContext } from "../context/useAppContext"
import { useTranslation } from 'react-i18next'
import Avatar from "./Avatar";
import AdjacentButton from "./adjesentButton";
export default function HeroSection() {
    const { t } = useTranslation();
    const { theme, language } = useAppContext();

    return (
        <section className={clsx(
            "p-16 sm:pl-40 sm:pr-40 shadow-lg",
            theme === "dark" ? "bg-[#161513]" : "bg-white",
            "flex flex-col items-center justify-center",
        )}>
            <Avatar />
            <div className="flex flex-col items-center justify-center p-2 mt-4">
                <div className={clsx(
                    theme === "dark" ? "text-white" : "text-[#161513]",
                    "text-2xl sm:text-4xl font-bold text-center"
                )}>{t("short_description")} {
                        language === "ar" ? (
                            <div className="inline">
                                <p className="inline">  الافكار </p>
                                <span className="font-bold bg-gradient-to-r from-[#FF8660]  to-[#9A33FF] inline-block text-transparent bg-clip-text">
                                    الفعالة
                                </span>
                            </div>
                        ) : (
                            <div className="inline">
                                <span className="h-12 font-bold bg-gradient-to-r from-[#FF8660] to-[#9A33FF] inline-block text-transparent bg-clip-text">
                                    meaningful
                                </span>
                                <p className="inline"> Ideas! </p>
                            </div>
                        )}
                </div>
                <div className="h-4" />
                <p className={clsx(
                    theme === "dark" ? "text-[#C5C5C5]" : "text-[#161513]",
                    "text-md sm:text-xl text-center pr-[5%] pl-[5%] p-4 sm:pl-[20%] sm:pr-[20%] rounded-lg",
                )}>{t("long_description")}</p>

                <div className="h-4" />
                <AdjacentButton />
            </div>
        </section>
    )
}