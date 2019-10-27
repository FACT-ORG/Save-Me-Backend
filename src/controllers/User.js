import model from '../database/models';
import Helper from "../utils/HashToken"

const { User } = model;

class Users {
    static async signUp(req, res) {
        const { fullname, email, password } = req.body
        const hashedPassword = Helper.hashPassword(password);
        return User
            .create({
                fullname,
                email,
                password: hashedPassword
            })
            .then(userData => res.status(201).send({
                success: true,
                message: 'User successfully created',
                userData
            }))
    }
}
export default Users;