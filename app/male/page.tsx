import React from "react";
import Link from "next/link";
import { client } from "../lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { IProductsDetail } from "../interface/interface";
import Image from "next/image";

const getAllProductsData = async () => {
  const res = await client.fetch(`*[_type == "product" && 
  (category[0] -> categoryName == "male" || category[1] -> categoryName == "male")
  ]{title,image,price}`);
  return res;
};

export default async function Page() {
  const data: IProductsDetail[] = await getAllProductsData();
  return (
    <>
      <div className="grid auto-cols-max grid-cols-1 gap-6 px-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item: IProductsDetail) => (
          <Link key={item.title} href={`/products/${item.title}`}>
            <Image
              src={urlForImage(item.image).url()}
              alt={item.title}
              height={330}
              width={280}
              quality={100}
            />
            <div className="py-4 text-xl font-semibold">{item.title}</div>
            <div className="pb-4 text-xl font-bold">${item.price}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
