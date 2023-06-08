import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { client } from "../lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { IProductsDetail } from "../interface/interface";

const getAllProductsData = async () => {
  const res = await client.fetch(`*[_type=="product"]{title,image,price}`);
  return res;
};

export default async function Page() {
  const data: IProductsDetail[] = await getAllProductsData();
  return (
    <>
      <Link href="/products/[title]" as={`/products/fghj`}>
        <button type="button">Dashboard</button>
      </Link>
      <div>
        {data.map((item: IProductsDetail) => (
          <Link
            key={item.title}
            // href={{
            //   pathname: `/products/${item.title}`,
            //   query: item.title,
            // }}
            // href="/products/[title]"
            href={`/products/${item.title}`}
            // as={`/products/${encodeURIComponent(item.title)}`}
          >
            <div>{item.title}</div>
            <div>{item.price}</div>
            <img src={urlForImage(item.image).url()} alt={item.title} />
          </Link>
        ))}
      </div>
    </>
  );
}

// export async function getStaticProps() {

//   return {
//     props: {
//       data,
//     },
//   };
// }
