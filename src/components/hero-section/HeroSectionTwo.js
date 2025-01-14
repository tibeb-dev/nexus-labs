import React from "react";
import Link from "next/link";

const HeroSectionTwo = () => {
  return (
    <section
      className="about-header-section ptb-120 position-relative overflow-hidden bg-gradient"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5">
                    Highly experienced people with us
                  </h1>
                  <p className="lead">
                    Our proficient app developers, with a wealth of experience,
                    adeptly guide clients through the intricate process of conceptualizing and delivering enterprise-grade mobile solutions,
                    showcasing our commitment to excellence in the field.
                  </p>
                </div>
                <img
                  src="/nexus/about-4.jpg"
                  alt="about"
                  className="img-fluid mt-5 about-img-first rounded-custom shadow"
                />
              </div>
              <div className="about-content-right">
                <img
                  src="/nexus/about-2.jpg"
                  alt="about"
                  className="img-fluid mb-5 rounded-custom shadow"
                />
                <img
                  src="/nexus/about-us6.png"
                  alt="about"
                  className="img-fluid rounded-custom about-img-last shadow"
                  style={{ width: '126%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default HeroSectionTwo;
