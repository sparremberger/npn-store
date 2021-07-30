import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const protect = asyncHandler(
    async (req: any, res: Response, next: NextFunction) => {
        let token;
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            try {
                token = req.headers.authorization.split(" ")[1];
                const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
                console.log("jwt mus!");
                req.user = await User.findById(decoded.id).select("-password");
                console.log(req.user);
                next();
                return;
            } catch (error) {
                console.error(error);
                res.status(401);
                throw new Error("Não autorizado, token falhou");
            }
        } else {
            token = null;
        }

        if (!token) {
            res.status(401);
            throw new Error("Não autorizado, sem token");
        }

        next();
    }
);

export { protect };
