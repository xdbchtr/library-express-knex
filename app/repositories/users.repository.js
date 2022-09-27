const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig['development'])

async function findById(id) {
    return knex('users').where('id', id)
}

async function create(userData) {
    return knex('users').insert(userData)
}

async function findByUsername(username) {
    data = knex('users').where('username', username).limit(1)
    return data
}

module.exports = {
    findById,
    create,
    findByUsername
}