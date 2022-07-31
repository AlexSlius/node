require('dotenv').config()

const koa = require('koa');
const app = new koa();

const port = process.env.PORT ?? 3000;
const host = process.env.HOST ?? "0.0.0.0";

app.use(async ctx => {
    ctx.body = 'Hello World';
});

app.listen(port, host, () => {
    console.log(`Start server port ${port}, host ${host}`);
})