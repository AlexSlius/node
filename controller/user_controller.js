const { Person } = require('../database/models');
const { schemaUserCreate } = require('../validation/index');
class UserController {
    async createUser(ctx) {
        const { error, value } = schemaUserCreate.validate(ctx.request.body);

        if (error) {
            ctx.status = 400;
            ctx.body = {
                isError: true,
                message: error.message,
            };

            return;
        }

        const findOne = await Person.findOne({
            where: value
        });

        if (findOne) {
            ctx.status = 400;
            ctx.body = {
                isError: true,
                message: `profile ${ctx.request.body.name} ${ctx.request.body.surname} aleready exists`,
            };

            return;
        }

        await Person.create(value, { raw: true })
            .then(res => {
                ctx.status = 200;
                ctx.body = {
                    isError: false,
                    message: 'profile created',
                    data: res
                };
            })
            .catch(err => console.log("err: ", err));
    }

    async getUsers(ctx) {
        await Person.findAll()
            .then(res => {
                ctx.status = 200;
                ctx.body = {
                    isError: false,
                    data: res,
                }
            })
            .catch(err => console.log("error get all person ", err));
    }

    async getOneUser(ctx) {
        const { id } = ctx.params;

        if (id > 0 && id) {
            await Person.findOne(
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
                .catch(err => console.log("error get all person ", err));
        }
    }

    async updateUser(ctx) {
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

            await Person.update(value, { where: { id }, raw: true })
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

    async deleteUser(ctx) {
        const { id } = ctx.params;

        if (id > 0 && id) {
            await Person.destroy({ where: { id } })
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
}

module.exports = new UserController();