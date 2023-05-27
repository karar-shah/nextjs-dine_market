import Image from "next/image";
import React from "react";

export default function Hero1() {
  return (
    <>
      {/* Main Div */}
      <div className="flex pt-12 pb-4 relative justify-between">
        {/* Left Div */}
        <div className="flex flex-col justify-between">
          {/* Upper part */}
          <div className="flex bg-lighBlue text-textBlue font-semibold rounded-md w-28 h-10 items-center justify-center">
            Sale 70%
          </div>
          <div className="text-textBlack font-bold text-6xl tracking-wide">
            An Industrial Take on Streetwear
          </div>
          <div className="text-textGrey font-normal text-base w-3/4 ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </div>
          {/* Black Button */}
          <div className="flex text-base font-semibold w-2/6 p-4 bg-blackButton text-white items-center justify-center">
            <button>
              <svg
                className="pr-1"
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="26"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
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
          <div className="grid grid-cols-4 gap-4">
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
        <div>
          {/* Circle */}
          <div className="w-[600px] h-[600px] bg-circleCream rounded-[50%] relative">
            <Image
              className="absolute"
              src={"/header.webp"}
              alt="HeroSection Girl"
              height={"650"}
              width={"650"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
