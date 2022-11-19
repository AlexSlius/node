const Router = require('koa-router');

const router = new Router().prefix('/users');
const userController = require('../controller/user-controller');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router.routes();