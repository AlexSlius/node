const Sequelize = require('sequelize');
const config = require('../../config/database.json');

const Users = require('./users');
const Post = require('./post');

// initialize database connection
const sequelize = new Sequelize(
    config['nameBd'],
    config['userBd'],
    config['passwordBd'],
    config['options']
);

const db = {};

db.User = Users(sequelize, Sequelize.DataTypes);
db.Post = Post(sequelize, Sequelize.DataTypes);

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
