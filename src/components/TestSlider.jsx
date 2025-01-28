"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import hero1 from "@/assets/images/hero1.webp";
import hero2 from "@/assets/images/hero2.webp";
import hero3 from "@/assets/images/hero3.webp";

import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import Image from "next/image";

const TestSlider = () => {
  return (
    <div className="bg-[#26292b] h-[1200px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-10 pt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            centeredSlides={true}
          >
            <SwiperSlide className="">
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
            <SwiperSlide className="">
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
      </div>
    </div>
  );
};

export default TestSlider;
