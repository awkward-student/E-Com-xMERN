import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing ---------

// Register - Method: POST
router.post("/register", registerController);

// Login - Method: POST
router.post("/login", loginController);

// Test Route
router.get("/test", requireSignIn, testController);

export default router;
