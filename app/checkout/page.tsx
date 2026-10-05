"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";
import { useState } from "react";
import { shippingRates } from "@/data/shipping";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  country: "",
  city: "",
});
const [orderPlaced, setOrderPlaced] = useState(false);
const [orderNumber, setOrderNumber] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = formData.city
  ? shippingRates[formData.city as keyof typeof shippingRates]
  : 0;
  const finalTotal = total + shippingFee;

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#F7F3EA] px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>

          <p className="mt-3 text-gray-500">
            Add some products before checking out.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }
  if (orderPlaced) {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-xl border bg-white p-10 text-center">
        <h1 className="text-3xl font-bold">
          Order Placed Successfully
        </h1>

        <p className="mt-4 text-gray-500">
          Thank you for your order, {formData.name}.
        </p>
        <p className="mt-3 text-sm text-gray-500">
  Order Number:{" "}
  <span className="font-semibold text-gray-900">
    {orderNumber}
  </span>
</p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/cart"
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Back to cart
        </Link>

        <h1 className="text-3xl font-bold text-[#344E41]">
  Checkout
</h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
         <form
 onSubmit={(event) => {
  event.preventDefault();

if (
  !formData.name ||
  !formData.email ||
  !formData.phone ||
  !formData.address ||
  !formData.country ||
  !formData.city
) {
  alert("Please fill in all fields.");
  return;
}

 console.log(formData);

const newOrderNumber = `LUM-${Date.now()}`;

const newOrder = {
  orderNumber: newOrderNumber,
  status: "Processing" as const,

  customer: {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    country: formData.country,
    city: formData.city,
  },
  items: cart,
  subtotal: total,
  shippingFee,
  total: finalTotal,
  createdAt: new Date().toISOString(),
};

addOrder(newOrder);

setOrderNumber(newOrderNumber);
clearCart();
setOrderPlaced(true);
}}
  className="rounded-2xl border border-[#E7E3D8] bg-white p-6"
>
            <h2 className="text-xl font-semibold">
              Delivery Information
            </h2>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium">
                  Full Name
                </label>

               <input
  type="text"
  value={formData.name}
  onChange={(event) =>
    setFormData({
      ...formData,
      name: event.target.value,
    })
  }
  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-gray-500"
  placeholder="Enter your full name"
/>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address
                </label>

                <input
  type="email"
  value={formData.email}
  onChange={(event) =>
    setFormData({
      ...formData,
      email: event.target.value,
    })
  }
  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-gray-500"
  placeholder="Enter your email"
/>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Phone Number
                </label>

                <input
  type="tel"
  value={formData.phone}
  onChange={(event) =>
    setFormData({
      ...formData,
      phone: event.target.value,
    })
  }
  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-gray-500"
  placeholder="Enter your phone number"
/>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Delivery Address
                </label>

               <textarea
  rows={4}
  value={formData.address}
  onChange={(event) =>
    setFormData({
      ...formData,
      address: event.target.value,
    })
  }
  className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-gray-500"
  placeholder="Enter your delivery address"
/>
<div>
  <label className="text-sm font-medium">
    Country
  </label>

  <input
    type="text"
    value={formData.country}
    onChange={(event) =>
      setFormData({
        ...formData,
        country: event.target.value,
      })
    }
    className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-gray-500"
    placeholder="Enter your country"
  />
  <div>
  <label className="text-sm font-medium">
    City
  </label>

  <select
    value={formData.city}
    onChange={(event) =>
      setFormData({
        ...formData,
        city: event.target.value,
      })
    }
    className="mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-gray-500"
  >
    <option value="">Select your city</option>

    {Object.keys(shippingRates).map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>
</div>
                
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#344E41] px-6 py-3 text-white hover:bg-[#6B705C]"
              >
                Place Order
              </button>
            </div>
          </form>

          <div className="h-fit p-6 rounded-2xl border border-[#E7E3D8] bg-white">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            {formData.city && (
  <div className="mt-6 rounded-lg bg-gray-50 p-4">
    <p className="text-sm text-gray-500">
      Delivery Location
    </p>

    <p className="mt-1 font-medium">
      {formData.city}, {formData.country}
    </p>
  </div>
)}

            <div className="mt-6 border-t pt-4 space-y-3">
  <div className="flex justify-between text-sm text-gray-600">
    <span>Subtotal</span>

   <span>
  ₦{finalTotal.toLocaleString()}
</span>
  </div>

  <div className="flex justify-between text-sm text-gray-600">
    <span>Delivery</span>

    <span>
      {shippingFee > 0
        ? `₦${shippingFee.toLocaleString()}`
        : "Select a city"}
    </span>
  </div>

  <div className="flex justify-between border-t pt-3 text-lg font-bold">
    <span>Total</span>

    <span>
      ₦{(total + shippingFee).toLocaleString()}
    </span>
  </div>
</div>
          </div>
        </div>
      </div>
    </main>
  );
}