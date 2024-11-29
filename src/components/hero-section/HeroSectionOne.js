import React, { useState } from "react";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";
import Image from "next/image";
import ModalVideo from "react-modal-video";

const HeroSectionOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png') no-repeat center right" }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5">
                Creativity in Our DNA, Client Joy in Our Code.
              </h1>

              <p className="lead">
                We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future.
              </p>

              <div className="action-btns mt-5 align-items-center flex d-sm-flex d-lg-flex d-md-flex">
                <Link legacyBehavior href="/request-demo">
                  <a className="btn btn-primary me-3">Request For Demo</a>
                </Link>
                  <a
                    href="#!"
                    onClick={() => setOpen(true)}
                    type="button"
                    className="text-white text-decoration-none d-inline-flex align-items-center watch-now-btn"
                  >
                    <IoPlayCircleOutline className="me-2" size={48} /> Watch Demo
                  </a>
              </div>
              <div className="row justify-content-lg-start mt-60">
                <h6 className="text-white-70 mb-2">Our Top Clients:</h6>
                <div className="col-4 col-sm-3 my-2 ps-lg-0">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-1.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-2.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <Image
                    width={141}
                    height={56}
                    src="/clients/client-3.svg"
                    alt="client"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
              <img
                src="/hero-1.png"
                width={744}
                height={717}
                alt="hero img"
                priority="true"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
