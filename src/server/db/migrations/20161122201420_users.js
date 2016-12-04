exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('fb_id').unique().notNullable();
    table.integer('total_points').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
