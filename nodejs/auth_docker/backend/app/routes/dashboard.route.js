const router = require('express').Router();
const { verify } = require('../services/jwt');

// models
const {dashboard} = require('../http/controllers/dashboard.controller');



router.get('', verify, dashboard)

module.exports = router