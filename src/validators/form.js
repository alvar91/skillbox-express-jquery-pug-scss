import { check } from "express-validator";

export const contactFormValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("phone")
    .isLength({ min: 10 })
    .withMessage("Phone must be at least 10 characters long"),
  check("checkbox")
    .equals("on")
    .withMessage("Privacy policy must be accepted"),
];
