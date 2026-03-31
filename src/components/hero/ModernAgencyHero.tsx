"use client";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import { HeroStarIcon } from "@/svg/StarIcons";
import { color } from "framer-motion";
import Image from "next/image";

// Trust Badge Item
const TrustBadge = ({
    title,
    subtitle,
    icon,
    delay,
}: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    delay: number;
}) => (
    <div
        className="mp-hero-magnetic-item mb-20 tp_fade_anim d-flex flex-column align-items-center justify-content-center text-center p-4"
        style={{
            width: "256px",
            height: "196px",
            border: "1px solid var(--tp-border-1)",
            borderRadius: "16px",
            background: "var(--tp-common-white)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease",
            cursor: "pointer"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        }}
        data-delay={`.${delay}`}
        data-fade-from="bottom"
        data-ease="bounce"
    >
        <div style={{ marginBottom: "16px", color: "var(--tp-theme-primary)" }}>
            {icon}
        </div>
        <h4 style={{ fontSize: "18px", marginBottom: "6px", fontWeight: 600 }}>{title}</h4>
        <span style={{ fontSize: "13px", color: "var(--tp-grey-1)" }}>{subtitle}</span>
    </div>
);

const ModernAgencyHero = () => {
    const trustBadges = [
        {
            title: "SOC 2 Type II",
            subtitle: "Security Verified",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
            )
        },
        {
            title: "GDPR Ready",
            subtitle: "Data Privacy",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        },
        {
            title: "ISO 27001",
            subtitle: "Certified Systems",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            )
        },
        {
            title: "99.99% Uptime",
            subtitle: "Enterprise Reliability",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="mp-hero-area mp-hero-spacing">
            <div className="container">
                <div className="row align-items-center">
                    {/* Hero Text */}
                    <div className="col-xl-3 col-md-5">
                        <div className="tp-hero-dec-wrap mb-30 tp_fade_anim" data-delay=".5">
                            <p className="tp-hero-dec">
                                <span className="tp-hero-shape">
                                    <HeroStarIcon />
                                </span>
                                We build websites, apps &<br />
                                campaigns that actually move the<br />
                                needle for growing brands.
                            </p>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="col-xl-9">
                        <div className="mp-hero-content ml-75">
                            <h2 className="mp-hero-title tp-ff-inter mb-40 tp-char-animation">
                                The perfect place
                                <br />
                                for your <span style={{ color: "var(--tp-theme-primary)" }}>masterpiece</span>
                            </h2>

                            {/* Hero Buttons */}
                            <div className="mp-hero-btn d-flex flex-wrap gap-2 mb-50">
                                <div className="tp_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                    <SmartLink className="tp-btn mb-10" href="/portfolio">
                                        <span>
                                            <span className="text-1">Explore All Work</span>
                                            <span className="text-2">Explore All Work</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                                <div className="tp_fade_anim" data-delay=".6" data-fade-from="bottom" data-ease="bounce">
                                    <SmartLink className="tp-btn tp-btn-grey mb-10" href="/about-me">
                                        <span>
                                            <span className="text-1">Contact Me</span>
                                            <span className="text-2">Contact Me</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mp-hero-magnetic">
                                <div className="mp-hero-magnetic-image-wrap d-flex flex-wrap flex-md-nowrap gap-3">
                                    {trustBadges.map((badge, idx) => (
                                        <TrustBadge
                                            key={idx}
                                            title={badge.title}
                                            subtitle={badge.subtitle}
                                            icon={badge.icon}
                                            delay={0.4 + idx * 0.1}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Title */}
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="mp-hero-bigtitle-wrap jump-anim text-center pt-10 tp_fade_anim"
                            data-delay=".8"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <h2 className="mp-hero-bigtitle tp-ff-sequel-semi-bold" style={{ color: "var(--tp-theme-primary)" }}>
                                Cunnet
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyHero;
