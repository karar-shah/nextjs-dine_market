import Image from "next/image";
import { client } from "../lib/sanityClient";
import { Image as Iimage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="product" && title=="Feature r1"]{image}`
  );
  return res;
};

interface IProducts {
  image: Iimage;
}

export default async function Features() {
  const data: IProducts[] = await getProductData();

  return (
    <>
      <div className="px-8 py-8 md:px-16 lg:px-32">
        <h1 className="mb-8 text-left text-4xl font-bold tracking-wide text-textBlack xl:ml-auto xl:max-w-xl xl:text-5xl">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
          {/* left/top part */}
          {/* 4 text boxes */}
          <div className="relative flex flex-col gap-8 tracking-wider xl:max-w-lg">
            <div className="absolute -z-10 pt-24 text-8xl font-extrabold text-backgroundGrey lg:pt-4 lg:text-9xl ">
              Different from others
            </div>
            {/* first row */}
            <div className="flex gap-4 pt-8 sm:gap-8">
              <div>
                <h2 className="text-lg font-semibold text-textBlack">
                  Using Good Quality Materials
                </h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-textBlack">
                  100% Handmade Products
                </h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* second row */}
            <div className="flex gap-4 sm:gap-8">
              <div>
                <h2 className="text-lg font-semibold text-textBlack">
                  Modern Fashion Design
                </h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-textBlack">
                  Discount for Bulk Orders
                </h2>
                <p className="py-4 text-gray-700 ">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          {/* right/bottom part */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-12">
            <Image
              src={urlForImage(data[0].image).url()}
              height={350}
              width={300}
              alt="feature"
              className="h-full w-full object-cover"
            />
            <div>
              <div className="my-8 text-justify font-light tracking-wide text-gray-800 xl:max-w-md">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </div>
              <button
                type="submit"
                className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white"
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
