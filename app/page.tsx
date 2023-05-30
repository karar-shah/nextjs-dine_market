import Hero1 from "./components/Hero1";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Promotions from "./components/Promotions";

export default function Home() {
  return (
    <div className="mx-8 lg:mx-32">
      <Nav />
      {/* <Hero1 /> */}
      <Promotions />
      <Products />
    </div>
  );
}
