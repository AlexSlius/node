const bd = require('../bd');

class UserController {
    async createUser(ctx) {
        const { name, surname } = ctx.request.body;
        const newPerson = await bd.query(`INSERT INTO person (name, surname) values($1, $2) RETURNING *`, [name, surname]);

        ctx.body = ctx.body = {
            status: 'ok',
            data: {
                ...newPerson.rows[0]
            }
        };
    }
    async getUsers(ctx) {
        const users = await bd.query(`SELECT * from person`);

        ctx.body = {
            status: 'ok',
            data: {
                ...users.rows
            }
        };
    }
    async getOneUser(ctx) {
        const { id } = ctx.params;
        const user = await bd.query(`SELECT * from person where id = $1`, [id]);

        ctx.body = ctx.body = {
            status: 'ok',
            data: {
                ...user.rows[0]
            }
        };
    }
    async updateUser(ctx) {
        const { id } = ctx.params;
        const { name, surname } = ctx.request.body;
        const user = await bd.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`, [name, surname, id]);

        ctx.body = {
            status: 'ok',
            data: {
                ...user.rows[0]
            }
        };
    }
    async deleteUser(ctx) {
        const { id } = ctx.params;

        await bd.query(`DELETE FROM person where id = $1`, [id]);

        ctx.body = {
            status: 'ok'
        };
    }
}

module.exports = new UserController();