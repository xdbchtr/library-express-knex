var express = require('express');
var router = express.Router();
require('express-router-group');

const secure = require("../app/middlewares/secure")
const authHandler = require("../app/handler/auth.handler")
const userHandler= require("../app/handler/users.handler")
const { check } = require('express-validator');

router.post("/login", authHandler.login)

router.group('/users', router => {

    // CREATE DATA USER
    router.post("/",
    secure.authenticateToken,
    //Start of Validation
    //Username
    check('username')
    .isEmail()
    .withMessage('Email tidak Valid'),
    //Password
    check('password')
    .isLength({ min: 5 })
    .withMessage('Password Minimal 5 Karakter'),
    //End of Validation
    userHandler.create)
})

module.exports = router