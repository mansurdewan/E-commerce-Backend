import { Request, Response } from "express";
import { productServices } from "./product.services";
import { ProductInterface } from "./product.interface";
import { productSchema } from "./product.validation";

const creatProduct = async (req: Request, res: Response) => {
  try {
    const product: ProductInterface = req.body;
    const { value, error } = productSchema.validate(product);
    if (error) {
      res.status(400).send({
        success: false,
        message: "Product not created Joy catch and error ",
        error: error.details,
      });
    }

    const result = await productServices.createProductIntoDb(value);
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

const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getProductFromDb();
    res.send({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Product not not found",
      data: error,
    });
  }
};


export const productController = {
  creatProduct,
  getProduct,
};
