"use client";

import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B705C]">
            Your Favorites
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#344E41]">
            Wishlist
          </h1>

          <p className="mt-4 text-[#6B705C]">
            Products you have saved for later.
          </p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-[#E7E3D8] bg-white"
              >
                <div className="relative h-56 bg-[#E7E3D8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm text-[#6B705C]">
                    {product.category}
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-[#344E41]">
                    {product.name}
                  </h2>

                  <p className="mt-2 font-bold text-[#344E41]">
                    ₦{product.price.toLocaleString()}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 rounded-lg bg-[#344E41] px-4 py-2.5 text-center text-sm text-white transition hover:bg-[#6B705C]"
                    >
                      View Product
                    </Link>

                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="rounded-lg border border-[#E7E3D8] px-4 py-2.5 text-sm text-[#6B705C] transition hover:bg-[#F7F3EA]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#E7E3D8] bg-white px-6 py-16 text-center">
            <p className="text-lg font-medium text-[#344E41]">
              Your wishlist is empty.
            </p>

            <p className="mt-2 text-[#6B705C]">
              Save products you like and find them here later.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-block rounded-lg bg-[#344E41] px-6 py-3 text-sm text-white transition hover:bg-[#6B705C]"
            >
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}