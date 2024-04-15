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
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: databaseConexion,
    modelName: 'Usuario'
});
Usuario.Rol = Usuario.belongsTo(require ('./rol'), {foreignKey: 'rol_id'});

Usuario.prototype.toJSON = function () {
    // Destructura el objeto, en este caso, Usuario
    const { contrasenia, ...usuario } = this.get();
    // Elimina la contraseña del objeto
    delete usuario.contrasenia;
    // incluimos el atributo rol_id
    usuario.rol_id = this.getDataValue('rol_id');
    return usuario;
}

module.exports = Usuario;