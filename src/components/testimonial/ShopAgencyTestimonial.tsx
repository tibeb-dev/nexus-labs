"use client";
import { shopAgencyTestimonialsData } from "@/data/testimonial-data";
import ShopAgencyTestiItem from "./subComponents/ShopAgencyTestiItem";
import { shop_testimonial_slider_params } from "@/constant/swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ShopAgencyTestimonial = () => {
    return (
        <div className="shop-testimonial-area pt-145 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="text-center mb-60">
                            <div className="tp-service-subtitle-wrap pt-25 justify-content-start mb-50">
                            <span className="tp-section-subtitle tp-ff-sequel-roman">Testimonials</span>
                        </div>
                            <h2 className="tp-section-title tp-text-perspective fs-100">
                                What Our Clients Say
                            </h2>
                        </div>

                        <div className="shop-testimonial-slider-wrap p-relative mb-30">
                            <div className="swiper shop-testimonial-slider-active">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Navigation]}
                                        {...shop_testimonial_slider_params}
                                    >
                                        {shopAgencyTestimonialsData.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <ShopAgencyTestiItem {...testimonial} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="shop-testimonial-navigation">
                                <span className="shop-testimonial-arrow-prev">
                                    <i className="fa-solid fa-arrow-left"></i>
                                </span>
                                <span className="shop-testimonial-arrow-next">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopAgencyTestimonial;
