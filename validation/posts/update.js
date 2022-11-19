const Joi = require('joi');

module.exports = Joi.object().keys({
    title: Joi.string().min(1).max(30).required(),
    description: Joi.string().min(50).max(200).required(),
    text: Joi.string().required(),
    user_id: Joi.number().integer().min(1).required()
});