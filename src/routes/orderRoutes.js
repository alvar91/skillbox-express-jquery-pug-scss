import express from "express";

import { contactForm } from "../controllers/orderController";

// validators
import { runValidation } from "../validators";
import { contactFormValidator } from "../validators/form";

const router = express.Router();

router.post("/", contactFormValidator, runValidation, contactForm);

export default router;
