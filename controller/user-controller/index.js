const createUser = require('./create');
const getUsers = require('./get-all');
const getOneUser = require('./get-one');
const updateUser = require('./update');
const deleteUser = require('./delete');

module.exports = {
    createUser,
    getUsers,
    getOneUser,
    updateUser,
    deleteUser
};