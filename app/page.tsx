import Features from "./components/Features";
import FetchProducts from "./components/FetchProducts";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import { client } from "./lib/sanityClient";

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="product" && _id=="b704ea69-06bc-4d1b-b303-146f5a8378ab"]`
  );
  return res;
};

interface IProducts {
  title: string;
  price: string;
}

export default async function Home() {
  const data: IProducts[] = await getProductData();
  console.log(data);
  return (
    <div>
      <Nav />
      {data.map((items) => (
        <div key={items.title}>
          <div>Page.tsx</div>
          <div>{items.title}</div>
          <div>{items.price}</div>
        </div>
      ))}
      {/* @ts-expect-error Server Component */}
      <FetchProducts />
      <Hero2 />
      <Promotions />
      <Products />
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
}
