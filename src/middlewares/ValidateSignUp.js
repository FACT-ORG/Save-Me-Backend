import Joi from "joi"

const schema = Joi.object().keys({
    fullname: Joi.string().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required()
})

class UserValidator {
    static userSignUpValidator(req, res, next) {
        const result = Joi.validate({ fullname: req.body.fullname, email: req.body.email, password: req.body.password }, schema);
        if (result.error != null) {
            res.status(422).json({
                message: result.error.details[0].message
            })
            return
        }
        next()
    }
}
export default UserValidator