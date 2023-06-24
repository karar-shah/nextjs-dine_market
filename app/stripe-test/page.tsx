import React from "react";
import Checkout from "./Checkout";

export default function StripeTest() {
  return (
    <div className="m-4 flex flex-col gap-5 px-8 py-16 font-bold lg:px-16 xl:px-32">
      <div>Stripe Checkout Page</div>
      <Checkout />
    </div>
  );
}
