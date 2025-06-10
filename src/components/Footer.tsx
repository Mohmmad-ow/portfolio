import { useAppContext } from "../context/useAppContext";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { faInstagram, faXTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
    const { theme } = useAppContext();
    const { t } = useTranslation();

    // Determine alignment based on language

    // Theme styles
    const bgClass = theme === "dark" ? "bg-[#191919] text-white" : "bg-[#EBEBEB] text-gray-900";
    const iconColor = theme === "dark" ? "text-white" : "text-gray-900";

    return (
        <footer id="contact"
            className={clsx(
                "w-full py-10 px-4 md:px-16 mt-16 flex justify-center",
                bgClass
            )}
        >
            <div
                className={clsx(
                    "w-full max-w-3xl flex flex-col gap-6",
                )}
            >
                <h2 className={clsx("text-3xl font-bold")}>
                    {t("Contact")}
                </h2>
                <p className="text-base md:text-lg max-w-xl">
                    {t("contact_message")}
                </p>
                <div className="flex flex-col gap-2 text-base">
                    <span>
                        <strong>{t("Email")}:</strong>{" "}
                        <a
                            href="mailto:mohmmadbaqiro31@gmail.com"
                            className="underline hover:text-blue-500 transition"
                        >
                            mohmmadbaqiro31@gmail.com
                        </a>
                    </span>
                    <span>
                        <strong>{t("Phone")}:</strong>{" "}
                        <p
                            className="underline inline hover:text-blue-500 transition"
                        >
                            {t("Phone_number")}
                        </p>
                    </span>
                </div>
                <div className={clsx("flex gap-4 mt-2")}>
                    <a
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className={iconColor + " text-2xl hover:text-pink-500 transition"}
                    >
                        <FontAwesomeIcon icon={faInstagram} />

                    </a>
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className={iconColor + " text-2xl hover:text-blue-400 transition"}
                    >
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a
                        href="https://t.me/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                        className={iconColor + " text-2xl hover:text-blue-500 transition"}
                    >
                        <FontAwesomeIcon icon={faTelegram} />
                    </a>
                </div>
            </div>
        </footer>
    );
}