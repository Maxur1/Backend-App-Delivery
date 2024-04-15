const { DataTypes, Model } = require('sequelize');
const databaseConexion = require('../database/conexion');

class Rol extends Model {
    static id;
    static nombre;
}

Rol.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: databaseConexion,
    modelName: 'Rol'
});

module.exports = Rol;