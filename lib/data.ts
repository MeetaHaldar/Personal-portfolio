import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import DailyWave from "@/public/DailyWave.png";
import DribbleIT from "@/public/DribbleIT.png";
import ContactKeeper from "@/public/ContactKeeper.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Engineer",
    location: "GeeksForGeeks, Noida",
    description: `Led multiple MERN stack projects, focusing on debugging and UI design. Improved user experience through optimized interfaces and
quick resolution of technical issues. Wrote clear and comprehensive API documentation. Ensured easy understanding and smooth
integration of APIs by other development team members`,
    icon: React.createElement(CgWorkAlt),
    date: "2023- Current",
  },
  {
    title: "Full stack web developer",
    location: "New Delhi, Remote Work",
    description: `Created APIs for adding/removing items from the cart and order processing. Ensured smooth communication between client and server. The APIs followed REST principles for scalability. Developed modular React components for product displays and shopping cart summaries. These components were designed for
reuse across multiple pages, improving development efficiency and consistency.`,
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Dribble-it",
    description:
      "Built a fully functional Dribbble clone with core features such as user authentication, allowing users to securely log in and manage their portfolios.",
    tags: ["Reactjs", "NodeJS", "MongoDB"],
    imageUrl: DribbleIT,
    url: "https://dribble-clone-gamma.vercel.app/",
  },
  {
    title: "DailyWave",
    description:
      "Created a dynamic news app with a city-specific feature, allowing users to view news based on their selected location",
    tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    imageUrl: DailyWave,
    url: "https://daily-wave-pi4c.vercel.app/",
  },
  {
    title: "Contact Keeper App",
    description:
      "Implemented CRUD operations for adding, updating, and deleting contacts, with real-time database integration",
    tags: ["HTML", "CSS", "NodeJS", "ExpressJS", "MongoDB"],
    imageUrl: ContactKeeper,
    url: "https://contact-keeper-jv6bxndng-meetahaldar.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JS",
  "Nodejs",
  "Reactjs",
  "Bootstrap",
  "Tailwind CSS",
  "PHP",
  "XAMPP",
  "SASS",
  "Expressjs",
  "TypeScript",
  "MongoDB",
  "Nextjs",
] as const;
