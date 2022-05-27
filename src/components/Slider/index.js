import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import 'swiper/swiper.scss';
import "./styles.scss";

// import required modules
import { Navigation } from "swiper";

export default function Silder() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="img/ai.png" /></SwiperSlide>
                <SwiperSlide><img src="img/dandy.png" /></SwiperSlide>
                <SwiperSlide><img src="img/para.png" /></SwiperSlide>
            </Swiper>
        </>
    );
}
