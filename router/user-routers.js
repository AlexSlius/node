const Router = require('koa-router');

const router = new Router().prefix('/users');
const UserController = require('../controller/user_controller');

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getOneUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router.routes();