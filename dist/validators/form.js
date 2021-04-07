"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactFormValidator = void 0;

var _expressValidator = require("express-validator");

const contactFormValidator = [(0, _expressValidator.check)("name").not().isEmpty().withMessage("Name is required"), (0, _expressValidator.check)("phone").isLength({
  min: 10
}).withMessage("Phone must be at least 10 characters long"), (0, _expressValidator.check)("checkbox").equals("on").withMessage("Privacy policy must be accepted")];
exports.contactFormValidator = contactFormValidator;