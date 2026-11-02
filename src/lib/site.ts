import type { Metadata } from "next";
import portfolioData from "@/data/portfolio-data";

export const SITE_URL = "https://nexustechnologyet.com";
export const projects = portfolioData.filter(project => project.id >= 500 && project.id <= 512);
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export function pageMetadata(title: string, description: string, path: string): Metadata {
    return {
        title, description,
        alternates: { canonical: path },
        robots: { index: true, follow: true },
        openGraph: { title: `${title} | Nexus Technology`, description, url: path, siteName: "Nexus Technology", type: "website", locale: "en_US", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nexus Technology — Software, thoughtfully built." }] },
        twitter: { card: "summary_large_image", title: `${title} | Nexus Technology`, description, images: ["/opengraph-image"] },
    };
}
