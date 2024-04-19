const { Router, request, response, next } = require('express');
const { check } = require('express-validator');

//Controllers
const { register, login } = require('../controllers/authController');

// Middlewares
const { validateFields } = require('../middlewares/validate-fields');
const { verifyEmail } = require('../helpers/verify-email');

const router = Router();

router.post('/login', [
    check('email', 'El email es requerido').not().isEmpty(),
    check('password', 'La contraseña es invalida').not().isEmpty(),
    validateFields
], login);

router.post('/register', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('lastname', 'El apellido es requerido').not().isEmpty(),
    check('phone', 'El telefono es requerido').not().isEmpty(),
    check('email', 'El email es requerido').not().isEmpty(),
    check('email', 'El email debe ser valido').isEmail(),
    check('email', 'El email ya existe').custom(verifyEmail),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    validateFields
], register);

module.exports = router;