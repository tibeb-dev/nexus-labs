import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles
import { Navigation, Pagination, Autoplay } from "swiper"; // Import necessary modules

const CreativeAgencyTwoTestimonial = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div className="ca-two-tesimonial-area pt-120  pb-40 position-relative">
          <div className="container-fluid">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xxl-4 col-lg-6">
                  <h6 className="ca-two-subtitle ca-two-body-clr-two d-flex align-items-center ca-two-pt-10 mb-85">
                    <span className="ca-two-bg-two"></span>Client Feedback
                  </h6>
                  <h2 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 pr-20">
                    What Our Customers Say About Us
                  </h2>
                  <div className="ca-two-counter-area pr-20 mt-50">
                    <div className="d-inline-flex align-items-center gap-20">
                      <div className="ca-two-counter-item pb-30">
                        <h5 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 mb-0">
                          <span className="counter">10</span>k
                        </h5>
                        <p className="ca-two-body-clr flh-24 mb-0">
                          Truest Clients
                        </p>
                      </div>
                      <div className="ca-two-counter-item pl-50 ca-two-dotted-left-border ca-two-border-color-two pb-30">
                        <h5 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 mb-0">
                          <span className="counter">100</span>+
                        </h5>
                        <p className="ca-two-body-clr flh-24 mb-0">
                          Pending Works
                        </p>
                      </div>
                    </div>
                    <div className="d-inline-flex align-items-center gap-20 ca-two-dotted-top-border ca-two-border-color-two">
                      <div className="ca-two-counter-item pt-30">
                        <h5 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 mb-0">
                          <span className="counter">500</span>+
                        </h5>
                        <p className="ca-two-body-clr flh-24 mb-0">
                          Truest Clients
                        </p>
                      </div>
                      <div className="ca-two-counter-item pl-50 ca-two-dotted-left-border ca-two-border-color-two pt-30">
                        <h5 className="ca-two-title ca-two-body-clr-two fs-36 fw-500 flh-48 mb-0">
                          <span className="counter">10</span>k
                        </h5>
                        <p className="ca-two-body-clr flh-24 mb-0">
                          Pending Works
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href=""
                    className="btn dg-outline-btn ca-two-body-clr ca-two-bg-hover-two mt-50"
                  >
                    Get in Touch
                  </a>
                </div>
                <div className="col-lg-6">
                  <div className="ca-two-min-testimonial swiper">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={25}
                      slidesPerView={3}
                      loop={true}
                      direction="vertical"
                      // pagination={{ clickable: true }}
                      // navigation
                      autoplay={{
                        delay: 3000, // Delay between slides in ms
                        disableOnInteraction: false, // Continue autoplay after user interactions
                      }}
                      breakpoints={{
                        // Define breakpoints for responsiveness
                        640: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1400: {
                          slidesPerView: 3,
                        },
                      }}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide className="swiper-slide">
                        <div className="ca-two-testimonial-item d-inline-block bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-30">
                          <div className="d-flex align-items-center ch-mb-10">
                            <img
                              src="/creative-agency-2/testimonial.png"
                              alt="not found"
                              className="rounded-circle flex-shrink-0"
                            />
                            <div className="ms-4">
                              <h5 className="ca-two-body-clr-two fs-16 mb-0">
                                Brooklyn Simmons
                              </h5>
                              <span className="text-dg-color fs-sm">
                                Director at Webflow
                              </span>
                            </div>
                          </div>
                          <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                            Interactively redefine progressive networks.
                            Synergistically integrate dynamic solutions
                            vis-a-vis resource maximizing ROI
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="ca-two-testimonial-item d-inline-block bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-30">
                          <div className="d-flex align-items-center ch-mb-10">
                            <img
                              src="/creative-agency-2/testimonial.png"
                              alt="not found"
                              className="rounded-circle flex-shrink-0"
                            />
                            <div className="ms-4">
                              <h5 className="ca-two-body-clr-two fs-16 mb-0">
                                Brooklyn Simmons
                              </h5>
                              <span className="text-dg-color fs-sm">
                                Director at Webflow
                              </span>
                            </div>
                          </div>
                          <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                            Interactively redefine progressive networks.
                            Synergistically integrate dynamic solutions
                            vis-a-vis resource maximizing ROI
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="ca-two-testimonial-item d-inline-block bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-30">
                          <div className="d-flex align-items-center ch-mb-10">
                            <img
                              src="/creative-agency-2/testimonial.png"
                              alt="not found"
                              className="rounded-circle flex-shrink-0"
                            />
                            <div className="ms-4">
                              <h5 className="ca-two-body-clr-two fs-16 mb-0">
                                Brooklyn Simmons
                              </h5>
                              <span className="text-dg-color fs-sm">
                                Director at Webflow
                              </span>
                            </div>
                          </div>
                          <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                            Interactively redefine progressive networks.
                            Synergistically integrate dynamic solutions
                            vis-a-vis resource maximizing ROI
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="ca-two-testimonial-item d-inline-block bg-white ca-two-border ca-two-border-color rounded-16 padding-6 pt-30">
                          <div className="d-flex align-items-center ch-mb-10">
                            <img
                              src="/creative-agency-2/testimonial.png"
                              alt="not found"
                              className="rounded-circle flex-shrink-0"
                            />
                            <div className="ms-4">
                              <h5 className="ca-two-body-clr-two fs-16 mb-0">
                                Brooklyn Simmons
                              </h5>
                              <span className="text-dg-color fs-sm">
                                Director at Webflow
                              </span>
                            </div>
                          </div>
                          <p className="ca-two-body-clr flh-24 fch-55 mb-0">
                            Interactively redefine progressive networks.
                            Synergistically integrate dynamic solutions
                            vis-a-vis resource maximizing ROI
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <svg
              width="1840"
              height="711"
              viewBox="0 0 1840 711"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M260 18.5C260 28.7173 268.283 37 278.5 37L441.5 37C451.717 37 460 28.7173 460 18.5V18.5C460 8.28273 468.283 1.51935e-06 478.5 1.51935e-06H1681C1694.25 1.51935e-06 1705 10.7452 1705 24V145C1705 158.255 1715.75 169 1729 169V169C1742.25 169 1753 158.255 1753 145V24C1753 10.7452 1763.75 -3.19662e-07 1777 0L1816 9.40549e-07C1829.25 1.26021e-06 1840 10.7452 1840 24V687C1840 700.255 1829.25 711 1816 711H1194C1180.75 711 1170 700.255 1170 687V594C1170 580.745 1180.75 570 1194 570H1616C1629.25 570 1640 559.255 1640 546V394C1640 380.745 1629.25 370 1616 370H1204C1190.75 370 1180 359.255 1180 346V345C1180 331.745 1190.75 321 1204 321H1584C1597.25 321 1608 310.255 1608 297V145C1608 131.745 1597.25 121 1584 121H1164C1150.75 121 1140 110.255 1140 97V80C1140 66.7452 1129.25 56 1116 56H1068C1054.75 56 1044 66.7452 1044 80V128C1044 141.255 1054.75 152 1068 152H1111C1124.25 152 1135 162.745 1135 176V255C1135 268.255 1124.25 279 1111 279H731C717.745 279 707 289.745 707 303V455C707 468.255 717.745 479 731 479H1143C1156.25 479 1167 489.745 1167 503V505C1167 518.255 1156.25 529 1143 529H721C707.745 529 697 539.745 697 553V687C697 700.255 686.255 711 673 711H24C10.7452 711 0 700.255 0 687V24C0 10.7452 10.7452 1.51935e-06 24 1.51935e-06H241.5C251.717 1.51935e-06 260 8.28274 260 18.5V18.5Z"
                fill="#F6F6F6"
              />
              <rect x="495" y="22" width="1209" height="689" fill="#F6F6F6" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default CreativeAgencyTwoTestimonial;
