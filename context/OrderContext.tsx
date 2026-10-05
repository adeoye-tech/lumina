"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Order } from "@/types/order";

type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);

export function OrderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders, isLoaded]);

  const addOrder = (order: Order) => {
    setOrders((currentOrders) => [
      ...currentOrders,
      order,
    ]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderProvider");
  }

  return context;
}