import clsx from "clsx";
import { type JSX } from "react";

export default function SkillIcon({
    icon,
    label,
    theme,
}: {
    icon: string | JSX.Element;
    label: string;
    theme: string;
}) {
    const isFaIcon = typeof icon !== "string";
    return (
        <div className="group relative flex flex-col items-center">
            {isFaIcon ? (
                <div
                    
                    className={clsx(
                        "text-3xl cursor-pointer transition-colors",
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    )}
                >{icon}</div>
            ) : (
                <span
                    className={clsx(
                        "iconify text-3xl cursor-pointer transition-colors",
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    )}
                    
                >{icon}</span>
            )}
            <span
                className={clsx(
                    "absolute  left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap",
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
                )}
            >
                {label}
            </span>
        </div>
    );
}