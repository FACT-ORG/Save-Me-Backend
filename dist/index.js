"use strict";require("babel-polyfill");
var _express = require("express");var _express2 = _interopRequireDefault(_express);
var _dotenv = require("dotenv");var _dotenv2 = _interopRequireDefault(_dotenv);
var _morgan = require("morgan");var _morgan2 = _interopRequireDefault(_morgan);
var _bodyParser = require("body-parser");var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _cors = require("cors");var _cors2 = _interopRequireDefault(_cors);

var _routes = require("./routes");var _routes2 = _interopRequireDefault(_routes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var app = (0, _express2.default)();
_dotenv2.default.config();

app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
(0, _routes2.default)(app);

app.get('/*', function (req, res) {return res.status(200).send({
        message: 'Route not found' });});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Save me listening on " + port);
});