import BrandingStudioBrand from "@/components/brand/BrandingStudioBrand";
import AboutUsTeam from "@/components/team/AboutUsTeam";
import AboutUsSlider from "@/components/about/AboutUsSlider";
import AboutUsIntro from "@/components/about/AboutUsIntro";
import AboutUsAward from "@/components/award/AboutUsAward";
import AboutUsArea from "@/components/about/AboutUsArea";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Nexus Technology - a team of developers and designers building intelligent digital solutions that transform businesses.",
};

const page = () => {
    return (
        <main>
            <AboutUsArea />
            <AboutUsSlider />
            <AboutUsIntro />
            <BrandingStudioBrand spacingClass="pb-160" />
            <AboutUsTeam />
            <AboutUsAward />
        </main>
    );
};

export default page;