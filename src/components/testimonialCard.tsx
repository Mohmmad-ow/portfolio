import { useAppContext } from "../context/useAppContext";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import type { Testimonial } from "../utility/types";


type TestimonialCardProps = {
    testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const { theme } = useAppContext();
    const { t } = useTranslation();

    return (
        <div
            className={clsx(
                "rounded-lg shadow-md p-6 w-[10hv] transition-colors",
                theme === "dark"
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
            )}
        >
            <div className="flex items-center mb-4">
                {testimonial.avatarUrl ? (
                    <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full mr-4 bg-primary flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name[0]}
                    </div>
                )}
                <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                    </div>
                </div>
            </div>
            <p className="italic">{t(testimonial.message)}</p>
        </div>
    );
}

export default TestimonialCard