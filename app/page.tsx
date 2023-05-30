import Hero2 from "./components/Hero2";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="">
      {/* <Nav /> */}
      <Hero2 />
      <Products />
      <NewsLetter />
    </div>
  );
}
