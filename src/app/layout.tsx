import { ToastContainer } from "react-toastify";
import { Inter, Jost, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

// Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false
});

// Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  preload: false
});

// Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: false
});

export const metadata: Metadata = {
  title: "Cunnet - Creative Portfolio Agency Nextjs Template",
  description: "A modern creative portfolio and agency Next.js template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jost.variable} ${montserrat.variable}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
