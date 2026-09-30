import type { Project } from "@/types";
import { TODO } from "@/data/site";

/**
 * Case-study content. To add a real screenshot, drop the file in the path noted
 * in each /public/projects/<slug>/README.txt and set `src` here (and update `alt`).
 * A `null` src renders a labelled PlaceholderImage instead of a broken image.
 *
 * Sections in a case study are omitted automatically when their field is empty.
 * Do not add invented metrics, client names, or results.
 */
export const projects: Project[] = [
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Business Application · Full-Stack",
    summary: "One system to manage stock, transfers, sales and invoices with role-based access.",
    description:
      "An end-to-end system for managing stock across boxes, transfers between locations and companies, sales and invoicing, where each person sees and does only what their role allows.",
    featured: true,
    role: "Full-Stack Developer",
    timeframe: "2025 – 2026",
    tech: ["React", "Node.js", "Express.js", "Database design", "REST APIs"],
    features: [
      "Role-based permissions",
      "Inventory management",
      "Boxes with barcode / QR functionality",
      "Transfers between locations and companies",
      "Inter-company sales",
      "Invoices and analytics / charts",
    ],
    cover: {
      // Add the real cover at /public/projects/inventory/cover.png (1600×1000).
      src: null,
      alt: "Inventory Management System dashboard cover",
      width: 1600,
      height: 1000,
    },
    overview:
      "A business application built end-to-end at Infosware to bring stock, transfers, sales and invoicing into a single system with permissions that match how the business actually operates.",
    problem:
      "Businesses needed one system to manage stock across boxes, transfers between locations and companies, sales, and invoicing, with different people seeing and doing only what their role allows.",
    contribution:
      "I handled database design, built the Node.js and Express APIs, implemented the React frontend from the Figma designs, and carried out testing and deployment.",
    techGroups: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      // TODO_DATABASE: confirm exact database (MongoDB and/or SQL) and update this group.
      { label: "Data", items: ["Database design"] },
      { label: "Practice", items: ["Role-based access control", "Testing", "Deployment"] },
    ],
    architecture: {
      flow: ["React frontend", "Express API", "Database"],
      note: "Requests pass through a role and permission check, so each user only reaches the data and actions their role allows.",
      textAlt:
        "The React frontend sends requests to an Express API, which reads from and writes to the database. Every request passes through a role and permission check that limits data and actions to what the user's role allows.",
    },
    screenshots: [
      {
        src: null,
        alt: "Inventory dashboard with analytics charts",
        width: 1600,
        height: 1000,
        caption: "Dashboard and analytics",
      },
      {
        src: null,
        alt: "Box detail view showing barcode and QR",
        width: 1600,
        height: 1000,
        caption: "Box barcode / QR",
      },
      {
        src: null,
        alt: "Transfer between locations screen",
        width: 1600,
        height: 1000,
        caption: "Transfers and inter-company sales",
      },
    ],
    liveUrl: TODO.SITE_URL, // hidden until a real live URL is provided
    githubUrl: undefined, // hidden unless provided
  },

  {
    slug: "room-scholars",
    title: "Room Scholars",
    category: "Product · Student Accommodation Platform",
    summary: "A student accommodation platform with listings, search, and user and admin portals.",
    description:
      "A student accommodation product covering property and room listings, search and university- or country-based discovery, with separate user and admin portals.",
    role: "Associate Software Developer",
    timeframe: "2026 – Present",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Razorpay"],
    features: [
      "Student accommodation and property listings",
      "Rooms with property and room images",
      "Search and university / country-based discovery",
      "User and admin portals",
      "Amenities, map functionality and WhatsApp contact",
      "Admin property management",
    ],
    cover: {
      // Add the real cover at /public/projects/room-scholars/cover.png (1600×1000).
      src: null,
      alt: "Room Scholars platform cover",
      width: 1600,
      height: 1000,
    },
    overview:
      "Room Scholars is a student accommodation platform that helps students discover and enquire about properties and rooms, with a dedicated portal for administrators to manage listings.",
    problem:
      "Students looking for accommodation need a clear way to discover properties by university or country, browse rooms with images and amenities, and get in touch, while administrators need to manage those listings in one place.",
    // TODO_MODULES: specify the exact modules you own on the platform and refine this.
    contribution: "I work on software and product development on the Room Scholars platform.",
    techGroups: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Data & media", items: ["MongoDB", "Cloudinary"] },
      { label: "Integrations", items: ["Razorpay", "Maps", "APIs"] },
      { label: "Motion", items: ["Framer Motion"] },
    ],
    architecture: {
      flow: ["Next.js app (user + admin)", "APIs", "MongoDB"],
      note: "Media is stored and served through Cloudinary; payments run through Razorpay; discovery uses map and location data.",
      textAlt:
        "The Next.js application serves both the user and admin portals and calls APIs that read from and write to MongoDB. Media is handled through Cloudinary, payments through Razorpay, and discovery uses map and location data.",
    },
    screenshots: [
      {
        src: null,
        alt: "Property listing page with room images",
        width: 1600,
        height: 1000,
        caption: "Listings and rooms",
      },
      {
        src: null,
        alt: "Search and discovery by university or country",
        width: 1600,
        height: 1000,
        caption: "Search and discovery",
      },
      {
        src: null,
        alt: "Admin property management portal",
        width: 1600,
        height: 1000,
        caption: "Admin portal",
      },
    ],
    liveUrl: TODO.SITE_URL, // hidden until a real live URL is provided
    githubUrl: undefined,
  },

  {
    slug: "hrm-payroll-system",
    title: "HRM / Attendance / Payroll System",
    category: "Business Application · HR Management",
    summary:
      "A multi-role HR platform covering employee management, attendance, payroll and salary slips.",
    description:
      "An HR management system with several administrative roles, covering employee management, attendance, payroll, salary slips, subscriptions and biometric integration.",
    role: "Full-Stack Developer",
    timeframe: "2025 – 2026",
    tech: ["React", "Node.js", "Express.js", "REST APIs", "Role-based access control"],
    features: [
      "Multiple roles: Manager, Employee, Admin, System Admin, Super Admin",
      "Employee management",
      "Attendance tracking",
      "Payroll and salary slips",
      "Subscription functionality",
      "Biometric integration",
    ],
    cover: {
      // Add the real cover at /public/projects/hrm/cover.png (1600×1000).
      src: null,
      alt: "HRM and payroll system cover",
      width: 1600,
      height: 1000,
    },
    overview:
      "An HR management system built at Infosware, designed around role-based access with several administrative roles and built to support a large employee base.",
    problem:
      "Organisations need one place to manage employees, track attendance, run payroll and issue salary slips, with access carefully separated across administrative roles.",
    contribution:
      "I worked across the stack on employee management, attendance, payroll and salary slips, role-based access, subscription functionality and biometric integration.",
    techGroups: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { label: "Practice", items: ["Role-based access control", "Testing", "Deployment"] },
    ],
    architecture: {
      flow: ["React frontend", "Express API", "Database"],
      note: "Access is separated across roles (Manager, Employee, Admin, System Admin, Super Admin); biometric devices feed attendance data into the system.",
      textAlt:
        "The React frontend calls an Express API backed by a database. Access is separated across five administrative roles, and biometric devices feed attendance data into the system.",
    },
    screenshots: [
      {
        src: null,
        alt: "Employee management dashboard",
        width: 1600,
        height: 1000,
        caption: "Employee management",
      },
      {
        src: null,
        alt: "Attendance tracking view",
        width: 1600,
        height: 1000,
        caption: "Attendance",
      },
      {
        src: null,
        alt: "Payroll and salary slip screen",
        width: 1600,
        height: 1000,
        caption: "Payroll and salary slips",
      },
    ],
    liveUrl: undefined,
    githubUrl: undefined,
  },
];

/** Look up a single project by slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Ordered slugs, used for "next project" navigation. */
export function projectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
