"use client";
import SmartLink from "../common/SmartLink";
import { ButtonArrowIcon } from "@/svg";
import { HeroStarIcon } from "@/svg/StarIcons";
import { color } from "framer-motion";
import Image from "next/image";
import { brand_slider_params } from "@/constant/swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const brandLogos = [
    { img: "/assets/img/brand/logo.png", width: 128, height: 30 },
    { img: "/assets/img/brand/logo-2.png", width: 75, height: 40 },
    { img: "/assets/img/brand/logo-3.png", width: 94, height: 50 },
    { img: "/assets/img/brand/logo-4.png", width: 128, height: 38 },
    { img: "/assets/img/brand/logo-5.png", width: 84, height: 38 },
    { img: "/assets/img/brand/logo-6.png", width: 125, height: 46 },
    { img: "/assets/img/brand/logo.png", width: 128, height: 30 },
    { img: "/assets/img/brand/logo-2.png", width: 75, height: 40 },
    { img: "/assets/img/brand/logo-3.png", width: 94, height: 50 },
    { img: "/assets/img/brand/logo-4.png", width: 128, height: 38 },
    { img: "/assets/img/brand/logo-5.png", width: 84, height: 38 },
    { img: "/assets/img/brand/logo-6.png", width: 125, height: 46 },
];
const repeatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

const ModernAgencyHero = () => {

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
                                We build websites, apps & intelligent <br />
                                automation systems that help businesses<br />
                                operate smarter and grow faster.
                            </p>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="col-xl-9">
                        <div className="mp-hero-content ml-75">
                            <h2 className="mp-hero-title tp-ff-inter mb-40 tp-char-animation">
                                Scalable software and AI powered systems for
                                <br />
                                <span style={{ color: "var(--tp-theme-primary)" }}> modern businesses. </span>
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
                                    <SmartLink className="tp-btn mb-10" href="/about-me">
                                        <span>
                                            <span className="text-1">Contact Us</span>
                                            <span className="text-2">Contact Us</span>
                                        </span>
                                        <i>
                                            <ButtonArrowIcon />
                                            <ButtonArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="ca-brand-area mt-30 mb-30" style={{ overflow: "hidden" }}>
                <div className="ca-brand-slider-active tp-slider-transtion">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        {...brand_slider_params}
                    >
                        {repeatedLogos.map((brand, index) => (
                            <SwiperSlide key={index}>
                                <div className="ca-brand-logo">
                                    <Image
                                        src={brand.img}
                                        width={brand.width}
                                        height={brand.height}
                                        alt="Brand Logo"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="container">
                {/* Big Title */}
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="mp-hero-bigtitle-wrap jump-anim text-center pt-10 tp_fade_anim"
                            data-delay=".8"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <h2 className="mp-hero-bigtitle tp-ff-sequel-semi-bold" style={{ color: "var(--tp-theme-primary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                Nexus
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgencyHero;
