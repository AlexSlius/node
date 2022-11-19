const request = (
    ctx,
    obj,
) => {
    let def = {
        status: 200,
        isError: false,
        message: '',
        data: null,
        ...obj,
    };
    switch (def.isError) {
        case true: {
            ctx.status = def.status;
            ctx.body = {
                isError: true,
                message: def.message,
            }
            break;
        }
        case false: {
            let objBody = {};

            if (def.data) {
                objBody.data = def.data;
            }

            if (def.message) {
                objBody.message = def.message;
            }

            ctx.status = def.status;
            ctx.body = {
                ...objBody,
            }
            break;
        }
    }
}

module.exports = request;