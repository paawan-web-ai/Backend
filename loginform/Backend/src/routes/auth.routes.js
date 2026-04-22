const express = require("express");
const authRoutes = express.Router();
const authController = require("../controllers/auth.controller");

authRoutes.post("/register", authController.registerController);
authRoutes.post("/login", authController.loginController);
authRoutes.get("/getme", authController.getController);
authRoutes.get("/logout", authController.logoutController);

module.exports = authRoutes;
