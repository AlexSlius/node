const { Post } = require('../../database/models');

const { shemaPostCreate } = require('../../validation');

const create = async (ctx) => {
    const { error, value } = shemaPostCreate.validate(ctx.request.body);

    if (error) {
        ctx.status = 400;
        ctx.body = {
            isError: true,
            message: error.message,
        };

        return;
    }

    await Post.create(value, { raw: true })
        .then(res => {
            ctx.status = 200;
            ctx.body = {
                isError: false,
                message: 'post created',
                data: res
            };
        })
        .catch(err => console.log("error create post: ", err));
}

module.exports = create;