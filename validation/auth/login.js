const Joi = require('joi');

module.exports = Joi.object().keys({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().min(1).max(60).required()
});