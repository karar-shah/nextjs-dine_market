import Image from "next/image";
import MobilePopUp from "../sections/MobilePopUp";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="py-16 lg:px-24 xl:px-32">
        {/* Desktop view */}
        <div className="hidden items-center justify-between tracking-wide lg:flex">
          {/* Dine market logo */}
          <Link href="/">
            <Image
              src="/Logo.webp"
              height={25}
              width={140}
              alt="Dine market logo"
            />
          </Link>
          {/* List of links*/}

          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link href="/female">Female</Link>
            </li>
            <li>
              <Link href="/male">Male</Link>
            </li>
            <li>
              <Link href="/kids">Kids</Link>
            </li>
            <li>
              <Link href="/all-products">All Products</Link>
            </li>
          </ul>

          {/* Search bar */}
          <div className="flex h-6 items-center rounded-md border-2 border-gray-300 px-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
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
              className=" max-w-sm rounded-md bg-white px-2 text-sm"
              type="search"
              name="search"
              placeholder="What you're looking for"
            />
          </div>
          {/* Cart button */}
          <button className="relative rounded-full bg-gray-200 p-3">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="22"
              width="22"
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
            <span className="absolute right-1 top-0 h-4 w-4 rounded-full bg-red-600 text-sm text-white">
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
