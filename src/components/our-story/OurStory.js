/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section
      className="our-story-section pt-60 pb-120"
      style={{
        background: "url('/shape/dot-dot-wave-shape.svg')no-repeat left bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 col-md-12 order-lg-1">
            <div className="section-heading sticky-sidebar">
              <h2> Your trusted partner for business </h2>
              <p>
                This is the primary element that distinguishes us from our competitors and empowers us to provide specialized technology services.
                Our team leverages its extensive experience to assess and implement cutting-edge technological solutions.
                Over the years, we have discovered that, in the realm of technology, each channel holds unique insights and challenges.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-lg-0">
            <div className="story-grid-wrapper position-relative">
              <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                <li className="layer" data-depth="0.02">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/image-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <Image
                    width={129}
                    height={72}
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul>

              <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-primary"> 10+ </h3>
                  <h6 className="mb-0">Team Members</h6>
                </div>
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-warning">
                    8 Years
                  </h3>
                  <h6 className="mb-0 text-white">In Business</h6>
                </div>
                <div className="story-item bg-light border">
                  <h3 className="display-5 fw-bold mb-1 text-danger"> 10+ </h3>
                  <h6 className="mb-0 text-white">Clients Worldwide</h6>
                </div>
                <div className="story-item bg-white border">
                  <h3 className="display-5 fw-bold mb-1 text-primary"> 15+ </h3>
                  <h6 className="mb-0">Projects Completed</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
