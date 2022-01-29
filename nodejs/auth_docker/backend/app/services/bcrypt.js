const bcrypt = require('bcrypt');
const { bcrpy_salt } = require('../../config/app')

const salt = parseInt(bcrpy_salt);

exports.hash = async (password) => {
    const res = await bcrypt.hash(password, salt);
    if (!res) {
        return {message: "Our Server is Busy"}
    }
    return res;
}

exports.compare = async (password, hash_password) => {
    const res = await bcrypt.compare(password, hash_password);
    if (!res) {
        return false
    }
    return true;
}