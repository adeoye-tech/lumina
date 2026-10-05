import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import { OrderProvider } from "@/context/OrderContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "Lumina",
  description: "My online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <CartProvider>
    <OrderProvider>
      <WishlistProvider>
        <Navbar />
        {children}
      </WishlistProvider>
    </OrderProvider>
  </CartProvider>
</body>
    </html>
  );
}