const Router = require('koa-router');

const userRouter = require('./user_routers');

const router = new Router().prefix('/api');

router.use(userRouter);

module.exports = router;