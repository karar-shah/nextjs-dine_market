import Image from "next/image";
import { client } from "../lib/sanityClient";
import { Image as Iimage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="product" && title=="Promotion l1" || title == "Promotion r1" || title == "Promotion r2"]{image}`
  );
  return res;
};

interface IProducts {
  image: Iimage;
}

export default async function Promotions() {
  const data: IProducts[] = await getProductData();

  return (
    <>
      <div className="px-8 py-16 lg:px-16 xl:px-32">
        <div className="">
          <div className="mb-4 text-center text-xs font-bold tracking-widest text-textBlue">
            PROMOTIONS
          </div>
          <div className="mb-8 text-center text-4xl font-bold -tracking-tight text-textBlack">
            Our Promotions Events
          </div>
        </div>
        <div className="mx-0 grid auto-rows-min grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="col-span-4 bg-gray-300 px-8 pt-8 lg:col-span-2 lg:row-span-1">
            <div className="flex flex-wrap justify-center lg:flex-nowrap">
              <div className="flex flex-col">
                <div className="py-1 text-3xl font-bold leading-9">
                  <div>GET UP TO </div>
                  <span>60%</span>
                </div>
                <div className="pb-8 text-xl font-normal leading-6 tracking-wider">
                  For the <span>summer</span> season
                </div>
              </div>
              <Image
                src={urlForImage(data[0].image).url()}
                height={250}
                width={250}
                alt="Promotion 1"
              />
            </div>
          </div>
          {/* Box 2 */}
          <div className="col-span-4 flex flex-col items-center justify-center bg-gray-900 text-center text-white lg:col-span-2 lg:row-span-1 lg:row-start-2">
            <div className="p-8">
              <div className="mb-4 text-4xl font-extrabold leading-10 tracking-tighter">
                GET 30% Off
              </div>
              <p>USE PROMO CODE</p>
              <button className="mt-2 rounded-md bg-gray-600 px-8 py-2 tracking-widest">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          {/* Box 3 */}
          <div className="col-span-4 bg-purple-200 md:col-span-2 lg:col-span-1 lg:row-span-2 xl:relative">
            <div className="p-4 tracking-wider">
              <div>Flex Sweatshirt</div>
              <div className="text-xl">
                <span className="line-through">$100.00</span>{" "}
                <span className="ml-2 font-semibold"> $75.00</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={urlForImage(data[1].image).url()}
                height={250}
                width={250}
                alt="Flex sweatshirt"
                className="xl:absolute xl:bottom-0"
              />
            </div>
          </div>
          {/* Box 4 */}
          <div className="col-span-4 bg-gray-300 md:col-span-2 lg:col-span-1 lg:row-span-2 xl:relative">
            <div className="p-4 tracking-wider">
              <div>Flex Push Button Bomber</div>
              <div className="text-xl">
                <span className="line-through">$225.00</span>{" "}
                <span className="ml-2 font-semibold"> $190.00</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={urlForImage(data[2].image).url()}
                height={250}
                width={250}
                className="xl:absolute xl:bottom-0"
                alt="Flex sweatshirt"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
