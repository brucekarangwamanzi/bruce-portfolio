import React from "react";
import testimonialCSS from './../Testimonials/Testimonial.module.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import CompanyLogo1 from './../../assets/company_logo.png'
import user1 from './../../assets/Testi1.jpg'
import CompanyLogo2 from './../../assets/company_logo2.png'
import user2 from './../../assets/Testi2.jpg'

function Testimonials() {
    return (
        <div className={testimonialCSS.Testimonial_wrapper} id="Testimonial">
            <div className={testimonialCSS.content}>
                <h1 className="title">Our Clients</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className={testimonialCSS.slider_wrapper}>
                <Swiper
                    slidesPerView={2}
                    autoplay={
                        {
                            delay: 1500
                        }}
                        spaceBetween={120}
                    modules={[Autoplay]}
                    loop={true}
                    breakpoints={
                        {
                            375:{
                                slidesPerView: 1
                            },
                            500:{
                                slidesPerView: 2
                            },
                            1500:{
                                spaceBetween:150
                            },
                            1600:{
                                slidesPerView:2
                            }
                        }
                    }

                >
                    <SwiperSlide>
                        <div className={testimonialCSS.Slide}>
                            <div>
                                <img src={CompanyLogo1} alt="" />
                                <img src={user1} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo illum quaerat!</p>
                            <h2>Tim Baliy <br /> <small>Seo Theme Specialist Juction</small></h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={testimonialCSS.Slide}>
                            <div>
                                <img src={CompanyLogo2} alt="" />
                                <img src={user2} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo illum quaerat!</p>
                            <h2>Tim Baliy <br /> <small>Seo Theme Specialist Juction</small></h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={testimonialCSS.Slide}>
                            <div>
                                <img src={CompanyLogo1} alt="" />
                                <img src={user1} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo illum quaerat!</p>
                            <h2>Tim Baliy <br /> <small>Seo Theme Specialist Juction</small></h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={testimonialCSS.Slide}>
                            <div>
                                <img src={CompanyLogo2} alt="" />
                                <img src={user2} alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo illum quaerat!</p>
                            <h2>Tim Baliy <br /> <small>Seo Theme Specialist Juction</small></h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;