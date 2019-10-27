import { check, validationResult } from 'express-validator';
import Joi from "joi"

const schema = Joi.object().keys({
    fullname: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required()
})

class UserValidator {
    static userSignUpValidator(req, res, next) {
        const result = Joi.validate({ fullname: req.body.fullname, email: req.body.email, password: req.body.password }, schema);
        res.status(422).json({
            message: result.error.details[0].message
        })
        next();
    }
}
export default UserValidator