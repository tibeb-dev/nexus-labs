import React from "react";


import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const TestimonialSix = () => {
  return (
    <section
      className="cyber-testimonial pt-100"
      style={{
        background: "url('/Map.png') no-repeat center center / cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="cyber-testimonial pe-5 mb-30 mb-lg-0">
              <h2 className="">What they Say about Our Services.</h2>
              <p>
                Checkout what our previous clients had to say about our work!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cyber-testimonial-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
              >
                <SwiperSlide className="mb-2">
                  <div className="cyber-single-testimonial">
                    <div className="cyber-t-q mb-4">
                      <img
                        src="/quoate.png"
                        alt="quoate"
                        width={54}
                        height={54}
                      />
                    </div>
                    <p className="mb-30">
                      Nexus Team was a pleasure to work with.
                      They met deadlines, communicated effectively, and delivered solid work.
                      While they were open about their limitations, their skills were overall strong.
                      I look forward to future collaborations.
                    </p>
                    <div className="cyber-auth-info d-flex">
                      <div className="pe-3 cyber-testimonial-author-img">
                        <span
                          style={{ 
                            display: 'flex',
                            alignSelf: 'center',
                            borderRadius: '100%',
                            width: '50px', 
                            height: '50px', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: '18px',
                            backgroundColor: 'blue',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                        JP
                        </span>
                      </div>
                      <div className="cyber-testimonial-author">
                        <h5 className="mb-0 h6">Jason Peitruzsca</h5>
                        <span>CEO at JJP Construction.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-single-testimonial">
                    <div className="cyber-t-q mb-4">
                      <img
                        src="/quoate.png"
                        alt="quoate"
                        width={54}
                        height={54}
                      />
                    </div>
                    <p className="mb-30">
                      Nexus is a reliable and collaborative team.
                      They consistently deliver high-quality work and are proactive problem solvers.
                    </p>
                    <div className="cyber-auth-info d-flex">
                      <div className="pe-3 cyber-testimonial-author-img">
                        <span
                          style={{ 
                            display: 'flex',
                            alignSelf: 'center',
                            borderRadius: '100%',
                            width: '50px', 
                            height: '50px', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: '18px',
                            backgroundColor: 'blue',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          TH
                        </span>
                      </div>
                      <div className="cyber-testimonial-author">
                        <h5 className="mb-0 h6">Thomas H.</h5>
                        <span>CEO, GiftXD.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cyber-single-testimonial">
                    <div className="cyber-t-q mb-4">
                      <img
                        src="/quoate.png"
                        alt="quoate"
                        width={54}
                        height={54}
                      />
                    </div>
                    <p className="mb-30">
                      Nexus Team delivered an exceptional web service ahead of schedule, demonstrating strong Python, Django, and REST API skills.
                      Their excellent communication and customer service made the collaboration seamless.
                    </p>
                    <div className="cyber-auth-info d-flex">
                      <div className="pe-3 cyber-testimonial-author-img">
                        <span
                          style={{ 
                            display: 'flex',
                            alignSelf: 'center',
                            borderRadius: '100%',
                            width: '50px', 
                            height: '50px', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: '18px',
                            backgroundColor: 'blue',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          RS
                        </span>
                      </div>
                      <div className="cyber-testimonial-author">
                        <h5 className="mb-0 h6">Roman Sandler</h5>
                        <span>CEO, ICARDIO.AI</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSix;
