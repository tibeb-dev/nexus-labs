import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Next.js serves this metadata route at /robots.txt (not /rebot.txt).
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{
            userAgent: "*",
            // Keep pages, /_next/ scripts, CSS, and images available for rendering.
            allow: "/",
            disallow: ["/api/"],
        }],
        sitemap: absoluteUrl("/sitemap.xml"),
    };
}
