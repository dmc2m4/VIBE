import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carrousel1 from "../../assets/Carrousel1.png"
import Carrousel2 from "../../assets/Carrousel2.png"
import Carrousel3 from "../../assets/Carrousel3.png"
import Carrousel4 from "../../assets/Carrousel4.png"
import Carrousel5 from "../../assets/Carrousel5.png"

const Slider = () => {
  return (
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled"
        }}
        modules={[Autoplay,Pagination, Navigation]}
        className={style.swiper}
      >
        <SwiperSlide className={style.swiperSlide}><img src={Carrousel1} alt="" />Slider1</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src={Carrousel2} alt="" />Slider2</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src={Carrousel3} alt="" />Slider3</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src={Carrousel4} alt="" />Slider4</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src={Carrousel5} alt="" />Slider5</SwiperSlide>
      
      </Swiper>
     
  )
}

export default Slider;
