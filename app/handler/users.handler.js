const userService = require('../services/users.service')
const sendResponse = require("../resources/responseApi")

async function create(req, res) {
    try {
        let data = await userService.findByUsername(req)
        let dataExist = data.length > 0
        if (dataExist) {
            res.status(400).send(sendResponse.userExist())
        } else {
            let dataId = await userService.create(req)
            let responseSuccess = sendResponse.successCreate(dataId)
            res.status(201).send(responseSuccess)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(sendResponse.internalServerError())
    }
}

async function index(req, res) {
    try {
        if (req.user.role_id == 3) {
            return res.status(403).send(sendResponse.unauthorized('forbidden'))
        }
        
        let data = await userService.findAll()
        if(data.length == 0) {
            return res.status(404).send(sendResponse.dataNotFoundException())
        }
        return res.status(200).send(sendResponse.successGet(data))
    } catch (error) {
        console.log(error)
        return res.status(500).send(sendResponse.internalServerError())
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        data = await userService.update(id, req)
        return res.status(200).send(sendResponse.successUpdate(data))
    } catch (error) {
        console.log(error)
        return res.status(500).send(sendResponse.internalServerError())
    }
}

module.exports = {
    create,
    index,
    update
}