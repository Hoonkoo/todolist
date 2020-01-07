"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _hpp = _interopRequireDefault(require("hpp"));

var _morgan = _interopRequireDefault(require("morgan"));

var _api = _interopRequireDefault(require("./api"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var _process$env = process.env,
    PORT = _process$env.PORT,
    env = _process$env.NODE_ENV;
var port = env === "production" ? 80 : PORT;
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _hpp["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use("/api", _api["default"]);
app.listen(port, function () {
  console.log("server connected %s", port);
});