import ContactUsTopIntro from "@/components/contact/ContactUsTopIntro";
import ContactInnerMap from "@/components/contact/ContactInnerMap";
import CalendlyBooking from "@/components/contact/CalendlyBooking";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ContactUsTopIntro />
            <CalendlyBooking />
            <ContactInnerMap />
        </main>
    );
};

export default page;