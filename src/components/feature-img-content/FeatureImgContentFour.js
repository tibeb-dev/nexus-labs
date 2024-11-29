/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { BsBezier, BsShieldCheck } from 'react-icons/bs';

import SectionTitle from '../common/SectionTitle';

const FeatureImgContentFour = () => {
  return (
    <section className="feature-section pt-60 pb-120">
      <div className="container">
        <div className="row align-content-center justify-content-between">
          <div className="col-lg-5 col-md-12">
            <div className="icon-box rounded-custom bg-danger shadow-sm d-inline-block">
              <span className="fal fa-2x text-white">
                <BsShieldCheck />
              </span>
            </div>
            <SectionTitle
              title="Services We Can Help You With"
              description="Explore our wide range of services."
            />
            <div className="single-feature d-flex mb-4">
              <span className="fad fa-2x text-primary">
                <BsBezier className="fa-lg" />
              </span>
              <div className="ms-4 mt-2">
                <h5> Back-end development </h5>
                <p>
                  Api development, Cloud integration, Database design and optimization.
                </p>
              </div>
            </div>
            <div className="single-feature d-flex mb-4">
              <span className="fad fa-2x text-primary">
                <BiCodeAlt className="fa-lg" />
              </span>
              <div className="ms-4 mt-2">
                <h5> Front-end Development </h5>
                <p>
                  We build performant apps, that look amazing and responsive.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="feature-shape-img position-relative mt-5 mt-lg-0">
              <div className="img-bg-shape position-absolute">
                <img src="/integations/shape.svg" alt="integations" />
              </div>
              <img
                src="/dashkit.png"
                className="img-fluid skewed-img-right rounded-custom shadow-lg"
                alt="softtent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentFour;
