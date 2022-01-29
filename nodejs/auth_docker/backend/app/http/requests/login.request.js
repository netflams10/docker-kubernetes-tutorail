const {body, check} = require('express-validator');
const {User} = require('../../models');

module.exports = [
    body('email').normalizeEmail().isEmail().isString().custom(async (value) => {
        const result = await User.findOne({ where: { email: value }})
        if (!result) throw new Error("Email or Password Incorrect!")
        return result;
    }),
    body('password').isLength({min: 5})
]