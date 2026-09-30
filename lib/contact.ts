import { site, isTodo } from "@/data/site";

export interface ResolvedLink {
  label: string;
  href: string;
}

/**
 * Returns only the contact/social links that have a real (non-TODO) value.
 * TODO placeholders are dropped so the UI never renders a broken link.
 */
export function resolvedContactLinks(): ResolvedLink[] {
  const links: ResolvedLink[] = [];
  if (!isTodo(site.email)) {
    links.push({ label: "Email", href: `mailto:${site.email}` });
  }
  if (!isTodo(site.socials.linkedin)) {
    links.push({ label: "LinkedIn", href: site.socials.linkedin });
  }
  if (!isTodo(site.socials.github)) {
    links.push({ label: "GitHub", href: site.socials.github });
  }
  return links;
}
