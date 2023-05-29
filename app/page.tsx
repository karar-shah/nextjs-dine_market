import Hero1 from "./components/Hero1";
import Nav from "./components/Nav";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="mx-32">
      <Nav />
      <Hero1 />
      <Products />
      <NewsLetter />
    </div>
  );
}
