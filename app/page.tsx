"use client";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
export default function Home() {
  
  return (
    <main>
     
      <section className="bg-[#E7E3D8] px-6 py-20">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B705C]">
        Curated for everyday living
      </p>

      <h2 className="mt-5 text-5xl font-semibold tracking-tight text-[#344E41] md:text-6xl">
        Discover pieces worth keeping.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B705C]">
        Explore a carefully selected collection of fashion,
        accessories, and everyday essentials designed to fit
        your style.
      </p>
    </div>

    
  </div>
</section>

     <section className="bg-[#F7F3EA] px-6 py-12">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-6 text-2xl font-semibold text-[#344E41]">
      Featured Products
    </h2>

        {products.length > 0 ? (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {products.slice(0, 4).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
) : (
          <p className="text-gray-500">
            No products found.
          </p>
        )}
        </div>
      </section>
    </main>
  );
}