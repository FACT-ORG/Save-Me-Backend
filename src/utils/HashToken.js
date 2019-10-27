import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"

dotenv.config()
class Helper {
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }

  static generateToken(id) {
    const token = jwt.sign({ userInfo: id }, process.env.SECRET, { expiresIn: '7d' });
    return token;
  }
}
export default Helper;