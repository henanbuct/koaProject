const Router = require('koa-router');
const userInfoController = require('../controllers/user-info');

let router = new Router();
const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserINfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)

module.exports = routers