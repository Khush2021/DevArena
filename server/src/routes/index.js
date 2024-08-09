import express from "express";
import problemRoutes from "./problem.route.js";
import userRoutes from "./user.route.js";

const router = express.Router();

router.use("/problem", problemRoutes);
router.use("/user", userRoutes);

export default router;
