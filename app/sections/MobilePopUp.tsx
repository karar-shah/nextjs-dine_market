"use client";
import Image from "next/image";
import Link from "next/link";
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
        className="absolute right-10 top-10 z-20 lg:hidden"
      >
        {!open ? (
          <>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="black"
              fontSize="27"
              //   style="color:black"
              height="1em"
              width="1em"
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
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="black"
              fontSize="27"
              //   class="close_icon"
              height="1em"
              width="1em"
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
      <div className="absolute left-10 top-10 z-20 lg:hidden">
        <Link href="/">
          <Image
            src="/Logo.webp"
            height={25}
            width={140}
            alt="Dine market logo"
          />
        </Link>
      </div>
      {open && (
        <ul className="fixed bottom-0 left-0 right-0 top-0 z-10 flex w-full flex-col items-center justify-center gap-4 bg-white text-xl lg:hidden">
          {/* List of links */}
          <li>
            {/* Cart button */}
            <Link href={"/cart"}>
              <button className="relative rounded-full bg-gray-200 p-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="22"
                  width="22"
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
                <span className="absolute right-1 top-0 h-6 w-6 rounded-full bg-red-600 text-white">
                  0
                </span>
              </button>
            </Link>
          </li>
          <li>
            <Link href="/female">Female</Link>
          </li>
          <li>
            <Link href="/male">Male</Link>
          </li>
          <li>
            <Link href="/kids">Kids</Link>
          </li>
          <li>
            <Link href="/all-products">All Products</Link>
          </li>
        </ul>
      )}
    </>
  );
}
