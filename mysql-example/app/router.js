'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.getAll);
  router.post('/user', controller.user.create);
  router.delete('/user', controller.user.delete);
};
