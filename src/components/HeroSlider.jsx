"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "@/assets/images/hero1.webp";
import hero2 from "@/assets/images/hero2.webp";
import hero3 from "@/assets/images/hero3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="mx-10 pt-10">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        initialSlide={2}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        horizontalClass={true}
        className="mySwiper"
        // autoplay={{delay: 3000}}
      >
        <SwiperSlide className="rounded-lg overflow-hidden">
          <Image
            src={hero1}
            alt="slide1"
            width={1000}
            height={1000}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={hero2}
            alt="slide1"
            width={1000}
            height={1000}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={hero3}
            alt="slide1"
            width={1000}
            height={1000}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded-lg overflow-hidden">
          <Image
            src={hero1}
            alt="slide1"
            width={1000}
            height={1000}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={hero2}
            alt="slide1"
            width={1000}
            height={1000}
            className=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={hero3}
            alt="slide1"
            width={1000}
            height={1000}
            className=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
