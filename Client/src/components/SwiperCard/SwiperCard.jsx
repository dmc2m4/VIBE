import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from "./SwiperCard.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperCard = ({ props }) => {
  return (
    <Swiper
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
            <img src={image} alt="Product Image" key={i} />
          </SwiperSlide>
        );
      })}
      {/* <SwiperSlide className={style.swiperSlide}>
        <img src={Carrousel1} alt="" />
        Slider1
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src={Carrousel2} alt="" />
        Slider2
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src={Carrousel3} alt="" />
        Slider3
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src={Carrousel4} alt="" />
        Slider4
      </SwiperSlide>
      <SwiperSlide className={style.swiperSlide}>
        <img src={Carrousel5} alt="" />
        Slider5
      </SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperCard;
