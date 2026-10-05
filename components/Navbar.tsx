import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[#E7E3D8] bg-[#F7F3EA]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[#344E41]"
        >
          Lumina
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/"
            className="text-[#344E41] transition-colors hover:text-[#6B705C]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-[#6B705C] transition-colors hover:text-[#344E41]"
          >
            Shop
          </Link>

          <Link
            href="/cart"
            className="text-[#6B705C] transition-colors hover:text-[#344E41]"
          >
            Cart
          </Link>

          <Link
            href="/wishlist"
            className="text-[#6B705C] transition-colors hover:text-[#344E41]"
          >
            Wishlist
          </Link>

          <Link
            href="/orders"
            className="text-[#6B705C] transition-colors hover:text-[#344E41]"
          >
            My Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}