"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { counterActions } from "../store/slice/CartSlice";
import { IProductsDetail, cartPageItem } from "../interface/interface";
import { getProductData1 } from "../interface/fetchFunction";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { client } from "../lib/sanityClient";
import { urlForImage } from "@/sanity/lib/image";
import { data } from "autoprefixer";
// change type of use state data/setData

const fetchProductData = async (query: string) => {
  // const query = `*[_type == "product" && title in ["Flex Push Button Bomber","Brushed Raglan Sweatshirt"]]
  // {title, image, price, clothType -> {clothTypeName}}`;
  const result = await client.fetch(query);
  console.log("FetchedData", result);
  return result;
};

const AddToCart = () => {
  const [data, setData] = useState<cartPageItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const reduxItems = useSelector((state: RootState) => state.CartSlice.items);

  useEffect(() => {
    const fetchData = async () => {
      const URL1 = `*[_type == "product" && title in [${reduxItems.map(
        (title) => `"${title.id}"`
      )}]]{title, image, price, clothType -> {clothTypeName}}`;
      // console.log(URL1);
      try {
        const result: cartPageItem[] = await fetchProductData(URL1);
        console.log("Updating dataState", result);
        setData(result);
        setIsLoading(false); // Set isLoading to false after data is fetched
      } catch (error: any) {
        setError(error);
        setIsLoading(false); // Set isLoading to false in case of an error
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  // return (
  //   <div>
  //     <div>Data Here</div>
  //     {/* <div>{data ? data[0].price : ""}</div> */}
  //     {data?.map((cartItems) => (
  //       <div key={`${cartItems.title}`}>

  //       </div>
  //     ))}
  //   </div>
  // );
  // const [posts, setPosts] = useState<IProductsDetail[] | null>(null);
  // const [load, setLoad] = useState<boolean>(true);
  // const itemList = useSelector((state: RootState) => state.CartSlice.items);

  // useEffect(() => {
  //   // This function will be called every time the component mounts
  //   async function fetchPosts() {
  // const URL1 = `*[_type == "product" && title in [${itemList.map(
  //   (title) => `"${title.id}"`
  //     )}]]{title, image, price}`;
  //     const data: IProductsDetail[] = await getProductData1(URL1);
  //     console.log("sanityDATA", data);
  //     setPosts(data);
  //     setLoad(false);
  //   }

  //   fetchPosts();Flex Push Button Bomber
  // }, []);
  // const URL2 = `*[_type == "product" && title in ["Flex Push Button Bomber"]]{title, image, price}`;

  // const { data, error, isLoading } = useSWR(URL2, fetcher);
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // console.log(data);
  return (
    <div>
      {data?.length > 0 ? (
        <div>
          <div className="px-8 lg:px-32">
            <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
            {/* Cart Box */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              <div className=" flex flex-col gap-16">
                {data.map((cartItem) => (
                  <div key={`${cartItem.title}`}>
                    <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                      {/* image */}
                      <div>
                        <Image
                          src={urlForImage(cartItem.image).url()}
                          height={202}
                          width={200}
                          alt="product"
                          className="rounded-md "
                        />
                      </div>
                      {/* product details */}
                      <div className="flex flex-grow flex-col md:gap-4">
                        <div className="flex justify-between gap-32 pt-8 md:pt-0">
                          <div className="text-2xl font-light">
                            {cartItem.title}
                          </div>
                          {/* Delete icon */}
                          <div className="">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="28"
                              width="28"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="py-2 font-semibold text-gray-700">
                          {cartItem.clothType.clothTypeName}
                          {/* Dress */}
                        </div>
                        <div className="font-semibold">
                          Delivery Estimateion
                        </div>
                        <div className="py-2 font-semibold text-yellow-500">
                          5 Working days
                        </div>
                        <div className="flex">
                          <div className="text-xl font-semibold">
                            ${cartItem.price}
                          </div>
                          <div className="ml-auto flex items-center gap-4">
                            {/* Minus */}
                            {/* <button onClick={decrement}> */}
                            <button>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                              </svg>
                            </button>
                            <span>{0}</span>
                            {/* <span>{productQuantity}</span> */}
                            {/* Plus */}
                            {/* <button onClick={increment}> */}
                            <button>
                              <div className="rounded-full border border-gray-900 p-1 text-black">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <defs></defs>
                                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* summary */}
              <div className="flex flex-col gap-6 p-8 lg:gap-8 lg:pt-0">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="flex justify-between">
                  <div>Quantity</div>
                  <div>1 Product</div>
                </div>
                <div className="flex justify-between">
                  <div>Subtotal</div>
                  <div>{`$`}</div>
                </div>
                <button
                  type="submit"
                  className="border-l-2 border-t-2 border-textGrey bg-blackButton px-10 py-3 text-sm font-semibold text-white"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-32 px-8 text-center lg:px-24">
          <h1 className="mb-8 text-4xl font-bold text-textGrey">
            Cart is Empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
