import express, { Request, Response, NextFunction } from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";

dotenv.config();

connectDB();

const app = express();

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

app.listen(process.env.PORT, () => {
    return console.log(
        `server is listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    );
});
