import mongoose, { Schema, Document } from "mongoose";
import { OrderProductInterface } from "./order.interface";

const orderSchema = new Schema<OrderProductInterface>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => /\S+@\S+\.\S+/.test(v),
        message: (props: any) => `${props.value} is not a valid email!`,
      },
    },
    productId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model<OrderProductInterface>(
  "Order",
  orderSchema
);
