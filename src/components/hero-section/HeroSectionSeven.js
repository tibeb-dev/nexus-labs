import Link from "next/link";
import HeroTitle from "../common/HeroTitle";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const HeroSectionSeven = () => {
  const [animationData, setAnimationData] = useState(null);

useEffect(() => {
  fetch("/Homepage-animation/animations/home-animation.json")
    .then((res) => res.json())
    .then((data) => {
      setAnimationData(data);
    })
    .catch((err) => {
      console.error("Error loading animation:", err);
      setAnimationData(null); // Make sure it's clear that we failed to load animation
    });
}, []);
  // console.log("animation data",animationData)
  if (!animationData) {
    return (
      <section
        className="h-screen flex flex-col justify-center items-center text-white bg-gradient overflow-hidden ptb-80"
        style={{
          background: "url('/hero-dot-bg.png') no-repeat center right",
        }}
      >
        <div className="container paddingt">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap">
                <HeroTitle
                  title="Your Trusted Partner in IT Excellence"
                  desc="Providing reliable, cutting-edge IT and AI-driven services designed to solve challenges, optimize performance, and help your business thrive in the digital age."
                />
                <div className="mt-5 d-flex">
                  <Link
                    href="/contact-us"
                    className="py-3 fw-bold text-center fs-lg text-white px-5 rounded-3"
                    style={{ backgroundColor: "#333a94" }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="hero-img position-relative circle-shape-images">
                {/* Fallback Hero Image */}
                <img
                  src="/background-hero.png"
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{
        background: "url('/hero-dot-bg.png') no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5">  
              <HeroTitle
                title="Your Trusted Partner in IT Excellence"
                desc="Providing reliable, cutting-edge IT and AI-driven services designed to solve challenges, optimize performance, and help your business thrive in the digital age."
              />
              <div className="mt-5 d-flex">
                <Link
                  href="/contact-us"
                  className="py-3 fw-bold text-center fs-lg text-white px-5 rounded-3"
                  style={{ backgroundColor: "#333a94" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="hero-img position-relative circle-shape-images">
              {/* Replace the image with Lottie Animation */}
              <div className="position-relative z-5">
                <Lottie animationData={animationData} loop={true} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSeven;
