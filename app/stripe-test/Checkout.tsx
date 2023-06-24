"use client";

import getStripePromise from "../lib/stripe";

const handleCheckout = async () => {
  const product = [
    { product: 1, name: "Sample Product", price: 400, quantity: 2 },
  ];
  const stripe = await getStripePromise();
  const response = await fetch("/api/stripe-session/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
    body: JSON.stringify(product),
  });
  const data = await response.json();
  if (data.session) {
    stripe?.redirectToCheckout({ sessionId: data.session.id });
  }
};

export default function Checkout() {
  return (
    <div>
      <button
        onClick={handleCheckout}
        className="bg-gray-800 p-4 text-base text-white "
      >
        Check out
      </button>
    </div>
  );
}
