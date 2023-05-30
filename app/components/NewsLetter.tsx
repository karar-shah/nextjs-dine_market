import React from "react";

export default function NewsLetter() {
  return (
    <div>
      <div className="flex flex-col relative items-center py-24 px-8 lg:py-40 lg:px-32 text-center">
        <div className="absolute font-extrabold text-6xl lg:text-9xl text-backgroundGrey -z-10 pt-24 lg:pt-4 ">
          Newsletter
        </div>
        <div className="mb-4 font-bold text-3xl lg:text-4xl tracking-wide text-textBlack">
          Subscribe Our Newsletter
        </div>
        <div className="mb-8 font-light text-base text-textBlack">
          Get the latest information and promo offers directly
        </div>
        <form className="flex items-center lg:flex-row flex-col">
          <input
            type="email"
            placeholder="Input email address"
            className="mr-2 mb-4 lg:mb-0 py-2 pl-5 pr-28 border-[1px] border-gray-500"
          />
          <button
            type="submit"
            className="py-3 px-10 bg-black border-l-2 border-t-2 border-textGrey font-semibold text-sm text-white"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
