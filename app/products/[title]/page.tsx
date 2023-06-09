import { IProductsDetail } from "@/app/interface/interface";
import { getProductData1 } from "@/app/interface/fetchFunction";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import Quantity_Size_AddCart from "@/app/sections/Quantity_Size_AddCart";

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
          <div className="py-16 lg:px-32">
            <div className="relative flex ">
              <div className="relative w-1/2 overflow-hidden">
                <div className="aspect-w-15 aspect-h-16 max-h-full max-w-full">
                  <Image
                    src={urlForImage(data[0].image).url()}
                    alt={data[0].title}
                    fill={true}
                    className="h-auto w-auto object-contain object-center"
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
