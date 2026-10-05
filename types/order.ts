import { orderStatuses } from "@/data/orderStatuses";

export type OrderStatus =
  (typeof orderStatuses)[number]["name"];

export type Order = {
  orderNumber: string;
  status: OrderStatus;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    city: string;
  };
  items: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  subtotal: number;
  shippingFee: number;
  total: number;
  createdAt: string;
};