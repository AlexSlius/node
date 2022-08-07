const Router = require('koa-router');

const userRouter = require('./user-routers');

const router = new Router().prefix('/api');

router.use(userRouter);

module.exports = router;