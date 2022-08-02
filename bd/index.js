const Pool = require('pg').Pool;
const pgConfig = require('./config.json');

const poll = new Pool(pgConfig);

module.exports = poll;