/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 const bcrypt = require('bcrypt')
 var salt = bcrypt.genSaltSync(10)
 let password = bcrypt.hashSync('admin123', salt)

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  knex.raw('SET foreign_key_checks = 0;');
  knex.raw('TRUNCATE users;');
  knex.raw('SET foreign_key_checks = 1;');
  await knex('users').insert([
    {id: 1, full_name: 'admin', username: 'admin', password: password, role_id: 1},
  ]);
};
