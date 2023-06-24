import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, { apiVersion: "2022-11-15" });

export async function POST(request: NextRequest) {
  const body: [] = await request.json();
  // console.log("Stripe API", body);

  try {
    if (body.length > 0) {
      // console.log(body[0].image);
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [{ shipping_rate: "shr_1NLpmpJ7mHhk7zGBuGglM81s" }],
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.id,
                images: [item.image],
                description: `Size:${item.size}`,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 8,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/payments/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log("Error stripe api", err);
    return NextResponse.json(err.message);
  }
}
