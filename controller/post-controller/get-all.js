const { Post } = require('../../database/models');

const get_all = async (ctx) => {
    await Post.findAll()
        .then(res => {
            ctx.status = 200;
            ctx.body = {
                isError: false,
                data: res,
            }
        })
        .catch(err => console.log("error get post all: ", err));
}

module.exports = get_all;