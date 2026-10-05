"use client";

import Link from "next/link";
import { use } from "react";
import { useOrders } from "@/context/OrderContext";
import OrderStatusBadge from "@/components/OrderStatusBadge";

type OrderPageProps = {
  params: Promise<{
    orderNumber: string;
  }>;
};

export default function OrderDetailsPage({
  params,
}: OrderPageProps) {
  const { orderNumber } = use(params);
  const { orders } = useOrders();

  const order = orders.find(
    (item) => item.orderNumber === orderNumber
  );

  if (!order) {
    return (
     <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/orders"
            className="text-sm text-[#6B705C] hover:text-black"
          >
            ← Back to orders
          </Link>

          <div className="mt-8 rounded-xl border bg-white p-10 text-center">
            <h1 className="text-2xl font-bold">
              Order not found
            </h1>

            <p className="mt-3 text-[#6B705C]">
              We couldn't find this order.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
   <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/orders"
         className="text-sm text-[#6B705C] hover:text-[#344E41]"
        >
          ← Back to orders
        </Link>

        <div className="mt-8 rounded-2xl border border-[#E7E3D8] bg-white p-6">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <p className="text-sm text-[#6B705C]">
                Order Number
              </p>

             <h1 className="text-2xl font-bold text-[#344E41]">
                {order.orderNumber}
              </h1>
            </div>

           <div className="text-right">
  <p className="text-sm text-[#6B705C]">
    Order Status
  </p>

  <div className="mt-1">
    <OrderStatusBadge status={order.status} />
  </div>

  <p className="mt-2 text-sm text-[#6B705C]">
    {new Date(order.createdAt).toLocaleDateString()}
  </p>
</div>
          </div>

          <div className="mt-8">
           <h2 className="text-xl font-semibold text-[#344E41]">
              Items
            </h2>

            <div className="mt-4 space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-4"
                >
                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-[#6B705C]">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium text-[#344E41]">
                    ₦
                    {(
                      item.price * item.quantity
                    ).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#344E41]">
              Delivery Information
            </h2>

            <div className="mt-4 space-y-1 text-[#6B705C]">
              <p>{order.customer.name}</p>
              <p>{order.customer.phone}</p>
              <p>{order.customer.email}</p>
              <p>{order.customer.address}</p>
              <p>
                {order.customer.city},{" "}
                {order.customer.country}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="space-y-3">
              <div className="flex justify-between text-[#6B705C]">
                <span>Subtotal</span>

                <span>
                  ₦{order.subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between text-[#6B705C]">
                <span>Delivery</span>

                <span>
                  ₦{order.shippingFee.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between border-t pt-3 text-lg font-bold text-[#344E41]">
                <span>Total</span>

                <span>
                  ₦{order.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}