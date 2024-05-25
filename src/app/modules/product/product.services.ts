import { ProductInterface } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = (product: ProductInterface) => {
  const result = ProductModel.create(product);
  return result;
};
const getProductFromDb = () => {
  const result = ProductModel.find({});
  return result;
};

const getSpecificProductFromDb = (productId: string) => {
  const result = ProductModel.findOne({ _id: productId });
  return result;
};

const updateSpecificProductFromDb = async (
  productId: string,
  value: ProductInterface
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, value, {
    new: true,
  });
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductFromDb,
  getSpecificProductFromDb,
  updateSpecificProductFromDb,
};
