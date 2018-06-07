
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('users').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('users', function(table) {
          table.increments('id').primary();
          table.string('name', 100);
          table.string('email', 100).nullable().unique();
          table.timestamps(true, true);
        })
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};