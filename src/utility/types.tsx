import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Project = {
    title: string;
    description: string;
    link: string;
    technologies: string;
    image: string;
};
type Experience = {
    title: string;
    description: string;
    icon: IconDefinition
    date: string;
}

type Testimonial = {
    name: string;
    role: string;
    message: string;
    avatarUrl?: string;
};


type Theme = "light" | "dark";
type Language = "en" | "ar";


export type { Project, Theme, Language, Experience, Testimonial };
