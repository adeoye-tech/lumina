"use client";

import Link from "next/link";
import { useOrders } from "@/context/OrderContext";

export default function OrdersPage() {
  const { orders } = useOrders();

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-[#6B705C] hover:text-[#344E41]"
        >
          ← Back to store
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-[#344E41]">
  My Orders
</h1>

        {orders.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#E7E3D8] bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-[#344E41]">
              No orders yet
            </h2>

            <p className="mt-3 text-[#6B705C]">
              Your completed orders will appear here.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {orders.map((order) => (
              <Link
  key={order.orderNumber}
  href={`/orders/${order.orderNumber}`}
  className="block rounded-2xl border border-[#E7E3D8] bg-white p-6 transition-shadow hover:shadow-md"
>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#6B705C]">
                      Order Number
                    </p>

                   <p className="font-semibold text-[#344E41]">
                      {order.orderNumber}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-[#6B705C]">
                      Total
                    </p>

                   <p className="font-bold text-[#344E41]">
                      ₦{order.total.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4 text-sm text-[#6B705C]">
                  <p>
                    {order.items.length} item
                    {order.items.length !== 1 ? "s" : ""}
                  </p>

                  <p className="mt-1">
                    Delivered to {order.customer.city},{" "}
                    {order.customer.country}
                  </p>

                  <p className="mt-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}