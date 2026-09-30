import type { MetadataRoute } from "next";
import { projectSlugs } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
  for (const slug of projectSlugs()) {
    routes.push({
      url: absoluteUrl(`/work/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  return routes;
}
