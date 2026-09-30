import type { SkillGroup } from "@/types";

/** Grouped tech stack shown as text chips. Edit groups and items here. */
export const skills: SkillGroup[] = [
  {
    label: "Languages & frameworks",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js"],
  },
  {
    label: "Data",
    items: ["MongoDB", "SQL"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "Redux"],
  },
  {
    label: "Tools & services",
    items: ["Git", "GitHub", "Postman", "Cloudinary", "Razorpay"],
  },
  {
    label: "Practice",
    items: ["REST APIs", "Database design", "Role-based access control", "Testing", "Deployment"],
  },
];
