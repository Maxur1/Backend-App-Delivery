const { Router } = require("express");
const { check } = require("express-validator");

// Controller
const { registrarUsuario } = require("../controllers/usuarioController");


const router = Router();

router.post("/registrar", [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("apellido", "El apellido es requerido").not().isEmpty(),
    check("telefono", "El telefono es requerido").not().isEmpty(),
    check("correo", "El correo es requerido").not().isEmpty(),
    check("contrasenia", "La contraseña es requerida").not().isEmpty()
    ],
    registrarUsuario
);

router.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la API RESTful"
    });
});


module.exports = router;