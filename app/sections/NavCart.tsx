"use client";
import Link from "next/link";
import React from "react";
import { IProductsDetail } from "../interface/interface";
import { getProductData1 } from "../interface/fetchFunction";

export default async function NavCart() {
  // Sending product to DB
  // const handleAddToCart = async () => {
  //   const res = await fetch("/api/cart", {
  //     method: "GET",
  //   });
  //   const result = await res.json();
  //   console.log("!!!!!", result);
  // };
  // console.log(await handleAddToCart());
  return (
    <div>
      <Link href="/cart">
        <button
          // onClick={handleAddToCart}
          className="relative rounded-full bg-gray-200 p-3"
        >
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
          <span className="absolute right-1 top-0 h-4 w-4 rounded-full bg-red-600 text-sm text-white">
            0
          </span>
        </button>
      </Link>
    </div>
  );
}
