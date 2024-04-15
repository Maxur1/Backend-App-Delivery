const Usuario = require('../models/usuario');
const Rol  = require('../models/rol');
const generarJWT = require('../utils/generar-jwt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registrarUsuario = async (req, res) => {

    try {
        const datosUsuario = req.body;

        // Obtenemos el rol del usuario
        const rol = await Rol.findOne({ where: { nombre: 'CLIENTE' } });
        
        // Crea el usuario en la base de datos
        const usuario = new Usuario(datosUsuario);
        const salt = bcrypt.genSaltSync();
        usuario.contrasenia = bcrypt.hashSync(datosUsuario.contrasenia, salt);
        await usuario.save();

        // Crea el token
        const token = await generarJWT(usuario.id);

        const { nombre, apellido, telefono, correo } = usuario;
        datosUsuario.session_token = token;

        return res.status(201).json({
            success: true,
            data: datosUsuario,
            message: `Usuario ${nombre} ${apellido} registrado correctamente`
        });

    } catch (error) {
        res.status(500).send({
            message: 'Error al registrar el usuario',
            error
        });
    }
}

module.exports = {
    registrarUsuario
}