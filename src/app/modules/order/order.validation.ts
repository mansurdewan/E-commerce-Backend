import Joi from "joi";

export const productOrderSchema = Joi.object({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().integer().min(1).required(),
});
