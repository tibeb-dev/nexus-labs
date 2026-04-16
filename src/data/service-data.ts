import { AutomationIcon, BrainstormingIcon, PrintProofIcon } from "@/svg/ServiceIcons";
import { serviceDT } from "@/types/service-dt";

const servicesData: serviceDT[] = [
    {
        id: 1,
        title: "UI/UX Design",
        image: "/assets/img/service/ux design.png",
        description: "Creating a unique brand identity that stands out and connects with your audience.",
    },
    {
        id: 2,
        title: "Web Development",
        image: "/assets/img/service/web design.png",
        description: "Designing clear and engaging visual information for easy understanding and impact.",
    },
    {
        id: 3,
        title: "Mobile App Development",
        image: "/assets/img/service/mobile app.png",
        description: "Delivering innovative digital solutions to grow your online presence effectively.",
    },
    {
        id: 4,
        title: "AI SaaS Development",
        image: "/assets/img/service/ai saas.png",
        description: "Crafting compelling editorial layouts that communicate your story visually.",
    },
    {
        id: 5,
        title: "Business Automation",
        image: "/assets/img/service/automation.png",
        description: "Designing immersive spatial experiences that blend aesthetics and functionality.",
    },
    //agency shop service data start
    {
        id: 7,
        title: "Brainstorming",
        description: `Brand identity design a the have
    to success whether you breath onfire
    quanto agency.`,
        icon: BrainstormingIcon,
        delay: ".3",
    },
    {
        id: 8,
        title: "Automation",
        description: `Brand identity design a the have
    to success whether you breath onfire
    quanto agency.`,
        icon: AutomationIcon,
        delay: ".5",
    },
    {
        id: 9,
        title: "Print Proof",
        description: `Brand identity design a the have
    to success whether you breath onfire
    quanto agency.`,
        icon: PrintProofIcon,
        delay: ".7",
    },
    //agency shop service data end
    //service two service data start
    {
        id: 10,
        year: "2015 - 2018",
        title: "Web Design",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    {
        id: 11,
        year: "2019 - 2021",
        title: "Brand Identity",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    {
        id: 12,
        year: "2022 - 2024",
        title: "Motion Graphics",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    {
        id: 13,
        year: "2022 - 2024",
        title: "Creative Direction",
        description:
            "Whether you need stunning visuals for your website captivating graphics for your marketing materials innovative UI/UX designs for your app our team of experts.",
    },
    //service two service data end
];

export default servicesData;