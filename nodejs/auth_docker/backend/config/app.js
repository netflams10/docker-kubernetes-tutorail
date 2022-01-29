module.exports = {
    path: __dirname + "/..",
    storage: __dirname + "/../storage/public",
    jwt_secret: process.env.JWT_SECRET,
    bcrpy_salt: process.env.BCRYPT_HASH
}