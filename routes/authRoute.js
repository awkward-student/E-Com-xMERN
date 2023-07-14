import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  testController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing ---------

// Register - Method: POST
router.post("/register", registerController);

// Login - Method: POST
router.post("/login", loginController);

// Forgot Password - Method: POST
router.post("/forgot-password", forgotPasswordController);

// Protected Route Auth - User
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Route Auth - Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Update profile Route - Method: PUT
router.put("/profile", requireSignIn, updateProfileController);

// Test Route
router.get("/test", requireSignIn, isAdmin, testController);

// Orders
router.get("/orders", requireSignIn, getOrdersController);

// All orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
