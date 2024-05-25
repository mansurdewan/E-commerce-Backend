import express, { Request, Response } from "express";
import { productController } from "./product.controller";

const route = express.Router();

route.post("/", productController.creatProduct);
route.get("/", productController.getProduct);
route.get("/:productId", productController.getSpecificProduct);
route.put("/:productId", productController.updateSpecificProduct);

export const productRoute = route;
