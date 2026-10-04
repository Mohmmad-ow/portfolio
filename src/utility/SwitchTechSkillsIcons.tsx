import { SVGs } from "../assets/SVGs/SVG";
import type { Theme } from "./types";
import {
    SiPhp, SiLaravel, SiPython, SiFastapi, SiOpenjdk, SiPostgresql, SiRedis,
    SiFlutter, SiDocker, SiGit, SiNginx, SiPostman, SiFlydotio,
} from "react-icons/si";

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
                { icon: <SiPhp />, label: "PHP" },
                { icon: <SiLaravel />, label: "Laravel" },
                { icon: <SiPython />, label: "Python" },
                { icon: <SiFastapi />, label: "FastAPI" },
                { icon: <SiOpenjdk />, label: "Java" },
                { icon: Icons.ExpressJs, label: "Express.js" },
                { icon: Icons.fireBase, label: "Firebase" },
            ],
        },
        {
            key: "database",
            label: "Database",
            skills: [
                { icon: Icons.MongoDB, label: "MongoDB" },
                { icon: <SiPostgresql />, label: "PostgreSQL" },
                { icon: <SiRedis />, label: "Redis" },
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
                { icon: <SiFlutter />, label: "Flutter" },
            ],
        },
        {
            key: "desktopDevelopment",
            label: "Desktop Development",
            skills: [
                { icon: Icons.ElectronJs, label: "Electron" },
            ],
        },
        {
            key: "devops",
            label: "Tools & DevOps",
            skills: [
                { icon: <SiDocker />, label: "Docker" },
                { icon: <SiGit />, label: "Git" },
                { icon: <SiNginx />, label: "Nginx" },
                { icon: <SiPostman />, label: "Postman" },
                { icon: <SiFlydotio />, label: "Fly.io" },
            ],
        },
    ];


}