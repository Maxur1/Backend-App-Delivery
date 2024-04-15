const jwt = require('jsonwebtoken');

const generarJWT = (id = '') => {

    return new Promise((resolve, reject) => {

        const payload = { id };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1d' },
            (err, token) => {
                if (err) {
                    reject('No se pudo generar el token');
                } else {
                    resolve(token);
                }
            });
        });
    }

    module.exports = generarJWT;