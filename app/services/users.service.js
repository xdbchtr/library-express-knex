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

async function update (id, request) {
    let data = {
        'full_name': request.body.full_name,
        username: request.body.username
    }

    if (request.body.password) {
        data.password = request.body.password
    }
    
    if (request.user.role_id == 1 || request.user.role_id == 2) {
        data.role_id = request.body.role_id
    } else {
        data.role_id = 3
    }

    console.log(data)
}

module.exports = {
    create,
    findByUsername,
    findAll,
    update
}