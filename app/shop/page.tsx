"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B705C]">
            Our Collection
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#344E41]">
            Shop All Products
          </h1>

          <p className="mt-4 max-w-2xl text-[#6B705C]">
            Explore our collection of carefully selected products for everyday
            living.
          </p>
        </div>

        <div className="mb-10 max-w-2xl">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-[#E7E3D8] bg-white px-5 py-4 text-sm text-[#344E41] outline-none transition-shadow placeholder:text-[#6B705C] focus:border-[#6B705C] focus:shadow-sm"
          />

          <div className="mt-5 flex flex-wrap gap-2">
            {["All", "Shoes", "Bags", "Watches", "Clothes"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                  category === item
                    ? "border-[#344E41] bg-[#344E41] text-white"
                    : "border-[#E7E3D8] bg-[#F7F3EA] text-[#6B705C] hover:border-[#6B705C] hover:text-[#344E41]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </main>
  );
}