const { User } = require('../../database/models');
const { schemaUserCreate } = require('../../validation/index');
const request_middelware = require('../../middelware/request');

const create = async (ctx) => {
    const { error, value } = schemaUserCreate.validate(ctx.request.body);

    if (error) {
        request_middelware(ctx, {
            status: 400,
            isError: true,
            message: error.message
        });
        return;
    }

    await User.create(value, { raw: true })
        .then(res => {
            request_middelware(ctx, {
                message: 'profile created',
                data: res
            });
        })
        .catch(err => {
            console.log("errorrr: ", err);
            request_middelware(ctx, {
                status: 400,
                isError: true,
                message: 'phone must be unique',
            });
        });
}

module.exports = create;