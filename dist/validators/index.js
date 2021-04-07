"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runValidation = void 0;

var _expressValidator = require("express-validator");

const runValidation = (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array().map(err => err.msg)
    });
  }

  next();
};

exports.runValidation = runValidation;