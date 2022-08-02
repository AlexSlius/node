require('dotenv').config();

const koa = require('koa');
const koaBody = require('koa-body');

const app = new koa();
const router = require('./router');

const logs = require('./logs');

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? "0.0.0.0";

app.use(async (ctx, next) => {
    try {
        await logs(ctx.request.header);
        await next();
    } catch {
        console.error("Internal error logs");
    }
});

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, host, () => {
    console.log(`Start server port ${port}, host ${host}`);
});