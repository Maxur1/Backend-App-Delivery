const User = require("../models/user");




const verifyEmailLogin = async (email) => {
    const existEmail = await User.findOne({ where: { email } });

    if (!existEmail) {
        throw new Error('Credenciales incorrectas.');
    }
}


const verifyEmail = async (email) => {
    const existEmail = await User.findOne({ where: { email } });

    if (existEmail) {
        throw new Error('El email ya existe.');
    }
}


module.exports = {
    verifyEmailLogin,
    verifyEmail,
};