import bcrypt from "bcrypt";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Maria da Silva",
        email: "maria@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Calos User",
        email: "carlos@example.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
