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
exports.productController = void 0;
const product_services_1 = require("./product.services");
const product_validation_1 = require("./product.validation");
const creatProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const { value, error } = product_validation_1.productSchema.validate(product);
        if (error) {
            res.status(400).send({
                success: false,
                message: "Product not created Joy catch and error ",
                error: error.details,
            });
        }
        const result = yield product_services_1.productServices.createProductIntoDb(value);
        res.send({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product not created",
            data: error,
        });
    }
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.productServices.getProductFromDb();
        res.send({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product not not found",
            data: error,
        });
    }
});
const getSpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield product_services_1.productServices.getSpecificProductFromDb(productId);
        res.send({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product not not found",
            data: error,
        });
    }
});
const updateSpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const product = req.body;
    try {
        const { value, error } = product_validation_1.productSchema.validate(product);
        if (error) {
            res.status(400).send({
                success: false,
                message: "Product not update Joy catch and error ",
                error: error.details,
            });
        }
        const result = yield product_services_1.productServices.updateSpecificProductFromDb(productId, value);
        res.send({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product not not found",
            data: error,
        });
    }
});
const deleteSpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield product_services_1.productServices.deleteSpecificProductFromDb(productId);
        res.send({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Product not deleted",
            data: error,
        });
    }
});
exports.productController = {
    creatProduct,
    getProduct,
    getSpecificProduct,
    updateSpecificProduct,
    deleteSpecificProduct,
};
