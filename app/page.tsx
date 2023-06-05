import Features from "./components/Features";
import FetchProducts from "./components/FetchProducts";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import { client } from "./lib/sanityClient";

export default async function Home() {
  return (
    <div>
      <Nav />
      {/* <FetchProducts /> */}
      {/* @ts-expect-error Server Component */}
      <Hero2 data1="!!!!!!!!!!!!!!new" />
      {/* @ts-expect-error Server Component */}
      <Promotions />
      {/* @ts-expect-error Server Component */}
      <Products />
      {/* @ts-expect-error Server Component */}
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
}
