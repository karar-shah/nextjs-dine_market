import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <div>pagee {params.slug}</div>;
}
