"use client";

import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

type QuickViewModalProps = {
  product: Product;
  onClose: () => void;
};

export default function QuickViewModal({
  product,
  onClose,
}: QuickViewModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-3xl overflow-hidden rounded-2xl bg-[#F7F3EA] shadow-xl md:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-[#344E41] shadow-sm transition hover:bg-[#E7E3D8]"
        >
          ×
        </button>

        <div className="relative h-80 bg-white md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B705C]">
            {product.category}
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#344E41]">
            {product.name}
          </h2>

          <p className="mt-4 text-2xl font-semibold text-[#344E41]">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="mt-5 leading-7 text-[#6B705C]">
            {product.description}
          </p>

          <Link
            href={`/products/${product.id}`}
            onClick={onClose}
            className="mt-8 rounded-xl bg-[#344E41] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#6B705C]"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}