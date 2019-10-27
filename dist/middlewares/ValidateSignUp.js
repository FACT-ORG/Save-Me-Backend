"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _expressValidator = require("express-validator");
var _joi = require("joi");var _joi2 = _interopRequireDefault(_joi);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var schema = _joi2.default.object().keys({
    fullname: _joi2.default.string().alphanum().min(3).max(30).required(),
    password: _joi2.default.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: _joi2.default.string().email({ minDomainAtoms: 2 }).required() });var


UserValidator = function () {function UserValidator() {_classCallCheck(this, UserValidator);}_createClass(UserValidator, null, [{ key: "userSignUpValidator", value: function userSignUpValidator(
        req, res, next) {
            var result = _joi2.default.validate({ fullname: req.body.fullname, email: req.body.email, password: req.body.password }, schema);
            res.status(422).json({
                message: result.error.details[0].message });

            next();
        } }]);return UserValidator;}();exports.default =

UserValidator;