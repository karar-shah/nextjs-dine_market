import Image from "next/image";
import MobilePopUp from "../sections/MobilePopUp";

export default function Nav() {
  return (
    <>
      <nav className="py-16">
        {/* Desktop view */}
        <div className="hidden lg:flex justify-between items-center tracking-wide">
          {/* Dine market logo */}
          <div>
            <Image
              src="/Logo.webp"
              height={25}
              width={140}
              alt="Dine market logo"
            />
          </div>
          {/* List of links*/}
          <div className="flex items-center justify-between gap-10">
            <div>Female</div>
            <div>Male</div>
            <div>Kids</div>
            <div>All Products</div>
          </div>
          {/* Search bar */}
          <div className="flex border-2 border-gray-300 h-6 px-2 rounded-md items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              id="search"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
                ></path>
              </g>
            </svg>
            <input
              className=" bg-white text-sm rounded-md px-2 max-w-sm"
              type="search"
              name="search"
              placeholder="What you're looking for"
            />
          </div>
          {/* Cart button */}
          <button className="bg-gray-200 rounded-full p-3 relative">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
            <span className="bg-red-600 text-white rounded-full h-4 w-4 text-sm absolute top-0 right-1">
              0
            </span>
          </button>
        </div>
        {/* Mobile view */}
        <MobilePopUp />
      </nav>
    </>
  );
}
