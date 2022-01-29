const {body} = require("express-validator");
const { User } = require("../../models")

module.exports = [
    body('first_name').trim().escape().isString().isLength({ min: 2 }),

    body('last_name').trim().escape().isString().isLength({ min: 2 }),

    body('username').trim().escape().isString().isLength({ min: 2 }).custom(async (value) => {
        const result = await User.findOne({where: {username: value}});
        if (result) throw new Error("Username already Exists!");
        return result;
    }),

    body('email').isEmail().normalizeEmail().isString().custom(async (value) => {
        const result = await User.findOne({where: {email: value}})
        if (result) throw new Error("Email Already exists!");
        return result;
    }),

    body('gender').isNumeric().trim(),
    body('password').isStrongPassword().isLength({ min: 7}),
]