const bcrypt = require('bcryptjs');

const { schemaAuthRegist } = require('../../validation');
const { User } = require('../../database/models');
const request_middelware = require('../../middelware/request');
const { tokenMod, passwordResultMod, saltMod, bcPasswordVerification } = require('../../helpers/autorization');

const register = async (ctx) => {
    const { error, value } = schemaAuthRegist.validate(ctx.request.body);

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
        request_middelware(ctx, {
            status: 409,
            isError: true,
            message: "Thera is alredy a user with the email!"
        });

        return;
    } else {
        const salt = saltMod();

        let userNewObj = {
            email: value.email,
            password: bcPasswordVerification(value.password, salt),
        };

        try {
            await User.create(userNewObj, { raw: true }).then((res) => {
                const passwordResult = passwordResultMod(value.password, res.password);

                if (passwordResult) {
                    const token = tokenMod({
                        email: res.value,
                        userId: res.id
                    });

                    request_middelware(ctx, {
                        status: 201,
                        data: { user: res, token: `Bearer ${token}` },
                        message: 'created'
                    });
                } else {
                    request_middelware(ctx, {
                        status: 401,
                        isError: true,
                        message: "Invalid"
                    });
                }
            })
        } catch (error) {
            // error
        }
    }
}

module.exports = register;