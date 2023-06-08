"use client";

export default function ProductCard({ item }: any) {
  // console.log(item);
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item.title,
      }),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div>
      <div>ProductCard</div>
      <button onClick={handleAddToCart} className="bg-slate-400 p-2">
        Add to Cart
      </button>
    </div>
  );
}
