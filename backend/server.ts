import express, { Request, Response, NextFunction } from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";
import bodyParser from "body-parser";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

// ESSES DOIS e somente esses dois precisam ir antes das rotas, caso contrário o req.body vai vazio
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // essencial pra poder ler o req.body

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("API está rodando");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    return console.log(
        `server is listening in ${NODE_ENV} mode on port ${PORT}`
    );
});
