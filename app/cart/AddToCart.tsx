"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  CartItem,
  CartList,
  IProductsDetail,
  cartPageItem,
  noUser,
} from "../interface/interface";
import { getProductData1 } from "../interface/fetchFunction";
import React, { useEffect, useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { counterActions } from "../store/slice/CartSlice";

// -----------------------------------------------------------------
const AddToCart = () => {
  const [data, setData] = useState<cartPageItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSql, setDataSql] = useState<CartList | noUser>({ res: [] });
  const [isLoadingSql, setIsLoadingSql] = useState(true);
  const [errorSql, setErrorSql] = useState(null);

  // Redux states
  const dispatch = useDispatch();
  const reduxItems = useSelector((state: RootState) => state.CartSlice.items);
  const totalQuant = useSelector(
    (state: RootState) => state.CartSlice.totalQuantity
  );
  const totalAmount = useSelector(
    (state: RootState) => state.CartSlice.totalAmount
  );

  // Fetch data from Sanity on component mount and whenever reduxItems change
  useEffect(() => {
    if (reduxItems.length > 0) {
      const fetchSanityData = async () => {
        const URL1 = `*[_type == "product" && title in [${reduxItems.map(
          (title) => `"${title.id}"`
        )}]]{title, image, price, clothType -> {clothTypeName}}`;
        try {
          const result: cartPageItem[] = await getProductData1(URL1);
          console.log("Updating dataState", result);
          setData(result);
          setIsLoading(false);
        } catch (error: any) {
          setError(error);
          setIsLoading(false);
        }
      };

      fetchSanityData();
    }
  }, [reduxItems]);

  // Fetch user data from DB on component mount
  useEffect(() => {
    const fetchSqlData = async () => {
      try {
        const resSql = await fetch("/api/cart", {
          method: "GET",
        });
        const sqlData: CartList | noUser = await resSql.json();
        setDataSql(sqlData);
        setIsLoadingSql(false);
        setIsLoading(false);
      } catch (error: any) {
        setErrorSql(error);
        setIsLoadingSql(false);
        setIsLoading(false);
      }
    };

    fetchSqlData();
  }, []);

  // Add items to cart when dataSql changes
  useEffect(() => {
    if (
      "res" in dataSql &&
      typeof dataSql.res[0] !== "string" &&
      dataSql.res.length > 0
    ) {
      for (let i = 0; i < dataSql.res.length; i++) {
        const item = dataSql.res[i] as CartItem;
        const existingItem = reduxItems.find(
          (reduxItem) => reduxItem.id === item.product_id
        );
        if (!existingItem) {
          dispatch(
            counterActions.addToCart({
              product: {
                id: item.product_id,
                price: parseInt(item.price, 10),
                size: item.size,
              },
              quantity: item.quantity,
            })
          );
        }
      }
    }
  }, [dataSql, reduxItems, dispatch]);

  // Fetch updated data for items in Redux on reduxItems change
  useEffect(() => {
    if (reduxItems.length > 0) {
      const fetchUpdatedData = async () => {
        const URL = `*[_type == "product" && title in [${reduxItems.map(
          (title) => `"${title.id}"`
        )}]]{title, image, price, clothType -> {clothTypeName}}`;
        try {
          const updatedData: cartPageItem[] = await getProductData1(URL);
          setData(updatedData);
          setIsLoading(false);
        } catch (error: any) {
          setError(error);
          setIsLoading(false);
        }
      };

      fetchUpdatedData();
    }
  }, [reduxItems]);

  // UI RENDERING
  if (error && errorSql)
    return <div className="mx-16 lg:px-32">Failed to load</div>;
  if (isLoading && isLoadingSql)
    return (
      <div className="mx-16 mt-32 text-center lg:px-24">
        <h1 className="mb-8 text-4xl font-bold text-textGrey">
          Loading Cart...
        </h1>
      </div>
    );

  return (
    <div>
      {data && data.length > 0 ? (
        <div>
          <div className="lg:px- mx-16">
            <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
            {/* Cart Box */}
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              <div className=" flex flex-col gap-16">
                {/* Maping for Cart Items */}
                {data.map((cartItem) => (
                  <div key={`${cartItem.title}`}>
                    <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                      {/* image */}
                      <div className="relative h-[255px] w-[240px] lg:h-[210px] lg:w-[200px]">
                        <Image
                          src={urlForImage(cartItem.image).url()}
                          // height={202}
                          // width={200}
                          fill={true}
                          alt="product"
                          className="rounded-md "
                          quality={50}
                        />
                      </div>
                      {/* product details */}
                      <div className="flex flex-grow flex-col md:gap-4">
                        <div
                          className="min-w[300px] md:min-w[4050px]  lg:min-w[330px] flex justify-between
                        pt-8 md:pt-0 lg:gap-36"
                        >
                          <div className="text-2xl font-light">
                            {cartItem.title}
                          </div>
                          {/* Delete icon */}
                          <button className="">
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
                          </button>
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
                            {/* ${cartItem.price} */}$
                            {
                              reduxItems.find(
                                (item) => item.id === cartItem.title
                              )?.totalPrice
                            }
                          </div>
                          <div className="ml-auto flex items-center gap-4">
                            {/* Minus */}
                            {/* <button onClick={decrement}> */}
                            {/* <button>
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
                            </button> */}
                            <div className="text-black">Qty.</div>
                            <span>
                              {
                                reduxItems.find(
                                  (item) => item.id === cartItem.title
                                )?.quantity
                              }
                            </span>
                            {/* <span>{productQuantity}</span> */}
                            {/* Plus */}
                            {/* <button onClick={increment}> */}
                            {/* <button>
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
                            </button> */}
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
                  <div>{`${totalQuant} Product${
                    totalQuant > 1 ? "s" : ""
                  }`}</div>
                </div>
                <div className="flex justify-between">
                  <div>Subtotal</div>
                  <div>{`$ ${totalAmount}.00`}</div>
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
        <div className="mx-16 mt-32 text-center lg:px-24">
          <h1 className="mb-8 text-4xl font-bold text-textGrey">
            Cart is Empty
          </h1>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
