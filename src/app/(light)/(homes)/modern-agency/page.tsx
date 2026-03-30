import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ModernAgencyAbout from "@/components/about/ModernAgencyAbout";
import ModernAgencyAward from "@/components/award/ModernAgencyAward";
import ModernAgencyBlog from "@/components/blog/ModernAgencyBlog";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modern Agency - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <CreativeAgencyHero />
            <ModernAgencyAbout />
            <ModernAgencyPortfolio />
            <ModernAgencyAward />
            <ModernAgencyBlog />
        </main>
    );
};

export default page;