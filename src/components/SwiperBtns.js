import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperBtns({ next, prev }) {
  /*swiper btns consists of two buttons*/

  return (
    <>
      <button className="next" ref={next}></button>
      <button className="prev" ref={prev}></button>
    </>
  );
}
