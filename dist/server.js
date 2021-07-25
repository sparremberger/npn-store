"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
dotenv_1.default.config();
db_1.default();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.get("/", (req, res) => {
    res.send("API está rodando");
});
app.use("/api/products", productRoutes_1.default);
app.use(errorMiddleware_1.notFound);
app.use(errorMiddleware_1.errorHandler);
app.listen(PORT, () => {
    return console.log(`server is listening in ${NODE_ENV} mode on port ${PORT}`);
});
//# sourceMappingURL=server.js.map