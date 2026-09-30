/**
 * Central site configuration.
 *
 * EDIT CONTENT HERE. Replace every value that starts with `TODO_` with a real
 * value before publishing. Any link whose value is still a TODO placeholder is
 * automatically hidden or disabled in the UI (never rendered as a broken link).
 */

/** Placeholder sentinel values the owner must replace. */
export const TODO = {
  EMAIL: "meetahaldar1001@gmail.com",
  LINKEDIN_URL: "TODO_LINKEDIN_URL",
  GITHUB_URL: "TODO_GITHUB_URL",
  SITE_URL: "TODO_SITE_URL",
  WEB3FORMS_KEY: "TODO_WEB3FORMS_ACCESS_KEY",
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

  /**
   * Web3Forms access key for the contact form. This is how the form sends
   * enquiries STRAIGHT TO YOUR INBOX (no email client opens for the visitor).
   *
   * How to get it (free, ~1 minute, no account/backend needed):
   *   1. Go to https://web3forms.com
   *   2. Enter the email address where you want to receive messages.
   *   3. They email you an "Access Key" (a UUID). Paste it below.
   *
   * The key is a PUBLIC key by design — it is safe to ship in the frontend and
   * only allows sending mail to the address you registered it with.
   * Until it is set, the form shows a small note and stays disabled.
   */
  web3formsKey: TODO.WEB3FORMS_KEY,

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
