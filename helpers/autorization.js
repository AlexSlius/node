const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys.json');

const passwordResultMod = (passwordIn, passwordCandidate) => {
    return bcrypt.compareSync(passwordIn, passwordCandidate);
}

const tokenMod = (obj) => {
    return jwt.sign({
        ...obj,
    }, keys.jwt, { expiresIn: 60 * 60 });
}

const saltMod = (paraps = 10) => {
    return bcrypt.genSaltSync(paraps);
}

const bcPasswordVerification = (passwordIn, salt) => {
    return bcrypt.hashSync(passwordIn, salt);
}

module.exports = {
    passwordResultMod,
    tokenMod,
    saltMod,
    bcPasswordVerification
};

