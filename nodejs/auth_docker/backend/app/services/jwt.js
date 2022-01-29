const jwt = require('jsonwebtoken');
const {jwt_secret} = require("../../config/app");

exports.get_token = user => {
    return jwt.sign({ user_id: user.id, email: user.email }, jwt_secret, { expiresIn: 60 * 60 })
}

exports.verify = async (req, res, next) => {
    const authHeader = req.headers['x-auth-token'];
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({message: "Please Log In"});

    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) return res.status(401).json({message: "Please Log In"});
        req.user = user
        next();
    })
}