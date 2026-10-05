import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";

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
  <OrderProvider>{children}</OrderProvider>
</CartProvider>
      </body>
    </html>
  );
}