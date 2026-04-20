"use client";

import { ArrowIconEleven } from "@/svg/ArrowIcons";
import servicesData from "@/data/service-data";
import { IdProps } from "@/types/custom-dt";
import Link from "next/link";
import { useEffect } from "react";

interface ServiceLink {
    title: string;
    href?: string;
}

const getServiceSubtitle = (serviceTitle: string): string => {
    switch (serviceTitle) {
        case "UI/UX Design":
            return "Design";
        case "Web Development":
            return "Development";
        case "Mobile App Development":
            return "Mobile";
        case "AI SaaS Development":
            return "AI & SaaS";
        case "Business Automation":
            return "Automation";
        default:
            return "Services";
    }
};

const getServiceLinks = (serviceTitle: string): ServiceLink[] => {
    switch (serviceTitle) {
        case "UI/UX Design":
            return [
                { title: "User Research" },
                { title: "Wireframing" },
                { title: "Prototyping" },
                { title: "Visual Design" },
                { title: "Usability Testing" },
                { title: "Design Systems" },
            ];
        case "Web Development":
            return [
                { title: "Frontend Development" },
                { title: "Backend Development" },
                { title: "Full-Stack Solutions" },
                { title: "E-commerce Platforms" },
                { title: "CMS Development" },
                { title: "API Integration" },
            ];
        case "Mobile App Development":
            return [
                { title: "iOS Development" },
                { title: "Android Development" },
                { title: "Cross-Platform Apps" },
                { title: "App UI/UX Design" },
                { title: "App Testing" },
                { title: "App Store Deployment" },
            ];
        case "AI SaaS Development":
            return [
                { title: "Machine Learning Models" },
                { title: "Natural Language Processing" },
                { title: "Computer Vision" },
                { title: "Predictive Analytics" },
                { title: "Chatbot Development" },
                { title: "AI Integration" },
            ];
        case "Business Automation":
            return [
                { title: "Workflow Automation" },
                { title: "Process Optimization" },
                { title: "RPA Solutions" },
                { title: "Data Automation" },
                { title: "Integration Services" },
                { title: "Monitoring Tools" },
            ];
        default:
            return [
                { title: "Consultation" },
                { title: "Strategy Planning" },
                { title: "Development" },
                { title: "Testing" },
                { title: "Deployment" },
                { title: "Support" },
            ];
    }
};

const ServiceDetailsIntro = ({ id }: IdProps) => {
    // Find the service that matches the given ID
    const service = servicesData.find((service) => service.id == id);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tp-service-details-banner-area about-us-spacing pb-80">
            <div className="container">
                <div className="row">
                    {/* Subtitle */}
                    <div className="col-xl-2 col-lg-4">
                        <div className="tp-service-details-hero-subtitle mb-20 tp_fade_anim" data-delay=".3">
                            <span className="text-uppercase fw-500" style={{ color: "black" }}>
                                {getServiceSubtitle(service?.title || "")}
                            </span>
                            <style jsx>{`
                                .tp-service-details-hero-subtitle::before {
                                    color: var(--tp-theme-primary) !important;
                                }
                            `}</style>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="col-xl-6 col-lg-8">
                        <div className="tp-service-details-hero-title ml-115 tp_fade_anim" data-delay=".5">
                            <h2 className="tp-ff-sequel-bold-head">{service?.title || "Services Capabilities"}</h2>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-xl-4 col-lg-6">
                        <div className="ca-hero-service tp-service-details-hero-link ml-90 mt-90 tp_fade_anim" data-delay=".7">
                            <ul>
                                {getServiceLinks(service?.title || "").map((link: ServiceLink, idx: number) => (
                                    <li key={idx}>
                                        <Link href={link.href || "#"}>
                                            <span className="explore-text" data-text={`+ ${link.title}`}>
                                                + {link.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Description Section */}
            <div className="tp-service-details-content-area pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10">
                            <div className="tp-service-details-content">
                                                                <p className="tp-ff-inter mb-40" style={{ fontSize: "18px", lineHeight: "1.8", color: "#666" }}>
                                    {service?.title === "Web & Platform Development" && "We design and develop scalable web applications and platforms tailored to your business goals."}
                                    {service?.title === "AI-Powered Systems" && "We build intelligent systems that automate workflows, enhance decision-making, and unlock new capabilities."}
                                    {service?.title === "Business Automation" && "We create automation tools that streamline operations, reduce manual work, and improve efficiency."}
                                    {service?.title === "Custom Software Development" && "We develop tailored software solutions designed to solve real business challenges and support growth."}
                                    {!["Web & Platform Development", "AI-Powered Systems", "Business Automation", "Custom Software Development"].includes(service?.title || "") && "We deliver comprehensive digital solutions tailored to your specific needs. Our approach combines cutting-edge technology with strategic thinking to create exceptional results that drive your business forward."}
                                </p>
                                
                                <div className="tp-service-details-features">
                                    <h4 className="tp-ff-sequel-bold-head mb-25">Key Features</h4>
                                    <ul className="tp-service-features-list">
                                        <li className="mb-15">
                                            <span className="feature-check">+</span>
                                            Custom-tailored solutions for your specific requirements
                                        </li>
                                        <li className="mb-15">
                                            <span className="feature-check">+</span>
                                            Scalable architecture designed for growth
                                        </li>
                                        <li className="mb-15">
                                            <span className="feature-check">+</span>
                                            Modern technologies and best practices
                                        </li>
                                        <li className="mb-15">
                                            <span className="feature-check">+</span>
                                            Ongoing support and maintenance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsIntro;