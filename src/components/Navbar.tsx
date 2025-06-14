import { useAppContext } from "../context/useAppContext";
import { useTranslation } from 'react-i18next';
import darkLogo from '../assets/nav/logo-dark.png';
import lightLogo from '../assets/nav/logo-light.png';
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const { language, theme, toggleLanguage, toggleTheme } = useAppContext();
    const { t } = useTranslation();
    const [triggerMenu, setTriggerMenu] = useState(false);

    const navLinks = (
        <>
            <li className={clsx(theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700")}>
                <a href="#home">{t('home')}</a>
            </li>
            <li className={clsx(theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700")}>
                <a href="#technicalSkills">{t('technicalSkills')}</a>
            </li>
            <li className={clsx(theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700")}>
                <a href="#projects">{t('projects')}</a>
            </li>
            <li className={clsx(theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700")}>
                <a href="#experience">{t('experience')}</a>
            </li>
            <li className={clsx(theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700")}>
                <a href="#contact">{t('contact')}</a>
            </li>
            {/* Language Toggle */}
            <li>
                <button
                    onClick={toggleLanguage}
                    className={clsx(
                        "transition-colors duration-200 cursor-pointer",
                        theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700"
                    )}
                    aria-label="Toggle Language"
                >
                    <FontAwesomeIcon icon={faLanguage} /> {/* fallback, see below */}
                    {language === 'ar' ? 'EN' : 'AR'}
                </button>
            </li>
            {/* Theme Toggle */}
            <li>
                <button
                    onClick={toggleTheme}
                    className={clsx(
                        "transition-colors duration-200 cursor-pointer",
                        theme === "dark" ? "text-white hover:text-gray-400" : "text-[#161513] hover:text-gray-700"
                    )}
                    aria-label="Toggle Theme"
                >
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
                </button>
            </li>
        </>
    );

    return (
        <nav className={clsx(
            theme === "dark" ? "dark:bg-[#222222]" : "bg-[#E6E6E6]",
            "px-[8%] flex items-center justify-between h-[16%] py-4 relative"
        )}>
            <a className="text-2xl font-bold hover:opacity-60" href="/">
                <img className="w-16 h-10" src={theme === 'dark' ? darkLogo : lightLogo} alt="App Logo" />
            </a>

            {/* Desktop Navigation */}
            <ul className={clsx("hidden sm:flex gap-6", language === 'ar' ? 'rtl' : 'ltr')}>
                {navLinks}
            </ul>

            {/* Mobile Hamburger Icon */}
            <button
                className="sm:hidden z-20"
                onClick={() => setTriggerMenu(!triggerMenu)}
            >

                <AnimatePresence mode="wait" initial={false}>
                    {triggerMenu ? (
                        <motion.span
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <FontAwesomeIcon icon={faXmark} className={theme === "dark" ? "text-white" : "text-black"} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="bars"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <FontAwesomeIcon icon={faBars} className={theme === "dark" ? "text-white" : "text-black"} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            {/* Mobile Menu */}
            <AnimatePresence initial={false}>

                {triggerMenu && (
                    <motion.div
                        key={"mobile-menu"}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-[100%] left-0 w-full sm:hidden z-10">
                        <ul className={clsx(
                            "flex flex-col gap-4 absolute top-[100%] left-0 w-full px-[8%] py-4",
                            theme === "dark" ? "bg-[#222222] text-white" : "bg-[#E6E6E6] text-[#161513]",
                            language === 'ar' ? 'rtl' : 'ltr',
                            "sm:hidden z-10"
                        )}>
                            {navLinks}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
