import React from "react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBtns from "./SwiperBtns";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function CreateSwiper({ children }) {
  const [swiper, setSwiper] = useState(false);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => {
        setSwiper(!swiper);
        console.log(swiper);
      }}
    >
      {children}
      <SwiperBtns next = {navigationNextRef} prev = {navigationPrevRef}></SwiperBtns>
    </Swiper>
  );
}

export default CreateSwiper;
