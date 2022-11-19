const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().min(1).max(30).required(),
    surname: Joi.string().min(1).max(60).required(),
    phone: Joi.string().min(4).max(20).required(),
});