import type { Metadata } from "next";
import { site, isTodo } from "@/data/site";

/**
 * Resolve a safe metadataBase. When the site URL is still a TODO placeholder we
 * fall back to localhost so `next build` never throws on an invalid URL.
 */
export function resolveBaseUrl(): string {
  return isTodo(site.url) ? "http://localhost:3000" : site.url;
}

/** Absolute URL helper for canonical links and Open Graph. */
export function absoluteUrl(path: string): string {
  const base = resolveBaseUrl().replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

/** Build per-page metadata with canonical + Open Graph + Twitter card. */
export function buildPageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
