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
    static async signIn(req, res) {
          const { email, password } = req.body;
          const user = await User.findOne({ where: { email } });
          if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
          }
          if (!Helper.comparePassword(user.password, password)) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
          }
          const userDetails = {
            email,
          };
          const token = await Helper.generateToken(userDetails);
          return res.status(200).json({
              message: "User logged in",
              token
          });
        } 
    
}
export default Users;