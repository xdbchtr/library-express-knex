const userService = require('../services/users.service')
const sendResponse = require("../resources/responseApi")
const { validationResult } = require('express-validator');

async function create(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        res.status(422).send(sendResponse.unprocessableEntityError(errors.array()))
        } else {
            let data = await userService.findByUsername(req)
            let dataExist = data.length > 0
            if (dataExist) {
                res.status(400).send(sendResponse.userExist())
            } else {
                let dataId = await userService.create(req)
                let responseSuccess = sendResponse.successCreate(dataId)
                res.status(201).send(responseSuccess)
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(sendResponse.internalServerError())
    }
}

module.exports = {
    create
}