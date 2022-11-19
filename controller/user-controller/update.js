const { User } = require('../../database/models');

const { schemaUserCreate } = require('../../validation/index');

const update = async (ctx) => {
    const { id } = ctx.params;

    if (id > 0 && id) {
        const { error, value } = schemaUserCreate.validate(ctx.request.body);

        if (error) {
            ctx.status = 400;
            ctx.body = {
                isError: true,
                message: error.message,
            };

            return;
        }

        await User.update(value, { where: { id }, raw: true })
            .then(res => {
                ctx.status = 200;
                ctx.body = {
                    isError: false,
                    message: 'profile update',
                    data: res
                };
            })
            .catch(err => console.log("err: ", err));
    }
}

module.exports = update;