import Features from "./components/Features";
import Hero2 from "./components/Hero2";
import NewsLetter from "./components/NewsLetter";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import { getProductData1, findImage } from "./interface/fetchFunction";
import { IProducts, IProductsDetail } from "./interface/interface";
import React from "react";

export default async function Home() {
  2;
  const data: IProducts[] = await getProductData1(
    `*[_type=="staticImage"]{title,image}`
  );
  const dataProducts: IProductsDetail[] = await getProductData1(
    `*[_type=="product"]{title,price,image}`
  );
  return (
    <div>
      <ProductCard item={data[0]} />
      <Hero2 imageData={findImage(data, "Hero r1")} />
      <Promotions
        imageData={[
          findImage(data, "Promotion l1"),
          findImage(data, "Promotion r1"),
          findImage(data, "Promotion r2"),
        ]}
      />
      {/* @ts-expect-error Server Component */}
      <Products imageData={dataProducts} />
      <Features imageData={findImage(data, "Feature r1")} />
      <NewsLetter />
    </div>
  );
}
