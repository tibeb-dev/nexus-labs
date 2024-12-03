/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import HeroTitle from "../common/HeroTitle";
import React from "react";

const HeroSectionSeven = () => {
  return (
    <>
      <section
        className="hero-section ptb-120 text-white bg-gradient"
        style={{
          background: "url('/hero-dot-bg.png')no-repeat center right",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5">
                <HeroTitle
                  title="Your Trusted Partner in IT Excellence"
                  desc="Providing reliable, cutting-edge IT and AI-driven services designed to solve challenges, optimize performance, and help your business thrive in the digital age."
                />
                <div className="action-btns mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link href="/portfolio" className="py-3 fw-bold text-center fs-xl text-white bg-orange padding-x-20 rounded-3">
                    Our Works
                  </Link>
                </div>
                <div className="row justify-content-lg-start mt-60">
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img position-relative circle-shape-images">
                {/* <!--animated shape start--> */}
                <ul className="position-absolute animate-element parallax-element circle-shape-list">
                  <li className="layer" data-depth="0.02">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-1 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-2 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-3 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-4 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-5 hero-1"
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <img
                  src="/screen/animated-screen-5.svg"
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionSeven;
