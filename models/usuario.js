const { DataTypes, Model } = require('sequelize');
const databaseConexion = require('../database/conexion');

class Usuario extends Model {
    static id;
    static nombre;
    static apellido;
    static correo;
    static telefono;
    static contrasenia;
    static imagen;
}

Usuario.init({

    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING
    },
    contrasenia: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: databaseConexion,
    modelName: 'Usuario'
});
Usuario.Rol = Usuario.belongsTo(require ('./rol'), {foreignKey: 'rol_id'});

Usuario.prototype.toJSON = function () {
    const usuario = this.get();
    // Destructura el objeto, en este caso, Usuario
    // Elimina la contraseña del objeto
    delete usuario.contrasenia;
    // incluimos el atributo rol_id
    usuario.rol_id = this.getDataValue('rol_id');
    return usuario;
}

module.exports = Usuario;