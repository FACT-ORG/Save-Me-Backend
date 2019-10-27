'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _User = require('../controllers/User');var _User2 = _interopRequireDefault(_User);
var _EmailCheck = require('../middlewares/EmailCheck');var _EmailCheck2 = _interopRequireDefault(_EmailCheck);
var _ValidateSignUp = require('../middlewares/ValidateSignUp');var _ValidateSignUp2 = _interopRequireDefault(_ValidateSignUp);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =

function (app) {

    app.get('/api/v1', function (req, res) {return res.status(200).send({
            message: 'Welcome to the Save Me API!' });});


    // API route for user to signup
    app.post('/api/v1/auth/signup', _ValidateSignUp2.default.userSignUpValidator, _EmailCheck2.default, _User2.default.signUp);
};