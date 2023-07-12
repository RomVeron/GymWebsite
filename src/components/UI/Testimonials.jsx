import React from 'react'
import "../../styles/testimonial.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png"
import avatar02 from "../../assets/img/avatar02.png"

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide__item">
                        <div className="slide__img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>                
            </Swiper>
        </div>
      </section>
    </>
  );
}
