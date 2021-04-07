import express from "express";
import { getMainPage } from "../controllers/viewsController";

const router = express.Router();

router.get("/", getMainPage);

export default router;
