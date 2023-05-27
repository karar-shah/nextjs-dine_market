import Hero1 from "./components/Hero1";
import Nav from "./components/Nav";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="mx-32">
      <Nav />
      <Hero1 />
      <Products />
    </div>
  );
}
