const { User } = require('../../database/models');

const get_one = async (ctx) => {
    const { id } = ctx.params;

    if (id > 0 && id) {
        await User.findOne(
            {
                where: {
                    id
                }
            })
            .then(res => {
                if (res) {
                    ctx.status = 200;
                    ctx.body = {
                        isError: false,
                        data: res,
                    }

                    return;
                }

                ctx.status = 200;
                ctx.body = {
                    isError: true,
                    message: 'No such user exists',
                }
            })
            .catch(err => console.log("error get all User ", err));
    }
}

module.exports = get_one;