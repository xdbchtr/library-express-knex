const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig['development'])

async function login(dataUser) {
    return knex.select('*').from('users').where('username', dataUser.username).limit(1)
}

module.exports = {
    login
}