const Router = require('koa-router');

const userRouter = require('./user-routers');
const postRouter = require('./post-routers');
const authRouter = require('./auth-router');

const router = new Router().prefix('/api');

router.use(userRouter);
router.use(postRouter);
router.use(authRouter);

module.exports = router;