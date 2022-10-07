const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig['development'])

async function findById(id) {
    return knex.select('u.id', 'u.full_name', 'u.username', knex.ref('r.id').as('role_id'), knex.ref('r.name').as('role_name')).from(knex.ref('users').as('u'))
    .join(knex.ref('roles').as('r'), 'r.id', '=', 'u.role_id')
    .where('u.id', id)
}

async function create(userData) {
    return knex('users').insert(userData)
}

async function findByUsername(username) {
    data = knex('users').where('username', username).limit(1)
    return data
}

async function findAll() {
    return knex.select('u.id', 'u.full_name', 'u.username', knex.ref('r.id').as('role_id'), knex.ref('r.name').as('role_name')).from(knex.ref('users').as('u'))
    .join(knex.ref('roles').as('r'), 'r.id', '=', 'u.role_id')
}

async function updateUser(id, data) {
    knex('users')
    .where({ id: id })
    .update(data, ['id'])
}

module.exports = {
    findById,
    create,
    findByUsername,
    findAll,
    updateUser
}