import { SVGs } from "../assets/SVGs/SVG";
import type { Theme } from "./types";

export default function TechSkillsIcons(theme: Theme) {
    const Icons = SVGs(theme)

    return [
        {
            key: "frontend",
            label: "Frontend",
            skills: [
                { icon: Icons.React, label: "React" },
                { icon: Icons.TS, label: "TypeScript" },
                { icon: Icons.JS, label: "JavaScript" },
                { icon: Icons.tailwindcss, label: "Tailwind CSS" },
                { icon: Icons.HTML5, label: "HTML5" },
                { icon: Icons.CSS3, label: "CSS3" },
            ],
        },
        {
            key: "backend",
            label: "Backend",
            skills: [
                { icon: Icons.NodeJs, label: "Node.js" },
                { icon: Icons.Golang, label: "Go" },
                { icon: Icons.ExpressJs, label: "Express.js" },
                { icon: "NestJs", label: "NestJS" },
                { icon: Icons.fireBase, label: "Firebase" },
            ],
        },
        {
            key: "database",
            label: "Database",
            skills: [
                { icon: Icons.MongoDB, label: "MongoDB" },
                // { icon: Ico, label: "PostgreSQL" },
                { icon: Icons.mySQL, label: "MySQL" },
                { icon: Icons.Sqlite, label: "SQLite" },
            ],
        },
        {
            key: "mobileDevelopment",
            label: "Mobile Development",
            skills: [
                { icon: Icons.React, label: "React Native" },
                { icon: Icons.Expo, label: "Expo" },
                { icon: "TAMAGUI", label: "Tama GUI" },
                
            ],
        },
        {
            key: "desktopDevelopment",
            label: "Desktop Development",
            skills: [
                { icon: Icons.ElectronJs, label: "Electron" },
            ],
        },
    ];


}