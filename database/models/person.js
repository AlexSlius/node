const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Person extends Model { };

    Person.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING
            },
            surname: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: 'persons'
        }
    );

    return Person;
}