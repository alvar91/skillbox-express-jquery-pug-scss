"use strict";

require("@babel/polyfill");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅  Listening on: http://localhost:${PORT}`);

_app.default.listen(PORT, handleListening);