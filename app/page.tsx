import Features from "./components/Features";
import FetchProducts from "./components/FetchProducts";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import { client } from "./lib/sanityClient";
import { Image as Iimage } from "sanity";
import { IProducts } from "./interface/interface";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="staticImage"]{title,image}`);
  return res;
};

const findImage = (data: IProducts[], title: string) => {
  for (const element of data) {
    if (element.title === title) {
      return element.image;
    }
  }
};

export default async function Home() {
  const data: IProducts[] = await getProductData();
  // console.log(data);
  console.log(findImage(data, "Hero r1"));
  return (
    <div>
      <Nav />
      <Hero2 imageData={findImage(data, "Hero r1")} />
      <Promotions imageData={[data[3], data[0], data[2]]} />
      {/* @ts-expect-error Server Component */}
      <Products />
      <Features imageData={data[1]} />
      <NewsLetter />
      <Footer />
    </div>
  );
}
