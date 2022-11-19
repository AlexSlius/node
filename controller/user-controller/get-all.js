const { User } = require('../../database/models');

const get_all = async (ctx) => {
    await User.findAll()
    .then(res => {
        ctx.status = 200;
        ctx.body = {
            isError: false,
            data: res,
        }
    })
    .catch(err => console.log("error get all User ", err));
}

module.exports = get_all;