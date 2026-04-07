import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ShopAgencyTestimonial from "@/components/testimonial/ShopAgencyTestimonial";
import MotionGraphicAward from "@/components/award/MotionGraphicAward";
import MotionGraphicPortfolio from "@/components/portfolio/MotionGraphicPortfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creative Agency - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ModernAgencyHero />
            <CreativeAgencyAbout />
            <CreativeAgencyService />
            {/* <ModernAgencyPortfolio /> */}
            {/* <CreativeAgencyPortfolio /> */}
            <div style={{ backgroundColor: "var(--tp-theme-primary)" }}>
                <MotionGraphicPortfolio theme="dark" />
            </div>
            <ShopAgencyTestimonial />
            <div className="container">
                <div className="tp-about-border"></div>
            </div>
            <MotionGraphicAward />
        </main>
    );
};

export default page;