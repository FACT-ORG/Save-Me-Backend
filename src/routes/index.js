import Users from '../controllers/User';
import emailCheck from '../middlewares/EmailCheck';
import UserValidator from "../middlewares/ValidateUser"

export default (app) => {

    app.get('/api/v1', (req, res) => res.status(200).send({
        message: 'Welcome to the Save Me API!',
    }));

    // API route for user to signup
    app.post('/api/v1/auth/signup', UserValidator.userSignUpValidator, emailCheck, Users.signUp); 
    app.post('/api/v1/auth/signin', Users.signIn)
};