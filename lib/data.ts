import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HooBankImage from "@/public/HooBank.png";
import MagmaImage from "@/public/Magma.png";
import SundownImage from "@/public/Sumdown.png";

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
    title: "Full stack web developer",
    location: "New Dellhi",
    description:
      "When my graduation is going on i did this internship at Bismillah Enterprises.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Technical Content Engineer",
    location: "GeeksForGeeks, Noida",
    description:
      "I worked as a Technical Content Engineer and wrote 20+ article and improved 500+ Articles. Also, I have reviewed 400+ Articles",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  }
] as const;

export const projectsData = [
  {
    title: "HooBank",
    description:
      "This is a website that shows the UI for a payment methods in dark and classy mode",
    tags: ["Reactjs","Tailwind","CSS"],
    imageUrl: HooBankImage,
  },
  {
    title: "Magma",
    description:
      "This website shows the feature of parallax method and great UI complexion",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: MagmaImage,
  },
  {
    title: "Sundown",
    description:
      "A public web app forshowcase of great UI having great animation.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: SundownImage,
  },
] as const;

export const skillsData = ["HTML","CSS", "JS", "Nodejs", "Reactjs","SASS", "Expressjs","TypeScript","MongoDB","Nextjs"] as const;
