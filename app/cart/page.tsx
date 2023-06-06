import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div className="px-8 lg:px-32">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
        {/* Cart Box */}
        <div className="flex flex-col gap-4">
          {/* product image and summary container */}
          <div className="">
            {/* image */}
            <div>
              <Image
                src={"/product1.png"}
                height={300}
                width={250}
                alt="product"
                className="rounded-md"
              />
            </div>
            {/* product details */}
            <div>
              <div className="flex justify-between pt-8">
                <div className="text-2xl font-light">
                  Brushed Raglan Sweatshirt
                </div>
                {/* Delete icon */}
                <div className="">
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
                </div>
              </div>
              <div className="py-2 font-semibold text-gray-700">Dress</div>
              <div className="font-semibold">Delivery Estimateion</div>
              <div className="py-2 font-semibold text-yellow-500">
                5 Working days
              </div>
              <div className="flex">
                <div className="text-xl font-semibold">$195</div>
                <div className="ml-auto flex items-center gap-4">
                  {/* Minus */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                  <span>1</span>
                  {/* Plus */}
                  <div className="rounded-full border border-gray-900 p-1 text-black">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      t="1551322312294"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs></defs>
                      <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                      <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* summary */}
          <div className="flex flex-col gap-6 p-8">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="flex justify-between">
              <div>Quantity</div>
              <div>1 Product</div>
            </div>
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div>$195</div>
            </div>
            <button
              type="submit"
              className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
