const { Router, request, response, next } = require("express");
const { check } = require("express-validator");

// Controller
const { registrarUsuario, loginUsuario } = require("../controllers/authController");

// Middleware
const { validarCampos } = require("../middlewares/validar-campo");
const { verificarEmail } = require("../utils/verificar-email");

const router = Router();

router.get("/login", [
    check("correo", "El correo es requerido").not().isEmpty(),
    check("correo", "El correo es invalido").isEmail(),
    check("contrasenia", "La contraseña es requerida").not().isEmpty(),
    validarCampos
], loginUsuario);

router.post("/registrar",[
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("apellido", "El apellido es requerido").not().isEmpty(),
    check("telefono", "El telefono es requerido").not().isEmpty(),
    check("correo", "El correo es requerido").not().isEmpty(),
    check("correo", "El campo del correo es invalido").isEmail(),
    check("correo", "El correo es requerido").custom(verificarEmail),
    check("contrasenia", "La contraseña es requerida").not().isEmpty(),
validarCampos
], registrarUsuario);

module.exports = router;