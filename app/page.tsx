import Features from "./components/Features";
import Hero2 from "./components/Hero2";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import { client } from "./lib/sanityClient";
import { Image as Iimage } from "sanity";
import { IProducts, IProductsDetail } from "./interface/interface";

export const getProductData = async (graqQury: string) => {
  const res = await client.fetch(graqQury);
  return res;
};

const findImage = (data: IProducts[], title: string): Iimage | undefined => {
  for (const element of data) {
    if (element.title === title) {
      return element.image;
    }
  }
};

export default async function Home() {
  2;
  const data: IProducts[] = await getProductData(
    `*[_type=="staticImage"]{title,image}`
  );
  const dataProducts: IProductsDetail[] = await getProductData(
    `*[_type=="product"]{title,price,image}`
  );
  return (
    <div>
      <Nav />
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
