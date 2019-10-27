import model from "../database/models";

const { User } = model

const emailCheck = async (req, res, next) => {
    const { email } = req.body;
    const emailExist = await User.findOne({
        where: {
            email,
        },
    });
    if (emailExist) {
        return res.status(409).json({
        message: "Email already exists. Input a different email"
        });
    }
    next()
}
export default emailCheck;