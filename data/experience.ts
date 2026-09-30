import type { Experience } from "@/types";

/** Career timeline, most recent first. Edit roles, periods and bullets here. */
export const experience: Experience[] = [
  {
    role: "Associate Software Developer",
    company: "Room Scholars",
    period: "2026 – Present",
    bullets: ["Software and product development on the Room Scholars platform."],
    tech: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    role: "Full Stack Developer",
    company: "Infosware",
    period: "2025 – 2026",
    bullets: [
      "Built an end-to-end Inventory Management System: role-based permissions, inventory, box barcode/QR, transfers, inter-company sales, invoices and analytics.",
      "Handled database design, Node.js/Express APIs, and the React frontend implemented from Figma designs, plus testing and deployment.",
      "Built an HRM / Attendance / Payroll system: multi-role access, employee management, attendance, payroll, salary slips, subscriptions and biometric integration.",
    ],
    tech: ["React", "Node.js", "Express.js", "REST APIs"],
  },
  {
    role: "Member of Technical Staff",
    company: "GeeksforGeeks",
    period: "2023 – 2025",
    bullets: [
      "Technical content and frontend/web-focused work: reviewing and publishing technical articles and writing technical content with code examples.",
      "Reviewed programming and web development content, carried out SEO research, and mentored interns.",
      "Collaborated with design and marketing teams across topics including HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js, APIs, backend concepts, Three.js and JavaScript DSA.",
    ],
    tech: ["JavaScript", "React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bismillah Enterprises",
    period: "2022",
    bullets: [
      "Built React components and basic e-commerce functionality including cart functionality.",
      "Worked on order APIs and general frontend development.",
    ],
    tech: ["React", "JavaScript"],
  },
];
