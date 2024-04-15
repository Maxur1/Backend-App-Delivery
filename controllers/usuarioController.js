const { request, response } = require("express");

const Usuario = require('../models/usuario');
const Rol  = require('../models/rol');
const generarJWT = require('../utils/generar-jwt');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validarCampos } = require('../middlewares/validar-campo');


// Metodo para buscar un usuario por su id
const buscarUsuarioPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findOne({ where: { id } });

        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        return res.status(200).json({
            success: true,
            data: usuario,
            message: 'Usuario encontrado'
        });

    } catch (error) {
        res.status(500).send({
            message: 'Error al buscar el usuario',
            error
        });
    }
}
module.exports = {
    buscarUsuarioPorId
}