import { IProductsDetail } from "@/app/interface/interface";
import { getProductData1 } from "@/app/interface/fetchFunction";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import Quantity_Size from "@/app/sections/Quantity_Size";

// export const getProductData = async (graqQury: string) => {
//   const res = await client.fetch(graqQury);
//   return res;
// };
export default async function ProductPage({
  params,
}: {
  params: { title: string };
}) {
  const URL = `*[_type=="product" && title== "${params.title
    .split("%20")
    .join(" ")}"]{title,image,price}`;
  const data: IProductsDetail[] = await getProductData1(URL);

  return (
    <>
      {data && (
        <>
          <div className="px-32 py-16">
            <div className="relative flex justify-around">
              <div className="relative w-1/2 overflow-hidden">
                <div className="aspect-w-15 aspect-h-16 max-h-full max-w-full">
                  <Image
                    src={urlForImage(data[0].image).url()}
                    alt={data[0].title}
                    fill={true}
                    className="h-full w-full object-contain object-center"
                    quality={100}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <div className="text-2xl font-normal leading-8 tracking-wider text-textBlack lg:text-3xl">
                    {data[0].title}
                  </div>
                  <div className="text-xl font-semibold opacity-30">
                    Product Category
                  </div>
                </div>

                <Quantity_Size />
                <div className="flex items-center gap-4">
                  <div className="flex w-4/5 min-w-[180px] items-center justify-center border-l-2 border-t-2 border-textGrey bg-blackButton p-4 text-base font-semibold text-white lg:w-2/6">
                    <button className="flex flex-row items-center justify-center gap-3">
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
                      <div className="text-center">Add to Cart</div>
                    </button>
                  </div>
                  <div className="min-w-[100px] text-2xl font-bold text-textBlack">{`$ ${data[0].price}.00`}</div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
