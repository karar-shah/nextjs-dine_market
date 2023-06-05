import Image from "next/image";
import { client } from "../lib/sanityClient";
import { Image as Iimage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";
import { GetServerSideProps, NextPage } from "next";

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type=="staticImage" && title=="Hero r1"]{image}`
  );
  return res;
};

interface IProducts {
  image: Iimage;
}

export default async function Hero2({ data1 }: any) {
  const data: IProducts[] = await getProductData();
  console.log(data1);
  console.log(urlForImage(data[0].image).url());

  return (
    <header className="relative mx-8 flex gap-16 pt-8 lg:my-16 lg:ml-16 lg:mr-0 xl:ml-32 ">
      {/* Left Div */}
      <div className="min-w[450px] flex  flex-col gap-8 lg:gap-12">
        {/* Upper part */}
        <div className="flex h-10 w-28 items-center justify-center rounded-md bg-lighBlue font-semibold text-textSaleBlue ">
          Sale 70%
        </div>
        <div className="text-5xl font-bold tracking-wide text-textBlack lg:text-6xl ">
          An Industrial Take on Streetwear
        </div>
        <div className="text-base font-normal text-textGrey ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </div>
        {/* Black Button */}
        <div className="flex w-4/5 min-w-[160px] items-center justify-center border-l-2 border-t-2 border-textGrey bg-blackButton p-4 text-base font-semibold text-white lg:w-2/6">
          <button className="flex flex-row items-center justify-center">
            <svg
              className="pr-1"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-center">Start Shopping</div>
          </button>
        </div>
        {/* Lower logo part */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Image
            src={"/Featured1.webp"}
            alt="HeroSection Featured1"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured2.webp"}
            alt="HeroSection Featured2"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured3.webp"}
            alt="HeroSection Featured3"
            height={"35"}
            width={"100"}
          />
          <Image
            src={"/Featured4.webp"}
            alt="HeroSection Featured4"
            height={"35"}
            width={"100"}
          />
        </div>
      </div>

      {/* Right Div */}
      <div className="hidden overflow-hidden lg:block">
        {/* Circle */}
        <div className="relative mr-32 h-[600px] w-[600px] rounded-[50%] bg-circleCream ">
          <Image
            className="absolute"
            src={urlForImage(data[0].image).url()}
            alt="HeroSection Girl"
            height={"650"}
            width={"650"}
            quality={75}
            priority={true}
          />
        </div>
      </div>
    </header>
  );
}
