import type { Testimonial } from "../utility/types"
import { useTranslation } from "react-i18next"
import { useAppContext } from "../context/useAppContext"
import clsx from "clsx"
import dude_1 from "../assets/testimonials/dude_1.jpg"
import dude_2 from "../assets/testimonials/dude_2.jpg"
import dudet_1 from "../assets/testimonials/dudet_1.jpg"
import TestimonialCarousel from "./carousel-testimonials"

export default function Testimonials() {
    const {t} = useTranslation()
    const {theme} = useAppContext()

    const testimonials: Testimonial[] = [
        {
            name: t("testimonial_1_name"),
            role: t("testimonial_1_role"),
            message: t("testimonial_1_description"),
            avatarUrl: dude_1
        },
        {
            name: t("testimonial_1_name"),
            role: t("testimonial_1_role"),
            message: t("testimonial_1_description"),
            avatarUrl: dude_2
        },
        {
            name: t("testimonial_1_name"),
            role: t("testimonial_1_role"),
            message: t("testimonial_1_description"),
            avatarUrl: dudet_1
        },
    ]


    return (
        <section className={clsx(
            theme === "dark" ? "bg-[#161513] text-white" : "bg-white text-[#161513]",
            "py-16 shadow-lg"
        )}>
            <h2 className="text-3xl pb-2 text-center mt-6 mb-9 font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-200 to-green-600">
                {t("testimonials")}
            </h2>
            <TestimonialCarousel testimonials={testimonials} theme={theme} key={testimonials.length} />
        </section>
    )
}