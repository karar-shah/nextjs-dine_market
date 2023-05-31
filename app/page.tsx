import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero2 />
      <Promotions />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}
