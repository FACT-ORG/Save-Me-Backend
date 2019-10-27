'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _models = require('../database/models');var _models2 = _interopRequireDefault(_models);
var _HashToken = require('../utils/HashToken');var _HashToken2 = _interopRequireDefault(_HashToken);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

User = _models2.default.User;var

Users = function () {function Users() {_classCallCheck(this, Users);}_createClass(Users, null, [{ key: 'signUp', value: function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(
            req, res) {var _req$body, fullname, email, password, hashedPassword;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_req$body =
                                req.body, fullname = _req$body.fullname, email = _req$body.email, password = _req$body.password;
                                hashedPassword = _HashToken2.default.hashPassword(password);return _context.abrupt('return',
                                User.
                                create({
                                    fullname: fullname,
                                    email: email,
                                    password: hashedPassword }).

                                then(function (userData) {return res.status(201).send({
                                        success: true,
                                        message: 'User successfully created',
                                        userData: userData });}));case 3:case 'end':return _context.stop();}}}, _callee, this);}));function signUp(_x, _x2) {return _ref.apply(this, arguments);}return signUp;}() }]);return Users;}();exports.default =



Users;