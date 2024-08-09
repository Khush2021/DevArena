import express from "express";
import trimRequest from "trim-request";
import { setProblem, getProblems } from "../controllers/problem.controller.js";

const router = express.Router();

router.route("/setProblem").post(trimRequest.all, setProblem);

router.route("/getProblems").get(trimRequest.all, getProblems);

export default router;
