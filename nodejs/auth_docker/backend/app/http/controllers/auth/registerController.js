const {validationResult} = require('express-validator')
const {User, Profile} = require('../../../models');



const { hash } = require('../../../services/bcrypt')

module.exports = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const { first_name, username,last_name, email, gender, password } = req.body
    const hashed_password = await hash(password)

    const user = await User.create({ username, email, password: hashed_password})

    if (user ===  null) {
        return res.status(201).json({"message": "Server Busy!", data})
    }

    const profile = await Profile.create({first_name, last_name, gender, userId: user.id });
    const data = { user, profile}

    return res.status(201).json({"message": "User Created", data})
    next()
}