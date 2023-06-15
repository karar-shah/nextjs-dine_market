import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/app/lib/drizzle";
import { v4 } from "uuid";
import { cookies } from "next/dist/client/components/headers";
import { eq } from "drizzle-orm";

// GET REQUEST
export const GET = async (request: NextRequest) => {
  const uid = cookies().get("user_id")?.value;
  // const req = request.nextUrl;
  // const uid = req.searchParams.get("user_id");
  console.log(uid);
  if (uid) {
    try {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, uid));
      console.log(res);
      return NextResponse.json({ res });
    } catch (error) {
      // console.log(error);
      return NextResponse.json({ res: ["Some wrong in GET request"] });
    }
  } else {
    return NextResponse.json({ res: ["no record found"] });
  }
};

// POST REQUEST
export const POST = async (request: NextRequest) => {
  const req = await request.json();
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
        quantity: req.quantity,
        size: req.size,
        user_id: cookies().get("user_id")?.value as string,
        price: req.price,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Some wrong in POST request" });
  }
};
