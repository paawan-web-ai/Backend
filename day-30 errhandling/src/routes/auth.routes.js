import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { registerValidation } from "../validation/auth.validator.js";

//we use express-validator to check the data formate of frontend

const authRouter = Router();

authRouter.post("/register", registerValidation, registerUser);

export default authRouter;
