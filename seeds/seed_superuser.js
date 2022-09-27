/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 const bcrypt = require('bcrypt')
 var salt = bcrypt.genSaltSync(10)
 let password = bcrypt.hashSync('admin123', salt)

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').where('id', 1).del()
  await knex('users').insert([
    {id: 1, full_name: 'admin', username: 'admin', password: password},
  ]);
};
