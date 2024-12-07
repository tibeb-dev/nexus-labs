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
                If you use this site regularly and would like to help keep the
                site pay for the hosting and bandwidth bill
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
                      Nexus Team delivered good work on this project, and I enjoyed working with them.
                      Their communication was top-notch, they met all deadlines, and their skills were reasonably strong.
                      At one point, I asked for an additional milestone, and they were very forthcoming that the additional work was outside their area of expertise.
                      I enjoyed working with Nexus Team and will likely have additional jobs for them in the future.
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
                      During their tenure, Nexus's team consistently demonstrated commendable work ethic, effectively combining hard work and problem-solving skills.
                      They are particularly adept at collaborative efforts, contributing valuable insights and support.
                      Notably, while they readily seek assistance when needed,
                      they approach challenges with a humble and proactive attitude, often finding innovative solutions independently.
                      This combination of qualities makes the team a highly valuable asset to any project or organization.
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
                      I had a great experience working with Nexus Team on my Upwork project.
                      They delivered exceptional work ahead of schedule, demonstrating excellent communication and customer service throughout the process.
                      Proficient in Python, Django, and REST API integration,
                      Nexus Team developed a continuous web service for generating and saving user posts with an intuitive graphical interface for content review.
                      They also implemented a secure database for user content.
                      I highly recommend Nexus Team for any web development project and look forward to future collaborations.
                      Thank you for the exceptional work!
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
