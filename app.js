require('dotenv').config();

const koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const passport = require('koa-passport')

const app = new koa();
const router = require('./routers');

passport.initialize()
require('./middelware/passport')(passport);

app.use(cors());
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;