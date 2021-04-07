"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMainPage = void 0;

var _catchAsync = _interopRequireDefault(require("../utils/catchAsync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @desc      Get main-page
// @route     GET /
// @access    Public
const getMainPage = (0, _catchAsync.default)(async (req, res, next) => {
  res.status(200).render("main-page");
});
exports.getMainPage = getMainPage;