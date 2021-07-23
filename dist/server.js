"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./data/products"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
db_1.default();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.get("/", (req, res) => {
    res.send("API está rodando");
});
app.get("/api/products/", (req, res) => {
    res.json(products_1.default);
});
app.get("/api/products/:id", (req, res) => {
    const product = products_1.default.find((p) => p._id === req.params.id);
    res.json(product);
});
app.listen(PORT, () => {
    return console.log(`server is listening in ${NODE_ENV} mode on port ${PORT}`);
});
//# sourceMappingURL=server.js.map