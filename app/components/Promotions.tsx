import Image from "next/image";
import React from "react";

export default function Promotions() {
  return (
    <>
      <div className="">
        <div className="text-xs font-bold tracking-widest text-textBlue text-center mb-4">
          PROMOTIONS
        </div>
        <div className="font-bold text-4xl -tracking-tight text-textBlack text-center mb-8">
          Our Promotions Events
        </div>
      </div>
      <div className="grid grid-cols-4 auto-rows-min gap-y-4 mx-6">
        {/* Box 1 */}
        <div className="bg-gray-300 col-span-4 pt-8 px-8">
          <div className="flex flex-wrap justify-center">
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
        <div className="bg-gray-900 col-span-4 text-white flex items-center justify-center flex-col text-center">
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
        <div className="bg-purple-200 col-span-4">
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
            />
          </div>
        </div>
        {/* Box 4 */}
        <div className="bg-gray-300 col-span-4">
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
              alt="Flex sweatshirt"
            />
          </div>
        </div>
      </div>
    </>
  );
}
