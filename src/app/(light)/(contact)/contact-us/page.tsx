import ContactUsTopIntro from "@/components/contact/ContactUsTopIntro";
import ContactUsFormArea from "@/components/contact/ContactUsFormArea";
import ContactInnerMap from "@/components/contact/ContactInnerMap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ContactUsTopIntro />
            <ContactInnerMap />
            <ContactUsFormArea />
        </main>
    );
};

export default page;