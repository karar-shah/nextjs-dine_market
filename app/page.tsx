import Features from "./components/Features";
import Hero2 from "./components/Hero2";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div>
      <Hero2 />
      <Promotions />
      <Products />
      <Features />
      <NewsLetter />
    </div>
  );
}
