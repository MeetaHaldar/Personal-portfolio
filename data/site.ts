/**
 * Central site configuration.
 *
 * EDIT CONTENT HERE. Replace every value that starts with `TODO_` with a real
 * value before publishing. Any link whose value is still a TODO placeholder is
 * automatically hidden or disabled in the UI (never rendered as a broken link).
 */

/** Placeholder sentinel values the owner must replace. */
export const TODO = {
  EMAIL: "TODO_EMAIL",
  LINKEDIN_URL: "TODO_LINKEDIN_URL",
  GITHUB_URL: "TODO_GITHUB_URL",
  SITE_URL: "TODO_SITE_URL",
} as const;

/** Returns true when a value is still an unset TODO placeholder. */
export function isTodo(value: string | undefined | null): boolean {
  return !value || value.startsWith("TODO_");
}

export const site = {
  /** Owner name. Derived from the provided portrait file. */
  name: "Meeta Haldar",
  title: "Backend-leaning Full-Stack Developer",
  tagline:
    "I build reliable web applications and business software, from database design and APIs to the interface people actually use.",

  /** The year professional work started. Used for the "Since" credibility item. */
  careerStartYear: 2023,

  /** Contact + social. Replace TODO_ values; buttons hide until then. */
  email: TODO.EMAIL,
  socials: {
    linkedin: TODO.LINKEDIN_URL,
    github: TODO.GITHUB_URL,
  },

  /** Public site origin, used for canonical URLs, sitemap and Open Graph. */
  url: TODO.SITE_URL,

  /** Availability line shown in the hero pill. Availability only, no claims. */
  availability: "Available for freelance & software development opportunities",

  /** Optional portrait. Set to null to hide it gracefully. */
  portrait: {
    src: "/profile.jpg",
    alt: "Portrait of Meeta Haldar",
  } as { src: string; alt: string } | null,

  /** Path to a downloadable CV in /public, or null to hide. */
  cv: "/CV.pdf" as string | null,

  /** Primary navigation. Anchors on the homepage. */
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],

  /** SEO defaults. */
  seo: {
    description:
      "Meeta Haldar builds reliable web applications and business software with React, Next.js and Node.js. Open to freelance projects and full-time software development roles.",
  },
} as const;

export type Site = typeof site;
