const { User } = require('../../database/models');

const delete_user = async (ctx) => {
    const { id } = ctx.params;

    if (id > 0 && id) {
        await User.destroy({ where: { id } })
            .then(res => {
                ctx.status = 200;
                ctx.body = {
                    isError: false,
                    message: 'profile delete',
                };
            })
            .catch(err => console.log("err: ", err));
    }
}

module.exports = delete_user;