import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <div className="px-8 md:px-16 lg:px-32 py-8">
        <h1 className="font-bold text-4xl tracking-wide text-textBlack mb-8 xl:max-w-sm xl:ml-auto text-left">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <div className="flex gap-4 flex-col xl:flex-row xl:gap-16">
          <div className="absolute font-extrabold text-6xl lg:text-9xl text-backgroundGrey -z-10 pt-24 lg:pt-4 ">
            Different from others
          </div>
          {/* left/top part */}
          {/* 4 text boxes */}
          <div className="flex flex-col gap-8 tracking-wider">
            {/* first row */}
            <div className="flex gap-4 sm:gap-8">
              <div>
                <h2 className="font-bold">Using Good Quality Materials</h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <h2 className="font-bold">100% Handmade Products</h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* second row */}
            <div className="flex gap-4 sm:gap-8">
              <div>
                <h2 className="font-bold">Modern Fashion Design</h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <h2 className="font-bold">Discount for Bulk Orders</h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          {/* right/bottom part */}
          <div className="flex gap-4 flex-col md:flex-row md:gap-12">
            <Image
              src={"/feature.webp"}
              height={350}
              width={300}
              alt="feature"
            />
            <div>
              <div className="my-8 tracking-wide text-justify text-gray-800 font-light">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </div>
              <button
                type="submit"
                className="py-3 px-10 bg-gray-950 border-l-2 border-t-2 border-textGrey font-semibold text-sm text-white"
              >
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
