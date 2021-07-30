import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

// @desc Autentica usuário e recebe token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    //res.send({ email, password }); Com {} envia como json, sem é só o value (sem a key)
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null,
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

export { authUser };
