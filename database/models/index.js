const Sequelize = require('sequelize');
const path = require("path");
const config = require('../../config/database.json');

const Person = require('./person');

// initialize database connection
const sequelize = new Sequelize(
    config['nameBd'],
    config['userBd'],
    config['passwordBd'],
    config['options']
);

const db = {};

db.Person = Person(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// synchronization with database
sequelize.sync()
// .then(result => console.log("sequelize: ", result))
// .catch(err => console.log("error sequelize: ", err));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
