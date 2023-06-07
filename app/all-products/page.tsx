"use client";
import React from "react";
import Nav from "../components/Nav";
import { client } from "../lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { IProductsDetail } from "../interface/interface";
import { useRouter } from "next/navigation";

const getAllProudctsData = async () => {
  const res = await client.fetch(`*[_type=="product"]{title,image,price}`);
  return res;
};

export default async function page() {
  const router = useRouter();
  const data = await getAllProudctsData();
  // console.log(data);

  return (
    <>
      {/* <p>Post: {router.query.slug}</p>; */}
      <button type="button" onClick={() => router.push("/products/fghj")}>
        Dashboard
      </button>
      <div>
        {data.map((item: IProductsDetail) => (
          <div key={item.title}>
            <div>{item.title}</div>
            <div>{item.price}</div>
            <img src={urlForImage(item.image).url()} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  );
}
