const { Post } = require('../../database/models');

const { shemaPostUpdate } = require('../../validation');

const update = async (ctx) => {
    const { id } = ctx.params;

        if (id > 0 && id) {
            const { error, value } = shemaPostUpdate.validate(ctx.request.body);

            if (error) {
                ctx.status = 400;
                ctx.body = {
                    isError: true,
                    message: error.message,
                };

                return;
            }

            await Post.update(value, { where: { id }, raw: true })
                .then(res => {
                    ctx.status = 200;
                    ctx.body = {
                        isError: false,
                        message: 'post update',
                        data: res
                    };
                })
                .catch(err => console.log("err: ", err));
        }
}

module.exports = update;