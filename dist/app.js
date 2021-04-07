"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _helmet = _interopRequireDefault(require("helmet"));

var _xssClean = _interopRequireDefault(require("xss-clean"));

var _hpp = _interopRequireDefault(require("hpp"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _viewRoutes = _interopRequireDefault(require("./routes/viewRoutes"));

var _errorRoutes = _interopRequireDefault(require("./routes/errorRoutes"));

var _orderRoutes = _interopRequireDefault(require("./routes/orderRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AppError from './utils/appError';
// Start express app
const app = (0, _express.default)();
app.set("view engine", "pug");
app.set("views", _path.default.join(__dirname, "views/pages")); // GLOBAL MIDDLEWARES
// Implement CORS

app.use((0, _cors.default)());
app.options("*", (0, _cors.default)()); // Serving static files

app.use("/static", _express.default.static(_path.default.join(__dirname, "static"))); // // Set security HTTP headers

app.use(_helmet.default.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrc: ["'self'", "'unsafe-inline'"]
  }
})); // Development logging

if (process.env.NODE_ENV === "development") {
  app.use((0, _morgan.default)("dev"));
} // Limit requests from same API


const limiter = (0, _expressRateLimit.default)({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!"
});
app.use("/order", limiter); // Body parser, reading data from body into req.body

app.use(_express.default.json({
  limit: "10kb"
}));
app.use(_express.default.urlencoded({
  extended: true,
  limit: "10kb"
}));
app.use((0, _cookieParser.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
})); // // Data sanitization against XSS

app.use((0, _xssClean.default)()); // // Prevent parameter pollution

app.use((0, _hpp.default)({
  whitelist: ["name", "email", "phone", "checkbox"]
}));
app.use((0, _compression.default)()); // 3) ROUTES

app.use("/", _viewRoutes.default);
app.use("/order", _orderRoutes.default);
app.all("*", _errorRoutes.default);
var _default = app;
exports.default = _default;