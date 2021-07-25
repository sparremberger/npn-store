import express, { Request, Response, NextFunction } from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.get("/", (req: Request, res: Response) => {
    res.send("API está rodando");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
    return console.log(
        `server is listening in ${NODE_ENV} mode on port ${PORT}`
    );
});
