"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _models = require("../database/models");var _models2 = _interopRequireDefault(_models);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}var

User = _models2.default.User;

var emailCheck = function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {var email, emailExist;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        email = req.body.email;_context.next = 3;return (
                            User.findOne({
                                where: {
                                    email: email } }));case 3:emailExist = _context.sent;if (!


                        emailExist) {_context.next = 6;break;}return _context.abrupt("return",
                        res.status(409).json({
                            message: "Email already exists. Input a different email" }));case 6:


                        next();case 7:case "end":return _context.stop();}}}, _callee, undefined);}));return function emailCheck(_x, _x2, _x3) {return _ref.apply(this, arguments);};}();exports.default =

emailCheck;