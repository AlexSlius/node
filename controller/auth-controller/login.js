const { schemaAuthLogin } = require('../../validation');
const { User } = require('../../database/models');
const request_middelware = require('../../middelware/request');
const { tokenMod, passwordResultMod } = require('../../helpers/autorization');

const login = async (ctx) => {
    const { error, value } = schemaAuthLogin.validate(ctx.request.body);

    if (error) {
        request_middelware(ctx, {
            status: 400,
            isError: true,
            message: "Incorrect data"
        });

        return;
    }

    const candidate = await User.findOne({ where: { email: value.email } });

    if (candidate) {
        const passwordResult = passwordResultMod(value.password, candidate.password);

        if (passwordResult) {
            const token = tokenMod({
                email: candidate.value,
                userId: candidate.id
            });

            request_middelware(ctx, {
                data: {
                    user: candidate,
                    token: `Bearer ${token}`
                }
            });
        } else {
            request_middelware(ctx, {
                status: 401,
                isError: true,
                message: "Invalid password"
            });
        }
    } else {
        request_middelware(ctx, {
            status: 401,
            isError: true,
            message: "No such user exists"
        });
    }
}

module.exports = login;