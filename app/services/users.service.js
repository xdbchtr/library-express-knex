const User = require("../repositories/users.repository")
const bcrypt = require('bcrypt')
var salt = bcrypt.genSaltSync(10)

async function findByUsername(request) {
    return User.findByUsername(request.body.username)
}

async function findAll() {
    return User.findAll()
}

async function create (request) {
    let password = bcrypt.hashSync(request.body.password, salt)
    const userData = {
        full_name: request.body.full_name,
        username: request.body.username,
        password: password,
        role_id: request.body.role_id
    }
    let dataId = await User.create(userData)
    return dataId
}

module.exports = {
    create,
    findByUsername,
    findAll
}