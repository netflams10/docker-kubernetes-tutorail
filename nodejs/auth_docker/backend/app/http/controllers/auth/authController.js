const { User, Profile } = require('../../../models');
const { compare } = require('../../../services/bcrypt');
const { get_token } = require('../../../services/jwt')
const {validationResult} = require('express-validator')
const _ = require('lodash');

exports.login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const {email, password} = req.body
    const response = await User.findOne({where: {email: email, isVerified: 'true'}});
    if (response === {} || response === null) return res.status(401).json({message: "Username or Password Incorrect"});

    const check_password = await compare(password, response.password)
    if (!check_password) return res.status(401).json({message: "Username or Password Incorrect"});
    const token = get_token(response);
    res.status(200).json({token: token, message: "Welcome Back!"});
    next();
}

exports.getUser = async (req, res, next) => {
    console.log(req.user);
    const { email, user_id} = req.user
    const user = await User.findOne({where: { email: email, id: user_id }, 
        include: [{model: Profile, as: 'profile'}]});

    if (!user) return res.status(401).json("Email or password Invalid!");

    const authUser = _.pick(user, ['email', 'username', 'isAdmin', 'admin_type'])
    return res.status(200).json(user);
    next();
}
