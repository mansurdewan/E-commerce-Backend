import { Request, Response } from "express";
import { OrderProductInterface } from "./order.interface";
import { productOrderSchema } from "./order.validation";
import { orderServices } from "./order.services";

const creatOrder = async (req: Request, res: Response) => {
  try {
    const productOrder: OrderProductInterface = req.body;
    const { value, error } = productOrderSchema.validate(productOrder);
    if (error) {
      res.status(400).send({
        success: false,
        message: "Order not created Joy catch error ",
        error: error.details,
      });
    }
    const result = await orderServices.createOrderIntoDb(value);
    res.send({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Order not created",
      data: error,
    });
  }
};

export const orderController = {
  creatOrder,
};
