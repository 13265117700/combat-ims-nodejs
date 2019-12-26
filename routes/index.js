var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');
var classifyController = require('./../controllers/classify');
var essayController = require('./../controllers/essay');
var authController = require('./../controllers/auth');
var authMiddleware = require('./../middlewares/auth');
var indexController = require('./../controllers/index');

router.get('/',indexController.show);
router.get('/index/:id/paging',indexController.paging);
router.get('/index/:id/essay',indexController.renderEssayItem);

router.get('/exit',authController.exit);
router.get('/admin/login',authController.renderLogin);

router.get('/admin/user',authMiddleware.mustLogin,authMiddleware.mustRoot,userController.show);
router.get('/admin/user_create',authMiddleware.mustLogin,authMiddleware.mustRoot,userController.renderUserCreate);
router.get('/admin/user/:id/edit',authMiddleware.mustLogin,authMiddleware.mustRoot,userController.edit);

router.get('/admin/classify',authMiddleware.mustLogin,authMiddleware.mustRoot,classifyController.show);
router.get('/admin/classify_create',authMiddleware.mustLogin,authMiddleware.mustRoot,classifyController.renderClassifyCreate);

router.get('/admin/essay',authMiddleware.mustLogin,essayController.show);
router.get('/admin/essay_create',authMiddleware.mustLogin,essayController.renderEssayCreate);
router.get('/admin/essay/:id/edit',authMiddleware.mustLogin,essayController.edit);



module.exports = router;
