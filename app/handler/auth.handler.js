const Auth = require("../repositories/auth.repository")
const sendResponse = require("../resources/responseApi")
const jwt = require("../services/jwt")
let bcrypt = require('bcrypt')
let salt = bcrypt.genSaltSync(10)

async function login(req, res) {
    try {
        let {username, password} = req.body
        if(!username || !password) {
            res.status(400).send({
                message: "Username or Password is Required",
            })
        } else {
            let dataUser = {
                "username": username,
                "password": password
            }
            let data = await Auth.login(dataUser)
            if(data.length == 0) {
                res.status(404).send(sendResponse.dataNotFoundException())
            } else {
                let isSync = bcrypt.compareSync(password, data[0].password)
                if(isSync) {
                    let token = jwt.generateAccessToken(data[0].id)
                    res.status(200).send(sendResponse.successLogin(token, data))
                } else {
                    res.status(401).send(sendResponse.unauthorized("Password Mismatch"))
                }
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(sendResponse.internalServerError())
    }
}

module.exports = {
    login
}