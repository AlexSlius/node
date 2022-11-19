const { Post } = require('../../database/models');

const get_one = async(ctx) => {
    const { id } = ctx.params;

    await Post.findOne(
        {
            where: {
                id
            }
        })
        .then(res => {
            ctx.status = 200;
            ctx.body = {
                isError: false,
                data: res,
            }
        })
        .catch(err => console.log("error get post all: ", err));
}

module.exports = get_one;