import express from "express";
import {
  registerController,
  loginController,
  adminController,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/admin", adminController);

export default router;
