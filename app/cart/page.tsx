import AddToCart from "./AddToCart";

export default function CartPage() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <AddToCart />;
    </div>
  );
}
