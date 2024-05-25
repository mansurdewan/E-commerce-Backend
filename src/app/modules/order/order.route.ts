import express from "express";
import { orderController } from "./order.controller";

const route = express.Router();

//order
route.post("/", orderController.creatOrder);

export const orderRoute = route;
