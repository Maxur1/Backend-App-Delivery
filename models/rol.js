const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../database/connection');

class Rol extends Model {
    static id;
    static name;
}

Rol.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbConnect,
    modelName: 'Rol'
});

module.exports = Rol;