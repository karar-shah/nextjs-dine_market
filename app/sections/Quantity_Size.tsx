"use client";
import React, { useState } from "react";

export default function Quantity_Size() {
  // Quantity State
  const [quantity, setquantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 5) {
      setquantity(quantity + 1);
    }
  };
  // Size State
  const [size, setSize] = useState("M");
  const handleSize = (sizeVal: string) => {
    setSize(sizeVal);
  };
  // Selected Size CSS
  const getButtonClassName = (buttonSize: string) => {
    return `min-w-[23px] cursor-pointer rounded-full p-[1px] text-center text-base font-bold text-textGrey hover:shadow-lg hover:shadow-gray-400 ${
      size === buttonSize ? "shadow-xl shadow-gray-500" : ""
    }`;
  };
  return (
    <div>
      <div className="flex items-center gap-8 ">
        <div className="text-base font-bold leading-4 tracking-wider text-textBlack">
          Quantity
        </div>
        <div className="flex items-center gap-1">
          <button onClick={handleDecrement} className="mr-2 cursor-pointer">
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={handleIncrement}
            className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-textBlack"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="text-sm font-bold leading-4 tracking-wider text-textBlack">
          SELECT SIZE
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
    </div>
  );
}
