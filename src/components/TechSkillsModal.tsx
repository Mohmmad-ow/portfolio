import clsx from "clsx";
import { useState } from "react";
import { useAppContext } from "../context/useAppContext";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark as faClose, faDisplay } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import TechSkillsIcons from "../utility/SwitchTechSkillsIcons";
// Skill sections


export default function TechSkillModal() {
  const { theme } = useAppContext();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("frontend");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skillSections = TechSkillsIcons(theme)
  const currentSection = skillSections.find((s) => s.key === activeTab);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center">
      <button
        onClick={openModal}
        className={clsx(
          "px-4 py-2 rounded font-semibold transition-colors hover:cursor-pointer w-fit",
          theme === "dark"
            ? " text-blue-500 hover:underline"
            : " text-blue-500 hover:underline"
        )}
      >
        {t("view-skills")} - <FontAwesomeIcon icon={faDisplay} />
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={clsx(
                "rounded-lg p-6 shadow-xl w-[90vw] max-w-3xl h-[80vh] overflow-hidden flex flex-col",
                theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
              )}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{t("techSkills")}</h2>
                <button
                  onClick={closeModal}
                  className={clsx(
                    "p-2 rounded-full transition-colors",
                    theme === "dark"
                      ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                      : "hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  )}
                >
                  <FontAwesomeIcon icon={faClose} className="text-xl" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skillSections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => setActiveTab(section.key)}
                    className={clsx(
                      "px-3 py-1 rounded-full font-medium transition-all",
                      activeTab === section.key
                        ? theme === "dark"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                        : theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 text-gray-900"
                    )}
                  >
                    {t(section.key)}
                  </button>
                ))}
              </div>

              {/* Skills */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto flex-1"
                >
                  {currentSection?.skills.map(({ icon, label }) => (
                    <SkillIcon key={label} icon={icon} label={label} theme={theme} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
