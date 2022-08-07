const Router = require('koa-router');

const router = new Router().prefix('/users');
const UserController = require('../controller/user_controller');

router.post('/', UserController.createUser);

module.exports = router.routes();