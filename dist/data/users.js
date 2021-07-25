"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt_1.default.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Maria da Silva",
        email: "maria@example.com",
        password: bcrypt_1.default.hashSync("123456", 10),
    },
    {
        name: "Calos User",
        email: "carlos@example.com",
        password: bcrypt_1.default.hashSync("123456", 10),
    },
];
exports.default = users;
//# sourceMappingURL=users.js.map