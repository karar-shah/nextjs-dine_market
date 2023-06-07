"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return <div>page </div>;
}
