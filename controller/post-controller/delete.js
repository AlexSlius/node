const { Post } = require('../../database/models');

const delete_post = async (ctx) => {
    const { id } = ctx.params;

    if (id > 0 && id) {
        await Post.destroy({ where: { id } })
            .then(res => {
                ctx.status = 200;
                ctx.body = {
                    isError: false,
                    message: 'post delete',
                };
            })
            .catch(err => console.log("error delete post: ", err));
    }
}

module.exports = delete_post;