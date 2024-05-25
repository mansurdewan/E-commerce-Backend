import { Request, Response } from "express";
import { productServices } from "./product.services";
import { ProductInterface } from "./product.interface";
import { productSchema } from "./product.validation";

const creatProduct = async (req: Request, res: Response) => {
  try {
    const product: ProductInterface = req.body;
    const result = await productServices.createProductIntoDb(product);
    res.send({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Product not created",
      data: error,
    });
  }
};

export const productController = {
  creatProduct,
};
