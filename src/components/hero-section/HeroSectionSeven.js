import Link from "next/link";
import HeroTitle from "../common/HeroTitle";
import React from "react";

const HeroSectionSeven = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-white bg-gradient overflow-hidden ptb-80"
      style={{
        background: "url('/hero-dot-bg.png') no-repeat center right",
      }}
    >
      <div className="container h-full flex items-center">
        <div className="row w-full align-items-center">
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
              {/* Animated Shapes */}
              {/* <ul className="position-absolute animate-element parallax-element circle-shape-list">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="layer" data-depth="0.03">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className={`circle-shape-item type-${i + 1} hero-1`}
                    />
                  </li>
                ))}
              </ul> */}
              {/* Hero Image */}
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
};

export default HeroSectionSeven;
