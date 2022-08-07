const { Person } = require('../database/models');
class UserController {
    async createUser(ctx) {
        const { name, surname } = ctx.request.body;

        const createdPerson = await Person.create({ name, surname }, { raw: true });

        console.log("createdPerson: ", createdPerson);

        ctx.body = ctx.body = {
            status: 'ok',
            data: createdPerson,
        };
    }
}

module.exports = new UserController();