import type { MetadataRoute } from "next";
import { absoluteUrl, projects } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
    // Omit lastModified until reliable editorial modification dates are available.
    return ["/", "/projects", "/contact-us", "/privacy", ...projects.map(project => `/portfolio-details/${project.id}`)].map(path => ({ url: absoluteUrl(path) }));
}
