"use client";
import React, { useState } from "react";
import { IProductsDetail } from "../../interface/interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { counterActions } from "@/app/store/slice/CartSlice";

export default function Quantity_Size_AddCart({
  params,
}: {
  params: IProductsDetail;
}) {
  const dispatch = useDispatch();

  const user_size = useSelector((state: RootState) => state.CartSlice.size);

  const handleSize = (curSize: string) => {
    dispatch(counterActions.updateSize(curSize));
  };
  // Selected Size CSS
  const getButtonClassName = (buttonSize: string) => {
    return `min-w-[23px] cursor-pointer rounded-full p-[1px] text-center text-base font-bold text-textGrey hover:shadow-lg hover:shadow-gray-400 ${
      user_size === buttonSize ? "shadow-xl shadow-gray-500" : ""
    }`;
  };
  const value = useSelector((state: RootState) => state.CartSlice.value);
  const allitems = useSelector((state: RootState) => state.CartSlice.items);

  const addCartIncrement = () => {
    if (value > 0) {
      dispatch(
        counterActions.addToCart({
          product: {
            id: params.title,
            price: parseInt(params.price, 10),
            size: user_size,
          },
          quantity: value,
        })
      );
    }
  };

  const smallInc = () => {
    if (value < 5) {
      dispatch(counterActions.smallIncrement(1));
    }
  };
  const smallDec = () => {
    if (value > 0) {
      dispatch(counterActions.smallDecrement(1));
    }
  };
  const decrement = () => {
    console.log("DECDECDEC");
    dispatch(counterActions.removeFromCart(params.title));
  };

  // Sending product to DB
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: params.title,
        quantity: 1,
        size: user_size,
      }),
    });
    const result = await res.json();
    toast(`${params.title} added to cart`);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
        theme="light"
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 ">
          <div className="text-sm font-bold leading-4 tracking-wider text-textBlack">
            SELECT SIZE
          </div>
          {/* Test div for total items in redux */}
          <div>
            <ul>
              {allitems.map((i) => (
                <li
                  key={`${i.id}${i.size}`}
                >{`id:${i.id} quantity${i.quantity} quantity${i.size} quantity${i.totalPrice}`}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3 ">
            <button
              onClick={() => handleSize("XS")}
              className={getButtonClassName("XS")}
            >
              XS
            </button>
            <button
              onClick={() => handleSize("S")}
              className={getButtonClassName("S")}
            >
              S
            </button>
            <button
              onClick={() => handleSize("M")}
              className={getButtonClassName("M")}
            >
              M
            </button>
            <button
              onClick={() => handleSize("L")}
              className={getButtonClassName("L")}
            >
              L
            </button>
            <button
              onClick={() => handleSize("XL")}
              className={getButtonClassName("XL")}
            >
              XL
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 ">
          <div className="text-base font-bold leading-4 tracking-wider text-textBlack">
            Quantity
          </div>
          <div className="flex items-center gap-1">
            <button onClick={smallDec} className="mr-2 cursor-pointer">
              -
            </button>
            {/* <span>{specificItem?.quantity}</span> */}
            <span>{value}</span>
            <button
              onClick={smallInc}
              className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-textBlack"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex w-4/5 min-w-[180px] items-center justify-center border-l-2 border-t-2 border-textGrey bg-blackButton p-4 text-base font-semibold text-white lg:w-2/6">
            <button
              // onClick={handleAddToCart}
              onClick={addCartIncrement}
              className="flex flex-row items-center justify-center gap-3"
            >
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
              <div className="text-center">Add to Cart</div>
            </button>
          </div>
          <div className="min-w-[120px] text-2xl font-bold text-textBlack">{`$ ${params.price}.00`}</div>
        </div>
      </div>
    </>
  );
}
