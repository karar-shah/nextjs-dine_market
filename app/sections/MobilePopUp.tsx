"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function MobilePopUp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* TopBar */}
      {/* Mobile popup open and close svgs */}
      <div
        onClick={handleOpen}
        className="fixed right-28 top-16 z-20 lg:hidden"
      >
        {open ? (
          <>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              color="black"
              font-size="27"
              //   style="color:black"
              height="2.5em"
              width="2.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
              </g>
            </svg>
          </>
        ) : (
          <>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              color="black"
              font-size="27"
              //   class="close_icon"
              height="3em"
              width="3em"
              xmlns="http://www.w3.org/2000/svg"
              //   style="color: black;"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
              </g>
            </svg>
          </>
        )}
      </div>
      {/* Dine market logo */}
      <div className="fixed left-28 top-16 z-20 lg:hidden">
        <Image
          src="/Logo.webp"
          height={50}
          width={280}
          alt="Dine market logo"
        />
      </div>
      {!open && (
        <div className="lg:hidden text-4xl flex justify-center items-center flex-col w-full bg-white gap-9 fixed top-0 left-0 bottom-0 right-0 z-10">
          {/* List of links */}
          {/* Cart button */}
          <button className="bg-gray-200 rounded-full p-6 relative">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="44"
              width="44"
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
            <span className="bg-red-600 text-white rounded-full h-8 w-8 text-xl absolute top-0 right-1">
              0
            </span>
          </button>
          <div>Female</div>
          <div>Male</div>
          <div>Kids</div>
          <div>All Products</div>
        </div>
      )}
    </>
  );
}
