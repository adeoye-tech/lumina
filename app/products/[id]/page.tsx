"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = use(params);
  const { addToCart } = useCart();
  const router = useRouter();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F7F3EA] px-6 py-10 text-[#344E41]">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold">
            Product not found
          </h1>

          <Link
            href="/"
            className="mt-4 inline-block text-sm text-[#6B705C] underline hover:text-[#344E41]"
          >
            Back to store
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-[#6B705C] hover:text-[#344E41]"
        >
          ← Back to store
        </Link>

        <div className="mt-8 grid gap-10 rounded-2xl border border-[#E7E3D8] bg-white p-6 md:grid-cols-2">
          <div className="relative h-96 overflow-hidden rounded-xl bg-[#E7E3D8]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-[#6B705C]">
              {product.category}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#344E41]">
              {product.name}
            </h1>

            <p className="mt-4 text-2xl font-bold text-[#344E41]">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="mt-6 leading-7 text-[#6B705C]">
              {product.description}
            </p>

           <button
  onClick={() => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });

    router.push("/cart");
  }}
  className="mt-8 cursor-pointer rounded-lg bg-[#344E41] px-6 py-3 text-white transition-colors hover:bg-[#6B705C]"
>
  Add to Cart
</button>
          </div>
        </div>
      </div>
    </main>
  );
}