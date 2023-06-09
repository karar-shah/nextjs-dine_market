import Image from "next/image";
import MobilePopUp from "../sections/MobilePopUp";
import Link from "next/link";
import NavCart from "../sections/NavCart";

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
          {/* @ts-expect-error Server Component */}
          <NavCart />
        </div>
        {/* Mobile view */}
        <MobilePopUp />
      </nav>
    </>
  );
}
