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

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
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
    </div>
  );
}