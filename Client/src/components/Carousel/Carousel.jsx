import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import style from './Carousel.module.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <SwiperSlide className={style.swiperSlide}><img src="https://saleboard.pk/storage/app/public/brands/sapphire-promotions/1625478128.gif" alt="" />Slider1</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src="https://www.dianeslingerie.com/wp-content/uploads/2018/06/new-arrivals-cat-pg-banner-02-dianes-lingerie-vancouver-1300x550.jpg" alt="" />Slider2</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src='https://img.ltwebstatic.com/images3_acp/2022/01/05/164138243627a1821d7ad2263be8db807b6befd913.webp' alt="" />Slider3</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src='https://roycollections.com/wp-content/uploads/2021/01/Sapphire-annual-winter-sale.gif' alt="" />Slider4</SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img src="https://cdn.shopify.com/s/files/1/0502/3753/8461/collections/catagory_banner_12.jpg?v=1643272783" alt="" />Slider5</SwiperSlide>
      
      </Swiper>
     
  )
}

export default Slider