import path from "path";
import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

// import AppError from './utils/appError';
import viewRouter from "./routes/viewRoutes";
import errorRouter from "./routes/errorRoutes";
import orderRouter from "./routes/orderRoutes";

// Start express app
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views/pages"));

// GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());

app.options("*", cors());

// Serving static files
app.use("/static", express.static(path.join(__dirname, "static")));

// // Set security HTTP headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
  })
);

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/order", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Data sanitization against XSS
app.use(xss());

// // Prevent parameter pollution
app.use(
  hpp({
    whitelist: ["name", "email", "phone", "checkbox",],
  })
);

app.use(compression());

// 3) ROUTES
app.use("/", viewRouter);
app.use("/order", orderRouter);
app.all("*", errorRouter);

export default app;
