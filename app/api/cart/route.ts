import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/app/lib/drizzle";
import { v4 } from "uuid";
import { cookies } from "next/dist/client/components/headers";

export const GET = async (request: Request) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Some wrong in GET request" });
  }
};

export const POST = async (request: Request) => {
  const req = await request.json();
  console.log("######", req);
  const uid = v4();
  const setCookies = cookies();
  const user_id_cookie = cookies().get("user_id");

  if (!user_id_cookie) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Some wrong in POST request" });
  }
};
