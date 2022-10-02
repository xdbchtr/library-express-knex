const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const sendResponse = require("../resources/responseApi")
const User = require("../repositories/users.repository")
dotenv.config();

async function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        if(!authHeader) {
            res.status(403).send(sendResponse.unauthorized("Go Find Your Credential"))
        } else {
            const token = authHeader && authHeader.split(' ')[1]
            jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
                if(err){
                    res.status(403).send(sendResponse.unauthorized("False Credential"))
                } else {
                    let data = await User.findById(decoded.id)
                    let userData = {
                    "id": data[0].id,
                    "full_name": data[0].full_name,
                    "username": data[0].username,
                    "role_id": data[0].role_id,
                    "role_name": data[0].role_name
                    }
                    req.user = userData
                    next()
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(sendResponse.internalServerError())
    }
}

module.exports = {
    authenticateToken
}