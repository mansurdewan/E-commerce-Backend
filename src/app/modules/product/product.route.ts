import express, { Request, Response } from "express";
import { productController } from "./product.controller";

const route = express.Router();

route.post("/", productController.creatProduct);
route.get("/", productController.getProduct);


export const productRoute = route;
