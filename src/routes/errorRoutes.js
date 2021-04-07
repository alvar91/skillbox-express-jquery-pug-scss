import express from "express";
import { getErrorPage } from "../controllers/errorViewController";

const router = express.Router();

router.get("*", getErrorPage);

export default router;
