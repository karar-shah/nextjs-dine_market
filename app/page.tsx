import Hero1 from "./components/Hero1";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="mx-32">
      <Nav />
      <Hero1 />
      {/* <Hero /> */}
    </div>
  );
}
