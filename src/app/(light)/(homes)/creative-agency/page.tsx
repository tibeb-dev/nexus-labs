import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
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
            <ModernAgencyPortfolio />
            <CreativeAgencyPortfolio />
        </main>
    );
};

export default page;