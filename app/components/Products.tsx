"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const responsive = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    768: {
      width: 768,
      slidesPerView: 2,
    },
    1080: {
      width: 1080,
      slidesPerView: 3,
    },
  };

  return (
    <div className="py-16 ">
      {/* Top heading */}
      <div className="">
        <div className="text-xs font-bold tracking-widest text-textBlue text-center mb-4">
          PRODUCTS
        </div>
        <div className="font-bold text-4xl -tracking-tight text-textBlack text-center mb-8">
          Check What We Have
        </div>
      </div>
      {/* Bottom Top Items */}
      <Swiper
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={responsive}
      >
        {products.map((items) => (
          <SwiperSlide className="pl-[18px]" key={items.title}>
            <div className="w-[380px] inline-block pt-8 pb-14  cursor-pointer hover:scale-110 ease-in-out duration-500">
              <Link href={"/car"} id="myLink" className="drag-none">
                <Image
                  src={items.img}
                  alt={items.title}
                  width={380}
                  height={400}
                />
                <div className="text-left text-lg tracking-wide font-semibold text-textBlack mt-2">
                  <div>{items.title}</div>
                  <div className="">{items.price}</div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </Carousel> */}
    </div>
  );
}

const products = [
  { title: "Brushed Raglan Sweatshirt", price: "$195", img: "/product1.png" },
  { title: "Cameryn Sash Tie Dress", price: "$454", img: "/product2.png" },
  { title: "Flex Sweatshirt", price: "$175", img: "/product3.png" },
  { title: "Pink Fleece Sweatpants", price: "$195", img: "/product5.png" },
  { title: "Brushed Raglan Sweatshirt", price: "$195", img: "/product1.png" },
];
