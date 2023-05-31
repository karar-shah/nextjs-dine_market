import Image from "next/image";
import React from "react";

export default function Promotions() {
  return (
    <>
      <div className="py-16 px-8 lg:px-16 xl:px-32">
        <div className="">
          <div className="text-xs font-bold tracking-widest text-textBlue text-center mb-4">
            PROMOTIONS
          </div>
          <div className="font-bold text-4xl -tracking-tight text-textBlack text-center mb-8">
            Our Promotions Events
          </div>
        </div>
        <div className="grid grid-cols-4 auto-rows-min gap-4 mx-0">
          {/* Box 1 */}
          <div className="bg-gray-300 col-span-4 pt-8 px-8 lg:row-span-1 lg:col-span-2">
            <div className="flex flex-wrap justify-center lg:flex-nowrap">
              <div className="flex flex-col">
                <div className="font-bold text-3xl leading-9 py-1">
                  <div>GET UP TO </div>
                  <span>60%</span>
                </div>
                <div className="font-normal text-xl pb-8 leading-6 tracking-wider">
                  For the <span>summer</span> season
                </div>
              </div>
              <Image
                src={"/promotion1.webp"}
                height={250}
                width={250}
                alt="Promotion 1"
              />
            </div>
          </div>
          {/* Box 2 */}
          <div className="bg-gray-900 col-span-4 text-white flex items-center justify-center flex-col text-center lg:row-span-1 lg:col-span-2 lg:row-start-2">
            <div className="p-8">
              <div className="font-extrabold text-4xl leading-10 tracking-tighter mb-4">
                GET 30% Off
              </div>
              <p>USE PROMO CODE</p>
              <button className="bg-gray-600 px-8 py-2 rounded-md tracking-widest mt-2">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          {/* Box 3 */}
          <div className="bg-purple-200 col-span-4 md:col-span-2 lg:col-span-1 lg:row-span-2 xl:relative">
            <div className="p-4 tracking-wider">
              <div>Flex Sweatshirt</div>
              <div className="text-xl">
                <span className="line-through">$100.00</span>{" "}
                <span className="ml-2 font-semibold"> $75.00</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/promotion2.webp"}
                height={250}
                width={250}
                alt="Flex sweatshirt"
                className="xl:absolute xl:bottom-0"
              />
            </div>
          </div>
          {/* Box 4 */}
          <div className="bg-gray-300 col-span-4 md:col-span-2 lg:col-span-1 lg:row-span-2 xl:relative">
            <div className="p-4 tracking-wider">
              <div>Flex Push Button Bomber</div>
              <div className="text-xl">
                <span className="line-through">$225.00</span>{" "}
                <span className="ml-2 font-semibold"> $190.00</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/promotion3.webp"}
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
