/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  knex.raw('SET foreign_key_checks = 0;');
  knex.raw('TRUNCATE roles;');
  knex.raw('SET foreign_key_checks = 1;');
  await knex('roles').insert([
    {id: 1, name: 'superadmin'},
    {id: 2, name: 'admin perpustakaan'},
    {id: 3, name: 'peserta'},
  ]);
};
