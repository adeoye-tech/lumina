"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QuickViewModal from "@/components/QuickViewModal";
import { useWishlist } from "@/context/WishlistContext";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#E7E3D8] bg-white transition-shadow duration-200 hover:shadow-lg">
      <div className="relative h-56 bg-[#E7E3D8]">
  <Image
    src={product.image}
    alt={product.name}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    className="object-cover transition-transform duration-200 group-hover:scale-105"
  />
  <button
  onClick={() =>
    isInWishlist(product.id)
      ? removeFromWishlist(product.id)
      : addToWishlist(product)
  }
  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-md transition hover:bg-[#F7F3EA]"
>
  {isInWishlist(product.id) ? "♥" : "♡"}
</button>

  <button
    onClick={() => setShowQuickView(true)}
    className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-medium text-[#344E41] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100"
  >
    Quick View
  </button>
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

        <Link
          href={`/products/${product.id}`}
          className="mt-4 block w-full rounded-lg bg-[#344E41] px-4 py-2.5 text-center text-white transition-colors hover:bg-[#6B705C]"
        >
          View Product
        </Link>
      </div>
      {showQuickView && (
  <QuickViewModal
    product={product}
    onClose={() => setShowQuickView(false)}
  />
)}
    </div>
  );
}