import { orderStatuses } from "@/data/orderStatuses";
import { OrderStatus } from "@/types/order";

type OrderStatusBadgeProps = {
  status: OrderStatus;
};

export default function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {
  const statusInfo = orderStatuses.find(
    (item) => item.name === status
  );

  if (!statusInfo) {
    return null;
  }

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusInfo.className}`}
    >
      {statusInfo.name}
    </span>
  );
}