const { request, response } = require("express");
const bcryptjs  = require("bcryptjs");


const Usuario = require("../models/usuario");
const Rol  = require("../models/rol");

const generarJWT = require("../utils/generar-jwt");

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATOS
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS
    

//login
const loginUsuario = async (req = request, res = response) => {
    try{
        const { correo, contrasenia } = req.body;
        const usuario = await Usuario.findOne({ where: { correo } });
        
        if (!usuario) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        if (!bcryptjs.compareSync(contrasenia, usuario.contrasenia)) {
            return res.status(400).json({
                success: false,

                message: 'Credenciales incorrectas'
            });
        }

        const token = await generarJWT(usuario.id);
        
        const datosUsuario = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            telefono: usuario.telefono,
            rol_id: usuario.rol_id,
            session_token: token
        }
        console.log(token);
        res.status(200).json({
            success: true,
            token,
            message: `Usuario ${usuario.nombre} ${usuario.apellido} logueado correctamente`
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error del servidor',
            error
        });
    }

}
const registrarUsuario = async (req = request, res = response) => {
    try {
        const datosUsuario = req.body;
        // Obtenemos el rol del usuario
        const rol = await Rol.findOne({ where: { nombre: 'CLIENTE' } });
        datosUsuario['rol_id'] = rol.id;

        // Crea el usuario en la base de datos
        const usuario = new Usuario(datosUsuario);
        const salt = bcryptjs.genSaltSync();
        usuario.contrasenia = bcryptjs.hashSync(usuario.contrasenia, salt);
        
        await usuario.save();

        res.status(200).json({
            success: true,
            data: datosUsuario,
            message: `Usuario ${usuario.nombre} ${usuario.apellido} registrado correctamente`
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al registrar el usuario',
            error
        });
    }
}

module.exports = {
    loginUsuario,
    registrarUsuario
}