import jwt from "jsonwebtoken";

// esse non-null assertion operator ! é a melhor coisa que já inventaram
const generateToken = (id: any) => {
    return jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: "30d" });
};

export default generateToken;
