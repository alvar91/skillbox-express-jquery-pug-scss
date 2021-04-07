"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorPage = void 0;

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @desc      Get error-page
// @route     GET /
// @access    Public
const getErrorPage = (0, _catchAsync.default)(async (req, res, next) => {
  res.status(404).render("error-page");
});
exports.getErrorPage = getErrorPage;