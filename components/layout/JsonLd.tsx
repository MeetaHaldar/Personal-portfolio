import { site, isTodo } from "@/data/site";
import { resolveBaseUrl } from "@/lib/seo";

/**
 * JSON-LD Person schema. `sameAs` only includes real (non-TODO) social links,
 * and `url`/`email` are omitted while still placeholders.
 */
export function JsonLd() {
  const sameAs = [
    site.socials.linkedin,
    site.socials.github,
    site.socials.twitter,
    site.socials.leetcode,
  ].filter((u) => !isTodo(u));

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
  };

  if (!isTodo(site.url)) data.url = resolveBaseUrl();
  if (!isTodo(site.email)) data.email = site.email;
  if (sameAs.length > 0) data.sameAs = sameAs;

  return (
    <script
      type="application/ld+json"
      // JSON is generated from trusted local data only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
