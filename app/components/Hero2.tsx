import Image from "next/image";
import React from "react";

export default function Hero2() {
  return (
    <header className="flex relative mx-8 pt-8 gap-16 lg:ml-16 xl:ml-32 lg:mr-0 lg:my-16 ">
      {/* Left Div */}
      <div className="flex flex-col  lg:gap-12 gap-8 min-w[450px]">
        {/* Upper part */}
        <div className="flex bg-lighBlue text-textSaleBlue font-semibold rounded-md w-28 h-10 items-center justify-center ">
          Sale 70%
        </div>
        <div className="text-textBlack font-bold lg:text-6xl text-5xl tracking-wide ">
          An Industrial Take on Streetwear
        </div>
        <div className="text-textGrey font-normal text-base ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </div>
        {/* Black Button */}
        <div className="flex text-base font-semibold min-w-[160px] lg:w-2/6 w-4/5 p-4 bg-blackButton text-white items-center justify-center border-l-2 border-t-2 border-textGrey">
          <button>
            <svg
              className="pr-1"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div className="text-center">Start Shopping</div>
        </div>
        {/* Lower logo part */}
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <Image
            src={"/Featured1.webp"}
            alt="HeroSection Featured1"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured2.webp"}
            alt="HeroSection Featured2"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured3.webp"}
            alt="HeroSection Featured3"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured4.webp"}
            alt="HeroSection Featured4"
            height={"35"}
            width={"100"}
          />
        </div>
      </div>

      {/* Right Div */}
      <div className="overflow-hidden hidden lg:block">
        {/* Circle */}
        <div className="w-[600px] h-[600px] bg-circleCream rounded-[50%] relative mr-32 ">
          <Image
            className="absolute"
            src={"/header.webp"}
            alt="HeroSection Girl"
            height={"650"}
            width={"650"}
          />
        </div>
      </div>
    </header>
  );
}
