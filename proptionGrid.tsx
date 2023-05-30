import Image from "next/image";
import React from "react";

export default function Promotions() {
  return (
    <>
      <div className="grid grid-rows-6 grid-cols-4 w-full gap-y-4">
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
        <div className="bg-black col-span-4 text-white flex items-center justify-center flex-col text-center">
          <div className="">
            <div className="font-extrabold text-4xl leading-10 tracking-tighter mb-4">
              GET 30% Off
            </div>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>
        {/* Box 3 */}
        <div className="bg-purple-200 row-span-2 col-span-4"></div>
        {/* Box 4 */}
        <div className="bg-gray-400 row-span-2 col-span-4"></div>
      </div>
    </>
  );
}
