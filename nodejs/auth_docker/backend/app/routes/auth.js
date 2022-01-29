const router = require('express').Router();
const controller = require('../http/controllers/auth/authController');
const register = require('../http/controllers/auth/registerController');
const validate = require('../http/requests/login.request');
const register_validate = require('../http/requests/register.request')
const verify = require('../services/jwt')

router.post('/login', validate, controller.login);
router.get('/user', verify.verify, controller.getUser);
router.post('/register', register_validate, register);

module.exports = router