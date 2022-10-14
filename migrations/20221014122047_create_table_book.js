/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.string('image_url', 255);
    table.integer('stock');
    table.integer('available');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('books');
};
