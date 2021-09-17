import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken";
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
            token: generateToken(user.id),
        });
    } else {
        res.status(401);
        throw new Error("E-mail ou senha inválidos");
    }
});

// @desc Registra um novo usuário
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    //res.send({ email, password }); Com {} envia como json, sem é só o value (sem a key)
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("Usuário já existe");
    }

    const user = await User.create({ name, email, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user.id),
        });
    } else {
        res.status(400);
        throw new Error("Dados inválidos");
    }
});

// @desc Pega o perfil do usuário
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req: any, res: Response) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error("Usuário não encontrado");
    }
});

export { authUser, getUserProfile, registerUser };
