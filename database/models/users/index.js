const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Users extends Model { };

    Users.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                required: true
            },
            password: {
                type: DataTypes.STRING,
                required: true
            }
        },
        {
            sequelize,
            modelName: 'users'
        }
    );

    return Users;
}