"use client";
import React, { useState } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

export default function Product() {
  const [loading, setLoading] = useState(false);

  const [item, setItem] = useState({
    name: "Apple AirPods",
    description: "Latest Apple AirPods.",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    quantity: 0,
    price: 999,
  });

  const changeQuantity = (value: number) => {
    // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
    setItem({ ...item, quantity: Math.max(0, value) });
  };

  const onQuantityPlus = () => {
    changeQuantity(item.quantity + 1);
  };

  const onQuantityMinus = () => {
    changeQuantity(item.quantity - 1);
  };
  const onInputChange = (e: { target: { value: string } }) => {
    changeQuantity(parseInt(e.target.value));
  };

  const publishableKey = process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);

  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const checkoutSession = await fetch(
      "http://localhost:3000/api/create-stripe-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: item,
        }),
      }
    );

    console.log("Result------------- in prod page==========", checkoutSession);

    const sessionID = await checkoutSession.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: sessionID,
    });
    if (result?.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  return (
    <div className="mx-auto mt-20 flex max-w-sm">
      <div className="rounded border p-2 shadow-lg ">
        <Image src={item.image} width={300} height={150} alt={item.name} />
        <h2 className="text-2xl">$ {item.price}</h2>
        <h3 className="text-xl">{item.name}</h3>
        <p className="text-gray-500">{item.description}</p>
        <p className="mt-1 text-sm text-gray-600">Quantity:</p>
        <div className="rounded border">
          <button
            onClick={onQuantityMinus}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            -
          </button>
          <input
            type="number"
            className="p-2"
            onChange={onInputChange}
            value={item.quantity}
          />
          <button
            onClick={onQuantityPlus}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            +
          </button>
        </div>
        <p>Total: ${item.quantity * item.price}</p>
        <button
          disabled={item.quantity === 0}
          onClick={createCheckOutSession}
          className="mt-2 block w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-100"
        >
          {loading ? "Processing..." : "Buy"}
        </button>
      </div>
    </div>
  );
}
