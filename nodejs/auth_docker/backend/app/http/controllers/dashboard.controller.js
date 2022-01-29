const {User, Profile} = require('../../models')

exports.dashboard = async (req, res, next) => {
    const {user_id, email} = req.user

    const user = await User.findOne({ where: {email, id: user_id },
        include: ['profile']})

    console.log(user)

    return res.status(200).json({message: "Authorize", user})
}