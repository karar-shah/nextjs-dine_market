import { IProductsDetail } from "@/app/interface/interface";
import { getProductData1 } from "@/app/interface/fetchFunction";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import Quantity_Size_AddCart from "./Quantity_Size_AddCart";

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
          <div className="p-8 lg:px-16 xl:px-32">
            <div className="flex flex-col justify-between  gap-8 sm:items-start lg:flex-row lg:items-center">
              {/* Left Div */}
              <div className="flex gap-8">
                {/* Other Images */}
                <div className="flex flex-col gap-4">
                  <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
                    <Image
                      src={urlForImage(data[0].image).url()}
                      alt={data[0].title}
                      fill={true}
                    />
                  </div>
                  <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
                    <Image
                      src={urlForImage(data[0].image).url()}
                      alt={data[0].title}
                      fill={true}
                    />
                  </div>
                  <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
                    <Image
                      src={urlForImage(data[0].image).url()}
                      alt={data[0].title}
                      fill={true}
                    />
                  </div>
                  <div className="relative h-[50px] w-[50px] md:h-[100px] md:w-[100px]">
                    <Image
                      src={urlForImage(data[0].image).url()}
                      alt={data[0].title}
                      fill={true}
                    />
                  </div>
                </div>
                {/* Product Image */}
                <div className="relative h-[270px] w-[250px] md:h-[460px] md:w-[460px] ">
                  <Image
                    src={urlForImage(data[0].image).url()}
                    alt={data[0].title}
                    fill={true}
                    className=""
                    quality={100}
                  />
                </div>
              </div>
              {/* Text and cart button area */}
              <div className="flex flex-col gap-10">
                <div>
                  <div className="text-2xl font-normal leading-8 tracking-wider text-textBlack lg:text-3xl">
                    {data[0].title}
                  </div>
                  <div className="pt-1 text-xl font-semibold opacity-30">
                    Product Category
                  </div>
                </div>
                <Quantity_Size_AddCart params={data[0]} />
                <div></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
