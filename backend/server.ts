import express, { Request, Response } from "express";
import products from "./data/products";

const app = express();
const port = 5000;

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

app.listen(port, () => {
    return console.log(`server is listening on port ${port}`);
});
