const Router = require('koa-router');

const router = new Router().prefix('/auth');
const authController = require('../controller/auth-controller');

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router.routes();