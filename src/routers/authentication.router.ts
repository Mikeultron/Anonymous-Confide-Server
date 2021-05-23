import express from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/authentication.controller";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;