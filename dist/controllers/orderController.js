"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactForm = void 0;

var _catchAsync = _interopRequireDefault(require("./../utils/catchAsync"));

var _email = _interopRequireDefault(require("./../utils/email"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @desc      Send order to mail
// @route     POST /
// @access    Public
const contactForm = (0, _catchAsync.default)(async (req, res, next) => {
  const newOrder = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  await new _email.default(newOrder).sendWelcome();
  res.json({
    message: `Email has been sent to email`
  });
});
exports.contactForm = contactForm;