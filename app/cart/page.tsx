import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="px-32">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
        {/* Cart Box */}
        <div className="flex">
          {/* product image and summary container */}
          <div className="flex">
            {/* image */}
            <div>
              <Image
                src={"/product1.png"}
                height={250}
                width={250}
                alt="product"
                className="rounded-md"
              />
            </div>
            {/* product details */}
            <div>
              <div className="flex justify-between">
                Flex Sweatshirt{" "}
                <span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/* summary */}
          <div></div>
        </div>
      </div>
    </>
  );
}
