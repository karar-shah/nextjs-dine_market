"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Products() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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
      {/* <div className="h-[530px] relative flex items-center text-center">
        <div
          id="slider"
          className="w-full h-full pl-[13px] overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {products.map((items) => (
            <div
              key={items.title}
              className="w-[380px] inline-block py-8 pl-1 cursor-pointer hover:scale-110 ease-in-out duration-500"
            >
              <Link href={"/"}>
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
          ))}
        </div>
      </div> */}
      <Carousel
        className="pl-[14px]"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {products.map((items) => (
          <div
            key={items.title}
            className="w-[380px] inline-block py-8 pl-1 cursor-pointer hover:scale-110 ease-in-out duration-500"
          >
            <Link href={"/car"} id="myLink" className="drag-none">
              <Image
                src={items.img}
                alt={items.title}
                width={380}
                height={400}
                className="drag-none"
              />
              <div className="text-left text-lg tracking-wide font-semibold text-textBlack mt-2">
                <div>{items.title}</div>
                <div className="">{items.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
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
