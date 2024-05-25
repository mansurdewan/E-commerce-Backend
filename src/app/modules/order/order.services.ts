import { OrderProductInterface } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDb = async (order: OrderProductInterface) => {
  const result = orderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDb,
};
