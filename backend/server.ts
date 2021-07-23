import express, { Request, Response } from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req: Request, res: Response) => {
    res.send("API está rodando");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    return console.log(
        `server is listening in ${NODE_ENV} mode on port ${PORT}`
    );
});
