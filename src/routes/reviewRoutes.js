import express from "express";
import { createReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/review", createReviews);

export default router;
