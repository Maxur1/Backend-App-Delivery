const { Router, request, response, next } = require("express");
const { check } = require("express-validator");

// Controller
const { registrarUsuario } = require("../controllers/usuarioController");
const usuarioController = require("../controllers/usuarioController");

// Middleware
const { validarCampos } = require("../middlewares/validar-campo");

const router = Router();

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATOS
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS
    

//** GETS */
router.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la API RESTful"
    });
});

// Buscr por id
router.get("/buscar/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);

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
});

module.exports = router;