import express from "express";
import trimRequest from "trim-request";
import { login, logout } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/login").post(trimRequest.all, login);
router.route("/logout").post(trimRequest.all, logout);

export default router;
