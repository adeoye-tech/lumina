"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-sm text-[#6B705C] hover:text-[#344E41]"
          >
            ← Back to store
          </Link>

          <div className="mt-10 rounded-2xl border border-[#E7E3D8] bg-white p-10 text-center">
            <h1 className="text-2xl font-bold text-[#344E41]">
              Your cart is empty
            </h1>

            <p className="mt-3 text-[#6B705C]">
              Add some products to your cart to see them here.
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded-lg bg-[#344E41] px-6 py-3 text-white transition-colors hover:bg-[#6B705C]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-[#6B705C] hover:text-[#344E41]"
        >
          ← Back to store
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-[#344E41]">
          Your Cart
        </h1>

        <div className="mt-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-2xl border border-[#E7E3D8] bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-[#E7E3D8]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-[#344E41]">
                  {item.name}
                </h2>

                <p className="mt-1 text-[#6B705C]">
                  ₦{item.price.toLocaleString()}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E3D8] text-[#344E41] hover:bg-[#E7E3D8]"
                  >
                    −
                  </button>

                  <span className="text-sm font-medium text-[#344E41]">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E7E3D8] text-[#344E41] hover:bg-[#E7E3D8]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 text-sm text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>

              <p className="font-bold text-[#344E41]">
                ₦{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/checkout"
            className="rounded-lg bg-[#344E41] px-6 py-3 font-medium text-white transition-colors hover:bg-[#6B705C]"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}