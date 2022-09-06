import React from "react";
import { useState } from "react";
import { Navigation } from "swiper";

import { Swiper } from "swiper/react";
import SwiperBtns from "./SwiperBtns";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function CreateSwiper({ children }) {
  //state to change go to another slide
  console.log(children);
  const [swiper, setSwiper] = useState(false);

  //swiper btns refs
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={5}
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onSwiper={(swiper) =>
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
          console.log(swiper);
        })
      }
      onSlideChange={() => {
        setSwiper(!swiper);
        console.log(swiper);
      }}
    >
      {children}
      <SwiperBtns
        next={navigationNextRef}
        prev={navigationPrevRef}
      ></SwiperBtns>
    </Swiper>
  );
}

export default CreateSwiper;
