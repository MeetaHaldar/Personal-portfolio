/**
 * Shared content types for the portfolio.
 * All site content is authored in /data using these shapes.
 * Editing content should only require touching /data and /public.
 */

/** A single image used in a project cover or gallery. */
export interface ProjectImage {
  /** Path under /public, or null to render the PlaceholderImage with instructions. */
  src: string | null;
  /** Meaningful alt text. Required even for placeholders. */
  alt: string;
  width: number;
  height: number;
  /** Optional caption shown under gallery screenshots. */
  caption?: string;
}

/** A grouped list of technologies (label + items). */
export interface TechGroup {
  label: string;
  items: string[];
}

/** A block of a case study; omit a field to hide that block. */
export interface Project {
  slug: string;
  title: string;
  category: string;
  /** One-line summary shown on cards and case-study header. */
  summary: string;
  /** Longer description for the card body (1-2 sentences). */
  description: string;
  featured?: boolean;
  /** Role you held on the project. */
  role: string;
  /** Human-readable timeframe, e.g. "2025 - 2026". */
  timeframe: string;
  /** Flat list of tech badges shown on the card. */
  tech: string[];
  /** 3-6 short feature bullets. */
  features: string[];
  cover: ProjectImage;
  /** Case-study body fields. Leave empty string/array to omit a section. */
  overview: string;
  problem: string;
  contribution: string;
  /** Grouped technologies for the case-study "Technology used" section. */
  techGroups: TechGroup[];
  /** Architecture flow nodes rendered as an accessible CSS diagram. */
  architecture: {
    /** Ordered nodes of the primary data flow. */
    flow: string[];
    /** Optional secondary note (e.g. role/permission flow). */
    note?: string;
    /** Plain-text alternative describing the diagram for screen readers. */
    textAlt: string;
  };
  screenshots: ProjectImage[];
  /** Live URL. Use the TODO placeholder from site.ts; falsy/TODO hides the button. */
  liveUrl?: string;
  /** GitHub URL. Falsy/TODO hides the button. */
  githubUrl?: string;
}

/** A single role in the experience timeline. */
export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string[];
}

/** A service offering shown in the "What I can build" section. */
export interface Service {
  title: string;
  description: string;
}

/** A step in the "How I work" section. */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** A grouped set of skills/tech chips. */
export interface SkillGroup {
  label: string;
  items: string[];
}
