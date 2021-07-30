import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel";

// @desc Pega todos os produtos
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc Pega um produto único
// @router GET /api/product/:id
// @access Public
const getProductById = asyncHandler(async (req: Request, res: Response) => {
    // previously... // const product = products.find((p: any) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        //res.status(404).json({ message: "Produto não encontrado" });
        res.status(404);
        throw new Error("Produto não encontrado");
    }
});

export { getProducts, getProductById };
