var express = require('express');
var router = express.Router();
require('express-router-group');

const secure = require("../app/middlewares/secure")
const authHandler = require("../app/handler/auth.handler")
const userHandler= require("../app/handler/users.handler")

const {userValidationRules, validate} = require('../validations/validation')

router.post("/login", authHandler.login)

router.group('/users', router => {

    // CREATE DATA USER
    router.post("/", secure.authenticateToken, userValidationRules(), validate, userHandler.create)
    router.get("/", secure.authenticateToken, userHandler.index)
})

module.exports = router