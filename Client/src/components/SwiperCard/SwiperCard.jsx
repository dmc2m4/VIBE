import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from "./SwiperCard.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperCard = ({ props }) => {
  return (
    <Swiper key="swiper-one"
      spaceBetween={50}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className={style.swiper}
    >
      {props?.split(",").map((image, i) => {
        return (
          <SwiperSlide className={style.swiperSlide}>
            <img src={image} alt="Product Image" key={i}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCard;
