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
  const searchProduct = req.query.searchTerm;
  try {
    if (searchProduct) {
      const result = await productServices.getSearchProductFromDb(
        searchProduct
      );
      res.send({
        success: true,
        message: `Products matching search term ${searchProduct} fetched successfully!`,
        data: result,
      });
    } else {
      const result = await productServices.getProductFromDb();
      res.send({
        success: true,
        message: " ",
        data: result,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Product not not found",
      data: error,
    });
  }
};

const getSpecificProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    const result = await productServices.getSpecificProductFromDb(productId);
    res.send({
      success: true,
      message: "Product fetched successfully!",
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

const updateSpecificProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const product: ProductInterface = req.body;
  try {
    const { value, error } = productSchema.validate(product);
    if (error) {
      res.status(400).send({
        success: false,
        message: "Product not update Joy catch and error ",
        error: error.details,
      });
    }

    const result = await productServices.updateSpecificProductFromDb(
      productId,
      value
    );
    res.send({
      success: true,
      message: "Product updated successfully!",
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

const deleteSpecificProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  try {
    const result = await productServices.deleteSpecificProductFromDb(productId);
    res.send({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Product not deleted",
      data: error,
    });
  }
};

export const productController = {
  creatProduct,
  getProduct,
  getSpecificProduct,
  updateSpecificProduct,
  deleteSpecificProduct,
};
