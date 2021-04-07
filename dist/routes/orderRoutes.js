"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _orderController = require("../controllers/orderController");

var _validators = require("../validators");

var _form = require("../validators/form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// validators
const router = _express.default.Router();

router.post("/", _form.contactFormValidator, _validators.runValidation, _orderController.contactForm);
var _default = router;
exports.default = _default;