"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Shadcn() {
  return (
    <div>
      <div className="text-center font-semibold p-4">ShadCn UI</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
        <SwiperSlide className="p-10">
          <a href="www.google.com">Slide</a>
        </SwiperSlide>
      </Swiper>
      <div></div>
    </div>
  );
}
