import { ProductInterface } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = (product: ProductInterface) => {
  const result = ProductModel.create(product);
  return result;
};
 
export const productServices = {
  createProductIntoDb,
};
