import express, { Request, Response } from "express";
import products from "./data/products";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req: Request, res: Response) => {
    res.send("API está rodando");
});

app.get("/api/products/", (req: Request, res: Response) => {
    res.json(products);
});

app.get("/api/products/:id", (req: Request, res: Response) => {
    const product = products.find((p: any) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    return console.log(
        `server is listening in ${NODE_ENV} mode on port ${PORT}`
    );
});
