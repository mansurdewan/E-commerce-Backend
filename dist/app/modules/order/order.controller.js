"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_validation_1 = require("./order.validation");
const order_services_1 = require("./order.services");
const creatOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productOrder = req.body;
        const { value, error } = order_validation_1.productOrderSchema.validate(productOrder);
        if (error) {
            res.status(400).send({
                success: false,
                message: "Order not created Joy catch error ",
                error: error.details,
            });
        }
        const result = yield order_services_1.orderServices.createOrderIntoDb(value);
        res.send({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Order not created",
            data: error,
        });
    }
});
exports.orderController = {
    creatOrder,
};
