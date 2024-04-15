
const Usuario = require("../models/usuario");

const verificarEmailLogin = async (email) => {
    const existeEmail = await Usuario.findOne({
        where: {
            correo: email
        }
    });
    if (!existeEmail) {
        throw new Error("Credenciales incorrectas");
    }

}

const verificarEmail = async (email) => {
    //V
    const existeEmail = await Usuario.findOne({
        where: {
            correo: email
        }
    });
    if (existeEmail) {
        throw new Error("Ya existe un usuario con ese correo");
    }

}
//verificar si el email tiene el formato correcto  

module.exports = { verificarEmail };