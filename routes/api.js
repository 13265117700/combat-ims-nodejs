var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');
var classifyController = require('./../controllers/classify');
var essayController = require('./../controllers/essay');
var authController = require('./../controllers/auth');

router.post('/admin/login',authController.login);

router.delete('/admin/user',userController.delete);
router.post('/admin/user_create',userController.insert);
router.put('/admin/user/:id/edit',userController.updated);

router.post('/admin/classify_create',classifyController.insert);
router.delete('/admin/classify',classifyController.delete);

router.post('/admin/essay_create',essayController.insert);
router.put('/admin/essay/:id/edit',essayController.updated);
router.delete('/admin/essay',essayController.delete);

module.exports = router;
