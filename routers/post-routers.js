const Router = require('koa-router');
const passport = require('koa-passport');

const router = new Router().prefix('/posts');
const postController = require('../controller/post-controller');

router.post('/', passport.authenticate('jwt', { session: false }), postController.create);
router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete_met);

module.exports = router.routes();