import { ToastContainer } from "react-toastify";
import localFont from "next/font/local";
import Analytics from "@/components/nexus/Analytics";
import StructuredData from "@/components/nexus/StructuredData";
import { SITE_URL } from "@/lib/site";
import { SOCIAL_LINKS } from "@/data/footer-data";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

const siteFont = localFont({
  src: [
    { path: "../../public/assets/fonts/SequelSans-RomanHead.woff2", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/SequelSans-MediumHead.woff2", weight: "500", style: "normal" },
    { path: "../../public/assets/fonts/SequelSans-SemiBoldHead.woff2", weight: "600", style: "normal" },
    { path: "../../public/assets/fonts/SequelSans-BoldHead.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter", display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Nexus Technology — Software & AI Development in Ethiopia", template: "%s | Nexus Technology" },
  description: "Nexus Technology builds websites, mobile apps, and AI-powered systems in Addis Ababa, Ethiopia.",
  // Unfinished template routes are not search landing pages. Real pages opt in.
  robots: { index: false, follow: true },
  icons: { icon: "/icon.svg", apple: "/apple-icon" },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {    return (
    <html lang="en">
      <body className={siteFont.variable}>
        <StructuredData data={{ "@context": "https://schema.org", "@graph": [
          { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Nexus Technology", url: SITE_URL, logo: `${SITE_URL}/icon.svg`, email: "info@nexustechnologyet.com", telephone: "+251974819263", address: { "@type": "PostalAddress", streetAddress: "Yerer Bole", addressLocality: "Addis Ababa", addressCountry: "ET" }, sameAs: SOCIAL_LINKS.map(link => link.url) },
          { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Nexus Technology", url: SITE_URL, publisher: { "@id": `${SITE_URL}/#organization` } },
        ] }} />
        {children}
        <Analytics />
        <ToastContainer />
      </body>
    </html>
  );
}
