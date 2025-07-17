import express from "express";
import { getWeatherController } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/:city", getWeatherController);

export default router;